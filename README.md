# 🎉 Pasiones Platform - Red Social Profesional

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)](https://tailwindcss.com/)

Plataforma completa de red social profesional con videochat, streaming, monetización y sistema de membresías. 100% funcional y lista para producción.

## 🌟 Características Principales

### ✅ Autenticación y Usuarios
- Login/Registro con NextAuth
- Autenticación con Google
- Sistema de roles (Usuario/Profesional)
- Perfiles personalizables
- Panel de configuración completo

### 💼 Profesionales Verificados
- Perfiles profesionales detallados
- Sistema de verificación con documentos
- 4 niveles de membresía (GRATIS, BRONCE, PLATA, ORO)
- Priorización por membresía en búsquedas
- Dashboard de estadísticas e ingresos

### 💰 Monetización
- Sistema de pagos con Stripe y PayPal
- Videochat pagado por minuto
- Contenido pagado (fotos/videos)
- Sistema de créditos
- Retiros para profesionales
- Transacciones seguras

### 💬 Comunicación
- Chat en tiempo real (Socket.io)
- Videochat WebRTC
- Sistema de notificaciones
- Mensajería privada
- Reviews y valoraciones

### 🔍 Búsqueda y Navegación
- Búsqueda global con filtros
- Navegación por categorías
- Filtros por país y provincia
- Sistema multi-idioma
- 18 países soportados

### 📄 Legal y Compliance
- GDPR compliant
- Términos y condiciones
- Política de privacidad
- Política de cookies
- Formulario de contacto
- Centro de ayuda

## 📊 Estadísticas del Proyecto

```
📁 178 archivos
📝 34,340 líneas de código
📱 21 páginas implementadas
🔌 16 APIs REST funcionales
🎨 25+ componentes UI
🗄️ 20+ modelos de base de datos
```

## 🚀 Stack Tecnológico

### Frontend
- **Next.js 15** - React framework con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **shadcn/ui** - Componentes UI modernos
- **Radix UI** - Componentes accesibles

### Backend
- **Prisma ORM** - Base de datos type-safe
- **MySQL** - Base de datos relacional
- **NextAuth** - Autenticación
- **Socket.io** - WebSockets en tiempo real
- **WebRTC** - Videochat P2P

### Pagos y Servicios
- **Stripe** - Procesamiento de pagos
- **PayPal** - Pagos alternativos
- **Cloudinary** - Gestión de imágenes
- **Nodemailer** - Envío de emails

## 📦 Instalación

### Requisitos Previos
- Node.js 18+ o Bun
- MySQL 8+
- Git

### Instalación Local

```bash
# Clonar repositorio
git clone https://github.com/elllanerosolitario55-ai/pasiones-platform.git
cd pasiones-platform

# Instalar dependencias
bun install
# o
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales

# Configurar base de datos
npx prisma generate
npx prisma migrate deploy
npx prisma db seed

# Iniciar en desarrollo
bun run dev
# o
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## ⚙️ Variables de Entorno

```env
# Base de Datos
DATABASE_URL="mysql://user:password@localhost:3306/pasiones_platform"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="tu-secret-aqui"

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# PayPal
NEXT_PUBLIC_PAYPAL_CLIENT_ID="..."
PAYPAL_SECRET="..."
PAYPAL_MODE="sandbox"

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."
```

Ver `.env.example` para la lista completa.

## 🗄️ Base de Datos

### Modelos Principales
- **User** - Usuarios del sistema
- **Professional** - Perfiles profesionales
- **Membership** - Membresías y suscripciones
- **Post** - Contenido publicado
- **VideoSession** - Sesiones de videochat
- **Transaction** - Pagos y transacciones
- **Message** - Mensajes privados
- **Notification** - Notificaciones
- **Review** - Valoraciones
- **Category** - Categorías profesionales
- **Country/Province** - Ubicaciones

### Migraciones

```bash
# Crear migración
npx prisma migrate dev --name nombre_migracion

# Aplicar migraciones
npx prisma migrate deploy

# Ver base de datos
npx prisma studio
```

## 📱 Páginas Implementadas

### Públicas
- `/` - Homepage principal
- `/[country]` - Homepage por país (18 países)
- `/login` - Inicio de sesión
- `/register` - Registro de usuarios
- `/profesionales` - Listado de profesionales
- `/profesionales/[id]` - Perfil de profesional
- `/categorias` - Categorías disponibles
- `/categorias/[slug]` - Profesionales por categoría
- `/buscar` - Búsqueda global
- `/membresias` - Planes de membresía
- `/contacto` - Formulario de contacto
- `/ayuda` - Centro de ayuda

### Legales
- `/legal/terminos` - Términos y condiciones
- `/legal/privacidad` - Política de privacidad
- `/legal/cookies` - Política de cookies

### Panel Usuario/Profesional
- `/panel` - Dashboard principal
- `/panel/perfil` - Editar perfil
- `/panel/configuracion` - Configuración de cuenta
- `/panel/ingresos` - Dashboard de ingresos (profesionales)
- `/mensajes` - Inbox de mensajes
- `/notificaciones` - Centro de notificaciones

## 🔌 APIs Disponibles

### Autenticación
- `POST /api/auth/register` - Registro de usuarios
- `POST /api/auth/[...nextauth]` - NextAuth endpoints

### Profesionales
- `GET /api/professionals` - Listar profesionales
- `GET /api/professionals/[id]` - Obtener profesional
- `POST /api/professionals` - Crear profesional
- `PATCH /api/professionals/[id]` - Actualizar profesional

### Contenido
- `GET /api/posts` - Listar posts
- `POST /api/posts` - Crear post
- `POST /api/posts/[id]/like` - Me gusta

### Comunicación
- `GET /api/messages/conversations` - Listar conversaciones
- `POST /api/messages/send` - Enviar mensaje
- `GET /api/notifications` - Listar notificaciones
- `PATCH /api/notifications/[id]/read` - Marcar como leída

### Pagos
- `POST /api/payment/stripe/create-intent` - Crear intento de pago
- `POST /api/payment/paypal/create-order` - Crear orden PayPal

### Otros
- `GET /api/search` - Búsqueda global
- `POST /api/contact` - Formulario de contacto
- `POST /api/upload` - Subir archivos

## 🎨 Componentes UI

### Layout
- Card, CardHeader, CardContent
- Avatar, Badge, Button
- Input, Label, Textarea

### Formularios
- Checkbox, RadioGroup, Switch
- Tabs, Dialog, Alert

### Especializados
- PaymentModal - Modal de pagos
- VideochatModal - Sala de videochat
- ChatBox - Chat en tiempo real
- FileUpload - Subida de archivos
- MembershipBadge - Badge de membresía

## 🚀 Deployment

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### VPS (AlmaLinux + CyberPanel)

Ver guía completa en `.same/DEPLOYMENT-GUIDE.md`

```bash
# En el VPS
git pull origin main
bun install
npx prisma generate
npx prisma migrate deploy
bun run build
pm2 restart pasiones-platform
```

## 📖 Documentación Adicional

- **LEER-PRIMERO.md** - Introducción al proyecto
- **QUICKSTART.md** - Guía de inicio rápido
- **.same/DEPLOYMENT-GUIDE.md** - Guía de deployment
- **.same/setup-credentials.md** - Configuración de servicios
- **FEATURES-IMPLEMENTADAS.md** - Lista de features

## 🧪 Testing

```bash
# Tests unitarios
bun test

# Linter
bun run lint

# Type checking
bun run type-check
```

## 🤝 Contribuir

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

**elllanerosolitario55-ai**
- GitHub: [@elllanerosolitario55-ai](https://github.com/elllanerosolitario55-ai)

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Generado con [Same](https://same.new)** 🚀

Co-Authored-By: Same <noreply@same.new>
