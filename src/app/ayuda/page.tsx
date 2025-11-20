import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle, Book, CreditCard, Shield, Video, Users } from "lucide-react"

export default function AyudaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 mx-auto text-white mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Centro de Ayuda</h1>
          <p className="text-xl text-pink-100">Encuentra respuestas a tus preguntas</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link href="/contacto">
            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <MessageCircle className="h-10 w-10 text-pink-600 mb-4" />
                <h3 className="font-semibold mb-2">Contactar Soporte</h3>
                <p className="text-sm text-gray-600">Nuestro equipo está aquí para ayudarte</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/legal/terminos">
            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <Shield className="h-10 w-10 text-pink-600 mb-4" />
                <h3 className="font-semibold mb-2">Términos y Condiciones</h3>
                <p className="text-sm text-gray-600">Lee nuestros términos de servicio</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="h-6 w-6 text-pink-600" />
              Preguntas Frecuentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">¿Cómo creo una cuenta?</h4>
              <p className="text-gray-600">Haz clic en Registrarse y completa el formulario.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">¿Cómo me convierto en profesional?</h4>
              <p className="text-gray-600">Selecciona Profesional al registrarte y completa tu perfil.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">¿Qué métodos de pago aceptan?</h4>
              <p className="text-gray-600">Aceptamos tarjetas de crédito/débito y PayPal.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
