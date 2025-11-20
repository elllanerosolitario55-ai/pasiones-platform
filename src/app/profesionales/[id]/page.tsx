import { notFound } from "next/navigation"
import Image from "next/image"
import { prisma } from "@/lib/prisma"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  MapPin,
  Clock,
  Video,
  MessageCircle,
  Heart,
  Verified,
  Award,
  Users,
  TrendingUp
} from "lucide-react"

interface ProfessionalProfilePageProps {
  params: Promise<{ id: string }>
}

async function getProfessional(id: string) {
  const professional = await prisma.professional.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          name: true,
          email: true,
          image: true,
        }
      },
      category: true,
      country: true,
      province: true,
      posts: {
        where: {
          isPublished: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 12,
      },
      reviews: {
        include: {
          user: {
            select: {
              name: true,
              image: true,
            }
          }
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 10,
      },
    },
  })

  return professional
}

function getMembershipBadge(type: string) {
  const badges = {
    GOLD: { color: "bg-gradient-to-r from-yellow-500 to-yellow-600", text: "ORO", icon: "👑" },
    SILVER: { color: "bg-gradient-to-r from-gray-400 to-gray-500", text: "PLATA", icon: "💎" },
    BRONZE: { color: "bg-gradient-to-r from-orange-600 to-orange-700", text: "BRONCE", icon: "🥉" },
    FREE: { color: "bg-gray-500", text: "GRATIS", icon: "" },
  }
  return badges[type as keyof typeof badges] || badges.FREE
}

export default async function ProfessionalProfilePage({ params }: ProfessionalProfilePageProps) {
  const { id } = await params
  const professional = await getProfessional(id)

  if (!professional) {
    notFound()
  }

  const membership = getMembershipBadge(professional.membershipType)
  const averageRating = professional.rating || 0
  const totalReviews = professional.reviewsCount || 0

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
        {professional.coverImage ? (
          <Image
            src={professional.coverImage}
            alt="Cover"
            fill
            className="object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-xl">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="relative mb-4">
                    <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                      <AvatarImage src={professional.avatar || professional.user.image || undefined} />
                      <AvatarFallback className="text-3xl bg-gradient-to-br from-pink-500 to-purple-600 text-white">
                        {professional.user.name?.[0]?.toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    {professional.isVerified && (
                      <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2">
                        <Verified className="h-5 w-5 text-white" />
                      </div>
                    )}
                    {professional.isOnline && (
                      <div className="absolute top-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white" />
                    )}
                  </div>

                  {/* Name & Membership */}
                  <h1 className="text-2xl font-bold mb-2">{professional.user.name}</h1>
                  <Badge className={`${membership.color} text-white mb-3`}>
                    {membership.icon} {membership.text}
                  </Badge>

                  {/* Category & Location */}
                  <p className="text-gray-600 mb-1">{professional.category.name}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {professional.province.name}, {professional.country.name}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(averageRating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold">{averageRating.toFixed(1)}</span>
                    <span className="text-gray-500">({totalReviews})</span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 w-full mb-6 py-4 border-y">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">{professional.totalSessions}</div>
                      <div className="text-xs text-gray-500">Sesiones</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{totalReviews}</div>
                      <div className="text-xs text-gray-500">Reviews</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {professional.isOnline ? "Online" : "Offline"}
                      </div>
                      <div className="text-xs text-gray-500">Estado</div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="w-full bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4 mb-4">
                    <div className="text-sm text-gray-600 mb-1">Precio por minuto</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      €{professional.costPerMinute.toFixed(2)}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="w-full space-y-2">
                    <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                      <Video className="h-4 w-4 mr-2" />
                      Iniciar Videochat
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Enviar Mensaje
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Heart className="h-4 w-4 mr-2" />
                      Favoritos
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">Sobre Mí</TabsTrigger>
                <TabsTrigger value="gallery">Galería</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              {/* About Tab */}
              <TabsContent value="about">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle>Descripción</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 whitespace-pre-wrap">
                      {professional.bio || "Este profesional aún no ha agregado una descripción."}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Gallery Tab */}
              <TabsContent value="gallery">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle>Galería ({professional.posts.length})</CardTitle>
                    <CardDescription>Contenido publicado por este profesional</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {professional.posts.length > 0 ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {professional.posts.map((post) => (
                          <div
                            key={post.id}
                            className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                          >
                            {post.images && Array.isArray(post.images) && post.images.length > 0 && (
                              <Image
                                src={post.images[0] as string}
                                alt="Post"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform"
                              />
                            )}
                            {post.isPaid && (
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <div className="text-center text-white">
                                  <Award className="h-8 w-8 mx-auto mb-2" />
                                  <div className="font-bold">€{post.price?.toFixed(2)}</div>
                                </div>
                              </div>
                            )}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                              <div className="flex items-center justify-between text-white text-xs">
                                <div className="flex items-center gap-2">
                                  <Heart className="h-3 w-3" />
                                  {post.likesCount}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users className="h-3 w-3" />
                                  {post.viewsCount}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">
                        Este profesional aún no ha publicado contenido.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle>Reviews ({totalReviews})</CardTitle>
                    <CardDescription>Opiniones de clientes verificados</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {professional.reviews.length > 0 ? (
                      <div className="space-y-4">
                        {professional.reviews.map((review) => (
                          <div key={review.id} className="border-b pb-4 last:border-0">
                            <div className="flex items-start gap-3">
                              <Avatar>
                                <AvatarImage src={review.user.image || undefined} />
                                <AvatarFallback>{review.user.name?.[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h4 className="font-semibold">{review.user.name}</h4>
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i < review.rating
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-gray-700 text-sm">{review.comment}</p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {new Date(review.createdAt).toLocaleDateString('es-ES')}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">
                        Este profesional aún no tiene reviews.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
