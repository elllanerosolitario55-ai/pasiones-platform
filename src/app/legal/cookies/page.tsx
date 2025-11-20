import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cookie } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Política de Cookies | Pasiones Platform",
  description: "Política de cookies y tecnologías de seguimiento de Pasiones Platform",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mb-4">
            <Cookie className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Política de Cookies
          </h1>
          <p className="text-gray-600">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>1. ¿Qué son las Cookies?</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita
              un sitio web. Las cookies permiten al sitio web recordar sus acciones y preferencias
              durante un período de tiempo, para que no tenga que volver a configurarlas cada vez que
              regrese al sitio o navegue de una página a otra.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>2. ¿Cómo Utilizamos las Cookies?</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              En Pasiones Platform utilizamos cookies para:
            </p>
            <ul>
              <li>Mantener su sesión iniciada</li>
              <li>Recordar sus preferencias de idioma y configuración</li>
              <li>Analizar cómo utiliza nuestro sitio web</li>
              <li>Mejorar la experiencia del usuario</li>
              <li>Personalizar el contenido que ve</li>
              <li>Proporcionar funciones de redes sociales</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>3. Tipos de Cookies que Utilizamos</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">3.1 Cookies Estrictamente Necesarias</h3>
              <p className="mb-2">
                Estas cookies son esenciales para el funcionamiento del sitio web. Sin ellas,
                ciertas funcionalidades no estarían disponibles.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Cookie</th>
                      <th className="text-left py-2">Propósito</th>
                      <th className="text-left py-2">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-mono text-xs">next-auth.session-token</td>
                      <td className="py-2">Autenticación de usuario</td>
                      <td className="py-2">30 días</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-mono text-xs">next-auth.csrf-token</td>
                      <td className="py-2">Seguridad CSRF</td>
                      <td className="py-2">Sesión</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">3.2 Cookies de Rendimiento</h3>
              <p className="mb-2">
                Estas cookies recopilan información sobre cómo los visitantes utilizan el sitio web,
                como qué páginas visitan con más frecuencia.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Cookie</th>
                      <th className="text-left py-2">Propósito</th>
                      <th className="text-left py-2">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-mono text-xs">_ga</td>
                      <td className="py-2">Google Analytics - identificador único</td>
                      <td className="py-2">2 años</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-mono text-xs">_gid</td>
                      <td className="py-2">Google Analytics - visitas</td>
                      <td className="py-2">24 horas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">3.3 Cookies de Funcionalidad</h3>
              <p className="mb-2">
                Estas cookies permiten que el sitio web recuerde las elecciones que hace
                (como su nombre de usuario, idioma o región).
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Cookie</th>
                      <th className="text-left py-2">Propósito</th>
                      <th className="text-left py-2">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-mono text-xs">user_preferences</td>
                      <td className="py-2">Guardar preferencias de usuario</td>
                      <td className="py-2">1 año</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-mono text-xs">language</td>
                      <td className="py-2">Idioma seleccionado</td>
                      <td className="py-2">1 año</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">3.4 Cookies de Marketing</h3>
              <p className="mb-2">
                Estas cookies se utilizan para rastrear a los visitantes en los sitios web y
                mostrar anuncios relevantes.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Cookie</th>
                      <th className="text-left py-2">Propósito</th>
                      <th className="text-left py-2">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-mono text-xs">_fbp</td>
                      <td className="py-2">Facebook Pixel</td>
                      <td className="py-2">3 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>4. Cookies de Terceros</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Utilizamos servicios de terceros que también pueden establecer cookies:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> Para análisis de tráfico web</li>
              <li><strong>Stripe:</strong> Para procesamiento de pagos</li>
              <li><strong>PayPal:</strong> Para procesamiento de pagos</li>
              <li><strong>Cloudinary:</strong> Para gestión de imágenes</li>
              <li><strong>Facebook/Google:</strong> Para autenticación social</li>
            </ul>
            <p>
              Estos terceros pueden utilizar cookies para sus propios fines analíticos o publicitarios.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>5. Cómo Gestionar las Cookies</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las
              cookies que ya están en su dispositivo y puede configurar la mayoría de los
              navegadores para evitar que se coloquen.
            </p>

            <h3 className="font-bold mt-4">Configuración del navegador:</h3>
            <ul>
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
              <li><strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
            </ul>

            <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
              <strong>Nota:</strong> Si elimina o bloquea las cookies, es posible que algunas
              funciones del sitio web no funcionen correctamente.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>6. Consentimiento</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Al utilizar nuestro sitio web, usted acepta el uso de cookies de acuerdo con esta
              Política de Cookies. Cuando visite nuestro sitio por primera vez, verá un banner
              de cookies que le permitirá:
            </p>
            <ul>
              <li>Aceptar todas las cookies</li>
              <li>Rechazar cookies no esenciales</li>
              <li>Personalizar sus preferencias de cookies</li>
            </ul>
            <p>
              Puede cambiar sus preferencias en cualquier momento accediendo a la configuración
              de cookies en el pie de página del sitio.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>7. Almacenamiento Local y Sesión</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Además de las cookies, también utilizamos tecnologías de almacenamiento local
              (localStorage y sessionStorage) para:
            </p>
            <ul>
              <li>Guardar preferencias de usuario</li>
              <li>Mejorar el rendimiento del sitio</li>
              <li>Recordar el estado de la aplicación</li>
            </ul>
            <p>
              Estos datos se almacenan solo en su dispositivo y no se transmiten a nuestros servidores.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>8. Actualizaciones de esta Política</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios
              en las cookies que utilizamos o por razones operativas, legales o regulatorias.
            </p>
            <p>
              Le recomendamos que revise esta página periódicamente para estar informado sobre
              nuestro uso de cookies.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>9. Más Información</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Para obtener más información sobre cómo utilizamos, almacenamos y protegemos sus
              datos personales, consulte nuestra{" "}
              <Link href="/legal/privacidad" className="text-pink-600 hover:underline">
                Política de Privacidad
              </Link>.
            </p>
            <p>
              Si tiene preguntas sobre nuestro uso de cookies, puede contactarnos en:
            </p>
            <ul>
              <li>Email: cookies@pasiones-platform.com</li>
              <li>DPO: dpo@pasiones-platform.com</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center mt-8 pt-8 border-t">
          <p className="text-sm text-gray-600">
            También puedes consultar nuestros{" "}
            <Link href="/legal/terminos" className="text-pink-600 hover:underline">
              Términos y Condiciones
            </Link>{" "}
            y{" "}
            <Link href="/legal/privacidad" className="text-pink-600 hover:underline">
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
