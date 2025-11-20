import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Política de Privacidad | Pasiones Platform",
  description: "Política de privacidad y protección de datos de Pasiones Platform",
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Política de Privacidad
          </h1>
          <p className="text-gray-600">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>1. Introducción</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              En Pasiones Platform nos tomamos muy en serio la privacidad de nuestros usuarios. Esta
              Política de Privacidad describe cómo recopilamos, utilizamos, compartimos y protegemos
              su información personal de acuerdo con el Reglamento General de Protección de Datos (RGPD)
              y otras leyes aplicables.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>2. Información que Recopilamos</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <h3>2.1 Información que nos proporciona</h3>
            <ul>
              <li><strong>Datos de registro:</strong> nombre, email, contraseña</li>
              <li><strong>Datos de perfil:</strong> fotografía, biografía, ubicación</li>
              <li><strong>Datos de pago:</strong> información de tarjeta (procesada por Stripe/PayPal)</li>
              <li><strong>Documentos de verificación:</strong> DNI/Pasaporte (para profesionales)</li>
              <li><strong>Contenido:</strong> fotos, videos, mensajes</li>
            </ul>

            <h3>2.2 Información recopilada automáticamente</h3>
            <ul>
              <li><strong>Datos de uso:</strong> páginas visitadas, tiempo en la plataforma</li>
              <li><strong>Datos técnicos:</strong> dirección IP, tipo de navegador, sistema operativo</li>
              <li><strong>Cookies:</strong> ver nuestra <Link href="/legal/cookies" className="text-pink-600 hover:underline">Política de Cookies</Link></li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>3. Cómo Utilizamos su Información</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Utilizamos su información personal para:
            </p>
            <ul>
              <li>Proporcionar y mejorar nuestros servicios</li>
              <li>Procesar pagos y transacciones</li>
              <li>Verificar la identidad de profesionales</li>
              <li>Enviar notificaciones y comunicaciones</li>
              <li>Personalizar su experiencia</li>
              <li>Detectar y prevenir fraudes</li>
              <li>Cumplir con obligaciones legales</li>
              <li>Análisis y mejora de la plataforma</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>4. Base Legal para el Tratamiento</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Procesamos sus datos personales bajo las siguientes bases legales:
            </p>
            <ul>
              <li><strong>Consentimiento:</strong> cuando usted nos da su consentimiento explícito</li>
              <li><strong>Ejecución de contrato:</strong> para prestar nuestros servicios</li>
              <li><strong>Obligación legal:</strong> para cumplir con leyes aplicables</li>
              <li><strong>Interés legítimo:</strong> para mejorar nuestros servicios y seguridad</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>5. Compartir Información</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Podemos compartir su información con:
            </p>
            <ul>
              <li><strong>Otros usuarios:</strong> información de perfil público</li>
              <li><strong>Procesadores de pago:</strong> Stripe, PayPal</li>
              <li><strong>Proveedores de servicios:</strong> hosting, analytics, email</li>
              <li><strong>Autoridades:</strong> cuando lo requiera la ley</li>
            </ul>
            <p>
              <strong>No vendemos</strong> su información personal a terceros.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>6. Seguridad de Datos</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos:
            </p>
            <ul>
              <li>Encriptación SSL/TLS para todas las comunicaciones</li>
              <li>Contraseñas hasheadas con bcrypt</li>
              <li>Servidores seguros y actualizados</li>
              <li>Acceso limitado a datos personales</li>
              <li>Auditorías de seguridad regulares</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>7. Sus Derechos (RGPD)</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Bajo el RGPD, usted tiene los siguientes derechos:
            </p>
            <ul>
              <li><strong>Acceso:</strong> solicitar una copia de sus datos personales</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de sus datos</li>
              <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado</li>
              <li><strong>Oposición:</strong> oponerse al procesamiento de sus datos</li>
              <li><strong>Limitación:</strong> restringir el procesamiento</li>
              <li><strong>Retirar consentimiento:</strong> en cualquier momento</li>
            </ul>
            <p>
              Para ejercer estos derechos, contacte: <a href="mailto:privacy@pasiones-platform.com" className="text-pink-600 hover:underline">privacy@pasiones-platform.com</a>
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>8. Retención de Datos</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Conservamos sus datos personales durante el tiempo necesario para:
            </p>
            <ul>
              <li>Proporcionar nuestros servicios</li>
              <li>Cumplir con obligaciones legales (5-10 años para datos fiscales)</li>
              <li>Resolver disputas</li>
              <li>Hacer cumplir nuestros acuerdos</li>
            </ul>
            <p>
              Cuando elimine su cuenta, eliminaremos sus datos en un plazo de 30 días,
              excepto los que debamos conservar por ley.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>9. Transferencias Internacionales</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Sus datos pueden ser transferidos y procesados en servidores ubicados fuera del Espacio
              Económico Europeo (EEE). En estos casos, implementamos salvaguardas adecuadas como:
            </p>
            <ul>
              <li>Cláusulas contractuales estándar de la UE</li>
              <li>Certificación Privacy Shield (para EE.UU.)</li>
              <li>Otras medidas aprobadas por la UE</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>10. Menores de Edad</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Nuestra plataforma está destinada exclusivamente a personas mayores de 18 años.
              No recopilamos intencionalmente información de menores de edad. Si descubrimos que
              hemos recopilado datos de un menor, los eliminaremos inmediatamente.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>11. Cookies y Tecnologías Similares</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Utilizamos cookies y tecnologías similares para mejorar su experiencia.
              Para más información, consulte nuestra{" "}
              <Link href="/legal/cookies" className="text-pink-600 hover:underline">
                Política de Cookies
              </Link>.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>12. Cambios en esta Política</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos de
              cambios significativos por email o mediante un aviso destacado en la plataforma.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>13. Contacto y Delegado de Protección de Datos</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Para cualquier pregunta sobre esta Política de Privacidad o el tratamiento de sus datos:
            </p>
            <ul>
              <li><strong>Email:</strong> privacy@pasiones-platform.com</li>
              <li><strong>DPO:</strong> dpo@pasiones-platform.com</li>
              <li><strong>Correo postal:</strong> [Dirección de la empresa]</li>
            </ul>
            <p>
              También tiene derecho a presentar una queja ante la Agencia Española de Protección de Datos (AEPD):
            </p>
            <ul>
              <li><strong>Web:</strong> <a href="https://www.aepd.es" className="text-pink-600 hover:underline" target="_blank" rel="noopener noreferrer">www.aepd.es</a></li>
              <li><strong>Dirección:</strong> C/ Jorge Juan, 6, 28001 Madrid</li>
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
            <Link href="/legal/cookies" className="text-pink-600 hover:underline">
              Política de Cookies
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
