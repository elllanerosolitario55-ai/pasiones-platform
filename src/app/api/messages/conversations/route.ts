import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      )
    }

    // Get all messages where user is sender or receiver
    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: session.user.id },
          { receiverId: session.user.id },
        ],
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        receiver: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    // Group messages by conversation
    const conversationsMap = new Map()

    messages.forEach((message) => {
      const otherUserId = message.senderId === session.user.id
        ? message.receiverId
        : message.senderId

      const otherUser = message.senderId === session.user.id
        ? message.receiver
        : message.sender

      if (!conversationsMap.has(otherUserId)) {
        conversationsMap.set(otherUserId, {
          id: otherUserId,
          userId: otherUserId,
          userName: otherUser.name || "Usuario",
          userAvatar: otherUser.image,
          lastMessage: message.content,
          lastMessageTime: message.createdAt,
          unreadCount: 0,
          isOnline: false, // TODO: Implement real-time status
        })
      }

      // Count unread messages
      if (message.receiverId === session.user.id && !message.isRead) {
        const conv = conversationsMap.get(otherUserId)
        conv.unreadCount++
      }
    })

    const conversations = Array.from(conversationsMap.values())

    return NextResponse.json({
      conversations,
    })
  } catch (error) {
    console.error("Error fetching conversations:", error)
    return NextResponse.json(
      { error: "Error al cargar conversaciones" },
      { status: 500 }
    )
  }
}
