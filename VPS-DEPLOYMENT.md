# 🚀 Guía de Deployment en VPS (AlmaLinux + CyberPanel)

## 📋 Pre-requisitos en el VPS

- AlmaLinux 8/9
- CyberPanel instalado
- Node.js 18+ o Bun instalado
- MySQL 8+ instalado
- Git instalado
- PM2 instalado globalmente

---

## 🔧 Paso 1: Preparar el VPS

### 1.1 Conectar por SSH
```bash
ssh root@tu-servidor-ip
# O usa el usuario de CyberPanel
```

### 1.2 Instalar Node.js/Bun (si no está instalado)
```bash
# Opción A: Instalar Bun (Recomendado)
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc

# Opción B: Instalar Node.js 18
curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
dnf install -y nodejs
```

### 1.3 Instalar PM2
```bash
npm install -g pm2
# O con bun:
bun install -g pm2
```

### 1.4 Verificar MySQL
```bash
systemctl status mysqld
# Si no está activo:
systemctl start mysqld
systemctl enable mysqld
```

---

## 📦 Paso 2: Clonar y Configurar el Proyecto

### 2.1 Ir al directorio del sitio
```bash
# Reemplaza con tu dominio real
cd /home/redsocial.novapasion.com
# O el directorio que uses en CyberPanel
```

### 2.2 Clonar el repositorio
```bash
# Si ya existe, hacer backup y eliminar
mv app app_backup_$(date +%Y%m%d)

# Clonar desde GitHub
git clone https://github.com/elllanerosolitario55-ai/pasiones-platform.git app
cd app
```

### 2.3 Instalar dependencias
```bash
bun install
# O con npm:
npm install
```

---

## 🗄️ Paso 3: Configurar Base de Datos

### 3.1 Crear base de datos MySQL
```bash
mysql -u root -p
```

```sql
-- Dentro de MySQL
CREATE DATABASE pasiones_platform CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Crear usuario (reemplaza 'PASSWORD' con una contraseña segura)
CREATE USER 'pasiones_user'@'localhost' IDENTIFIED BY 'TU_PASSWORD_SEGURO';

-- Dar permisos
GRANT ALL PRIVILEGES ON pasiones_platform.* TO 'pasiones_user'@'localhost';
FLUSH PRIVILEGES;

-- Salir
EXIT;
```

### 3.2 Configurar archivo .env
```bash
cd /home/redsocial.novapasion.com/app
cp .env.example .env
nano .env
```

**Editar `.env` con estos valores:**
```env
# DATABASE
DATABASE_URL="mysql://pasiones_user:TU_PASSWORD_SEGURO@localhost:3306/pasiones_platform"

# NEXTAUTH
NEXTAUTH_URL="https://redsocial.novapasion.com"
NEXTAUTH_SECRET="GENERA_UN_SECRET_ALEATORIO_AQUI"

# STRIPE (Obtén tus keys en dashboard.stripe.com)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# PAYPAL (Obtén tus keys en developer.paypal.com)
NEXT_PUBLIC_PAYPAL_CLIENT_ID="..."
PAYPAL_SECRET="..."
PAYPAL_MODE="live"

# CLOUDINARY (Obtén tus keys en cloudinary.com)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."

# GOOGLE OAUTH (Obtén en console.cloud.google.com)
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."

# FACEBOOK OAUTH (Obtén en developers.facebook.com)
FACEBOOK_CLIENT_ID="..."
FACEBOOK_CLIENT_SECRET="..."
```

**Generar NEXTAUTH_SECRET:**
```bash
# Con openssl:
openssl rand -base64 32

# O con Node.js:
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 3.3 Inicializar Prisma
```bash
# Generar cliente Prisma
npx prisma generate

# Aplicar migraciones
npx prisma migrate deploy

# (Opcional) Seed de datos iniciales
npx prisma db seed
```

---

## 🏗️ Paso 4: Build del Proyecto

```bash
cd /home/redsocial.novapasion.com/app

# Build de producción
bun run build
# O con npm:
npm run build
```

**Si el build falla**, verifica:
- Todas las variables de entorno están configuradas
- MySQL está corriendo y accesible
- Las credenciales de base de datos son correctas

---

## 🚀 Paso 5: Configurar PM2

### 5.1 Crear archivo ecosystem.config.js (si no existe)
```bash
nano ecosystem.config.js
```

```javascript
module.exports = {
  apps: [{
    name: 'pasiones-platform',
    script: 'bun',
    args: 'run start',
    cwd: '/home/redsocial.novapasion.com/app',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/home/redsocial.novapasion.com/logs/error.log',
    out_file: '/home/redsocial.novapasion.com/logs/out.log',
    log_file: '/home/redsocial.novapasion.com/logs/combined.log',
    time: true
  }]
}
```

### 5.2 Crear directorio de logs
```bash
mkdir -p /home/redsocial.novapasion.com/logs
```

### 5.3 Iniciar con PM2
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
# Ejecutar el comando que PM2 te muestre
```

### 5.4 Verificar estado
```bash
pm2 status
pm2 logs pasiones-platform --lines 50
```

---

