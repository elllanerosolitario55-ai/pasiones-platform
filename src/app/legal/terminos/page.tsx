import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Términos y Condiciones | Pasiones Platform",
  description: "Términos y condiciones de uso de Pasiones Platform",
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mb-4">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Términos y Condiciones
          </h1>
          <p className="text-gray-600">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>1. Aceptación de los Términos</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Al acceder y utilizar Pasiones Platform ("la Plataforma"), usted acepta estar sujeto a estos
              Términos y Condiciones y a todas las leyes y regulaciones aplicables. Si no está de acuerdo
              con alguno de estos términos, no debe utilizar la Plataforma.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>2. Descripción del Servicio</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Pasiones Platform es una plataforma que conecta a usuarios con profesionales verificados
              para servicios de videochat, streaming y contenido digital. La Plataforma actúa como
              intermediario entre usuarios y profesionales.
            </p>
            <ul>
              <li>Videochat en tiempo real con profesionales</li>
              <li>Streaming en vivo y contenido pregrabado</li>
              <li>Mensajería y comunicación segura</li>
              <li>Sistema de pagos integrado</li>
              <li>Membresías con beneficios exclusivos</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>3. Registro y Cuenta de Usuario</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Para utilizar ciertos servicios de la Plataforma, debe crear una cuenta. Usted se compromete a:
            </p>
            <ul>
              <li>Proporcionar información verdadera, precisa y completa</li>
              <li>Mantener la seguridad de su contraseña</li>
              <li>Notificar inmediatamente cualquier uso no autorizado de su cuenta</li>
              <li>Ser mayor de 18 años</li>
              <li>Cumplir con todas las leyes aplicables</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>4. Servicios de Profesionales</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <h3>4.1 Verificación</h3>
            <p>
              Los profesionales deben completar un proceso de verificación que incluye la presentación
              de documentos de identidad. La verificación no garantiza la calidad de los servicios
              ofrecidos.
            </p>
            <h3>4.2 Responsabilidad</h3>
            <p>
              Los profesionales son responsables de los servicios que ofrecen. La Plataforma no se
              hace responsable de la calidad, exactitud o legalidad de los servicios prestados.
            </p>
            <h3>4.3 Membresías</h3>
            <p>
              La Plataforma ofrece cuatro niveles de membresía para profesionales:
            </p>
            <ul>
              <li><strong>GRATIS:</strong> Acceso básico a la plataforma</li>
              <li><strong>BRONCE:</strong> Mayor visibilidad y funciones adicionales</li>
              <li><strong>PLATA:</strong> Prioridad media en búsquedas</li>
              <li><strong>ORO:</strong> Máxima prioridad y todas las funciones</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>5. Pagos y Facturación</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <h3>5.1 Métodos de Pago</h3>
            <p>
              Aceptamos pagos a través de Stripe y PayPal. Todos los pagos están sujetos a verificación
              de fraude.
            </p>
            <h3>5.2 Tarifas</h3>
            <p>
              La Plataforma cobra una comisión del 20% sobre todas las transacciones realizadas a través
              de la plataforma.
            </p>
            <h3>5.3 Reembolsos</h3>
            <p>
              Los reembolsos se gestionan caso por caso. Debe solicitar un reembolso dentro de las 24 horas
              posteriores a la transacción.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>6. Contenido del Usuario</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Los usuarios y profesionales pueden publicar contenido en la Plataforma. Al hacerlo,
              garantizan que:
            </p>
            <ul>
              <li>Poseen todos los derechos necesarios sobre el contenido</li>
              <li>El contenido no infringe derechos de terceros</li>
              <li>El contenido cumple con nuestras políticas de uso aceptable</li>
              <li>El contenido no es ilegal, ofensivo o inapropiado</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>7. Conducta Prohibida</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Está prohibido utilizar la Plataforma para:
            </p>
            <ul>
              <li>Actividades ilegales o fraudulentas</li>
              <li>Hostigamiento, acoso o intimidación</li>
              <li>Publicación de contenido explícito no consentido</li>
              <li>Suplantación de identidad</li>
              <li>Spam o actividades no solicitadas</li>
              <li>Violación de derechos de propiedad intelectual</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>8. Privacidad y Protección de Datos</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Su privacidad es importante para nosotros. Consulte nuestra{" "}
              <Link href="/legal/privacidad" className="text-pink-600 hover:underline">
                Política de Privacidad
              </Link>{" "}
              para obtener información sobre cómo recopilamos, utilizamos y protegemos sus datos personales.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>9. Limitación de Responsabilidad</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              La Plataforma se proporciona "tal cual" sin garantías de ningún tipo. No nos hacemos responsables de:
            </p>
            <ul>
              <li>Daños directos, indirectos o consecuentes</li>
              <li>Pérdida de beneficios o datos</li>
              <li>Interrupciones del servicio</li>
              <li>Acciones de terceros</li>
              <li>Contenido o servicios de profesionales</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>10. Modificaciones</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones
              entrarán en vigor inmediatamente después de su publicación en la Plataforma.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>11. Terminación</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Podemos suspender o terminar su cuenta en cualquier momento por:
            </p>
            <ul>
              <li>Violación de estos términos</li>
              <li>Actividad fraudulenta o ilegal</li>
              <li>Uso indebido de la plataforma</li>
              <li>Solicitud del usuario</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>12. Contacto</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos en:
            </p>
            <ul>
              <li>Email: legal@pasiones-platform.com</li>
              <li>Teléfono: +34 XXX XXX XXX</li>
              <li>Dirección: [Dirección de la empresa]</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center mt-8 pt-8 border-t">
          <p className="text-sm text-gray-600">
            También puedes consultar nuestra{" "}
            <Link href="/legal/privacidad" className="text-pink-600 hover:underline">
              Política de Privacidad
            </Link>{" "}
            y{" "}
            <Link href="/legal/cookies" className="text-pink-600 hover:underline">
              Política de Cookies
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
