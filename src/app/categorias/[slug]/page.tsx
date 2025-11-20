import { notFound } from "next/navigation"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Star, Verified, Users } from "lucide-react"

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

async function getCategory(slug: string) {
  const category = await prisma.category.findUnique({
    where: { slug },
    include: {
      professionals: {
        where: {
          // Only show active professionals
        },
        include: {
          user: {
            select: {
              name: true,
              image: true,
            },
          },
          country: true,
          province: true,
        },
        orderBy: [
          { membershipType: 'desc' },
          { rating: 'desc' },
          { isOnline: 'desc' },
        ],
      },
    },
  })

  return category
}

function getMembershipColor(type: string) {
  const colors = {
    GOLD: "bg-yellow-100 text-yellow-800 border-yellow-300",
    SILVER: "bg-gray-100 text-gray-800 border-gray-300",
    BRONZE: "bg-orange-100 text-orange-800 border-orange-300",
    FREE: "bg-gray-50 text-gray-600 border-gray-200",
  }
  return colors[type as keyof typeof colors] || colors.FREE
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  const totalProfessionals = category.professionals.length
  const onlineProfessionals = category.professionals.filter(p => p.isOnline).length
  const verifiedProfessionals = category.professionals.filter(p => p.isVerified).length
  const averageRating = category.professionals.reduce((acc, p) => acc + p.rating, 0) / totalProfessionals || 0

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {category.icon && (
              <div className="text-6xl mb-4">{category.icon}</div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {category.name}
            </h1>
            {category.description && (
              <p className="text-xl text-pink-100 max-w-3xl mx-auto">
                {category.description}
              </p>
            )}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-1">{totalProfessionals}</div>
              <div className="text-pink-100 text-sm">Profesionales</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-1">{onlineProfessionals}</div>
              <div className="text-pink-100 text-sm">En Línea</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-1">{verifiedProfessionals}</div>
              <div className="text-pink-100 text-sm">Verificados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-1">{averageRating.toFixed(1)}</div>
              <div className="text-pink-100 text-sm">Rating Promedio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Professionals Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Profesionales de {category.name}
          </h2>
          <Link href="/buscar">
            <Button variant="outline">
              Buscar con filtros
            </Button>
          </Link>
        </div>

        {totalProfessionals > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.professionals.map((professional) => (
              <Link
                key={professional.id}
                href={`/profesionales/${professional.id}`}
              >
                <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <Avatar className="h-16 w-16">
                          <AvatarImage
                            src={professional.avatar || professional.user.image || undefined}
                          />
                          <AvatarFallback className="bg-gradient-to-br from-pink-500 to-purple-600 text-white text-xl">
                            {professional.user.name?.[0]?.toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        {professional.isOnline && (
                          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg truncate group-hover:text-pink-600 transition-colors">
                            {professional.user.name}
                          </h3>
                          {professional.isVerified && (
                            <Verified className="h-4 w-4 text-blue-500 flex-shrink-0" />
                          )}
                        </div>
                        <Badge className={`${getMembershipColor(professional.membershipType)} border`}>
                          {professional.membershipType}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">
                          {professional.province.name}, {professional.country.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(professional.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold">
                          {professional.rating.toFixed(1)}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({professional.reviewsCount})
                        </span>
                      </div>

                      {professional.bio && (
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {professional.bio}
                        </p>
                      )}

                      <div className="pt-3 border-t flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Desde</div>
                          <div className="text-xl font-bold text-pink-600">
                            €{professional.costPerMinute.toFixed(2)}
                            <span className="text-sm text-gray-500 font-normal">/min</span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                        >
                          Ver Perfil
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="p-12">
            <div className="text-center">
              <Users className="h-16 w-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No hay profesionales en esta categoría todavía
              </h3>
              <p className="text-gray-500 mb-6">
                Vuelve pronto o explora otras categorías
              </p>
              <Link href="/categorias">
                <Button variant="outline">
                  Ver todas las categorías
                </Button>
              </Link>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