## 🌐 Paso 6: Configurar LiteSpeed Proxy

### 6.1 Crear Virtual Host en CyberPanel

1. Accede a CyberPanel: `https://tu-ip:8090`
2. Ve a **Websites → List Websites**
3. Selecciona `redsocial.novapasion.com`
4. Click en **Manage**

### 6.2 Configurar Proxy Inverso

1. En CyberPanel, ve a **Rewrite Rules**
2. Agrega estas reglas:

```apache
RewriteEngine On
RewriteCond %{SERVER_PORT} !^443$
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

# Proxy a Next.js
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
```

3. Guarda los cambios

### 6.3 Configurar SSL (si no está configurado)

```bash
# En CyberPanel:
# Websites → List Websites → Manage SSL → Issue SSL
# Selecciona "Let's Encrypt" y emite el certificado
```

### 6.4 Reiniciar LiteSpeed
```bash
systemctl restart lsws
```

---

## ✅ Paso 7: Verificar Deployment

### 7.1 Verificar servicios
```bash
# MySQL corriendo
systemctl status mysqld

# PM2 corriendo
pm2 status

# LiteSpeed corriendo
systemctl status lsws

# Verificar logs de la app
pm2 logs pasiones-platform --lines 100
```

### 7.2 Probar en navegador
```
https://redsocial.novapasion.com
```

Deberías ver la homepage cargando correctamente.

---

## 🔄 Actualizaciones Futuras

Para actualizar el código:

```bash
cd /home/redsocial.novapasion.com/app

# Pull cambios
git pull origin main

# Instalar nuevas dependencias (si hay)
bun install

# Regenerar Prisma (si hay cambios en schema)
npx prisma generate
npx prisma migrate deploy

# Rebuild
bun run build

# Restart PM2
pm2 restart pasiones-platform

# Ver logs
pm2 logs pasiones-platform --lines 50
```

---

## 🐛 Troubleshooting

### La app no inicia
```bash
# Ver logs
pm2 logs pasiones-platform --err --lines 100

# Verificar puerto 3000 disponible
netstat -tlnp | grep :3000

# Reiniciar PM2
pm2 delete pasiones-platform
pm2 start ecosystem.config.js
```

### Error de conexión a MySQL
```bash
# Verificar MySQL corriendo
systemctl status mysqld

# Probar conexión manual
mysql -u pasiones_user -p pasiones_platform

# Verificar DATABASE_URL en .env
cat .env | grep DATABASE_URL
```

### Problemas con Prisma
```bash
# Regenerar cliente
rm -rf node_modules/.prisma
npx prisma generate

# Ver status de migraciones
npx prisma migrate status

# Reset completo (¡CUIDADO! Borra datos)
npx prisma migrate reset
```

### Error 502 Bad Gateway
```bash
# Verificar app corriendo
pm2 status

# Verificar proxy LiteSpeed
tail -f /usr/local/lsws/logs/error.log

# Reiniciar servicios
pm2 restart all
systemctl restart lsws
```

---

## 📊 Monitoreo

### Ver estadísticas de PM2
```bash
pm2 monit
```

### Ver logs en tiempo real
```bash
pm2 logs pasiones-platform
```

### Configurar monitoreo con PM2 Plus (Opcional)
```bash
pm2 link <secret_key> <public_key>
```

---

## 🔒 Seguridad

### Firewall
```bash
# Asegúrate de que solo estos puertos estén abiertos:
firewall-cmd --list-all

# Necesarios:
# - 22 (SSH)
# - 80 (HTTP - redirige a HTTPS)
# - 443 (HTTPS)
# - 8090 (CyberPanel - solo desde IPs confiables)
```

### Permisos de archivos
```bash
# Ajustar permisos
chown -R cyberpanel:cyberpanel /home/redsocial.novapasion.com/app
chmod -R 755 /home/redsocial.novapasion.com/app

# Proteger .env
chmod 600 /home/redsocial.novapasion.com/app/.env
```

---

## 📝 Notas Importantes

1. **Backup regular de la base de datos:**
   ```bash
   mysqldump -u pasiones_user -p pasiones_platform > backup_$(date +%Y%m%d).sql
   ```

2. **Monitorear espacio en disco:**
   ```bash
   df -h
   ```

3. **Actualizar dependencias regularmente:**
   ```bash
   bun update
   ```

4. **Revisar logs de seguridad:**
   ```bash
   tail -f /var/log/secure
   ```

---

## ✅ Checklist de Deployment

- [ ] VPS configurado con Node.js/Bun y PM2
- [ ] MySQL corriendo y base de datos creada
- [ ] Código clonado desde GitHub
- [ ] Archivo .env configurado con todas las variables
- [ ] Prisma migrado y cliente generado
- [ ] Build exitoso sin errores
- [ ] PM2 corriendo la aplicación
- [ ] LiteSpeed proxy configurado
- [ ] SSL configurado
- [ ] Sitio accesible en https://redsocial.novapasion.com
- [ ] Logs sin errores críticos

---

**¡Deployment Completo!** 🎉

Si tienes problemas, revisa los logs:
```bash
pm2 logs pasiones-platform --lines 200
```
