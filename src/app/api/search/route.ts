import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q") || ""
    const category = searchParams.get("category")
    const country = searchParams.get("country")
    const minRating = searchParams.get("minRating")
    const maxPrice = searchParams.get("maxPrice")
    const verified = searchParams.get("verified") === "true"
    const online = searchParams.get("online") === "true"

    // Build filter conditions
    const where: any = {
      AND: [],
    }

    // Search in name, bio, category, location
    if (query) {
      where.AND.push({
        OR: [
          {
            user: {
              name: {
                contains: query,
              },
            },
          },
          {
            bio: {
              contains: query,
            },
          },
          {
            category: {
              name: {
                contains: query,
              },
            },
          },
          {
            country: {
              name: {
                contains: query,
              },
            },
          },
          {
            province: {
              name: {
                contains: query,
              },
            },
          },
        ],
      })
    }

    // Category filter
    if (category) {
      where.AND.push({
        category: {
          slug: category,
        },
      })
    }

    // Country filter
    if (country) {
      where.AND.push({
        country: {
          slug: country,
        },
      })
    }

    // Rating filter
    if (minRating) {
      where.AND.push({
        rating: {
          gte: parseFloat(minRating),
        },
      })
    }

    // Price filter
    if (maxPrice) {
      where.AND.push({
        costPerMinute: {
          lte: parseFloat(maxPrice),
        },
      })
    }

    // Verified filter
    if (verified) {
      where.AND.push({
        isVerified: true,
      })
    }

    // Online filter
    if (online) {
      where.AND.push({
        isOnline: true,
      })
    }

    // If no filters, remove the AND wrapper
    const finalWhere = where.AND.length > 0 ? where : {}

    // Fetch professionals
    const professionals = await prisma.professional.findMany({
      where: finalWhere,
      include: {
        user: {
          select: {
            name: true,
            image: true,
          },
        },
        category: {
          select: {
            name: true,
            slug: true,
          },
        },
        country: {
          select: {
            name: true,
            slug: true,
          },
        },
        province: {
          select: {
            name: true,
            slug: true,
          },
        },
      },
      orderBy: [
        { membershipType: 'desc' }, // GOLD first
        { rating: 'desc' },
        { isOnline: 'desc' },
      ],
      take: 50, // Limit results
    })

    return NextResponse.json({
      professionals,
      total: professionals.length,
      query,
      filters: {
        category,
        country,
        minRating,
        maxPrice,
        verified,
        online,
      },
    })
  } catch (error) {
    console.error("Error searching professionals:", error)
    return NextResponse.json(
      { error: "Error al buscar profesionales" },
      { status: 500 }
    )
  }
}
