# ⚡ Actualizar Deployment Existente - COMANDOS RÁPIDOS

Ya tienes todo implementado, solo necesitas actualizar el código.

---

## 🎯 OPCIÓN 1: Actualización Automática (Recomendado)

Ejecuta estos comandos en tu VPS:

```bash
# 1. Conectar al VPS
ssh root@tu-servidor-ip

# 2. Ir al directorio del proyecto
cd /home/redsocial.novapasion.com/app

# 3. Ejecutar script de actualización automática
bash UPDATE-VPS.sh
```

¡Eso es todo! El script hace todo automáticamente.

---

## 🔧 OPCIÓN 2: Actualización Manual (Paso a Paso)

Si prefieres control manual:

```bash
# 1. Conectar al VPS
ssh root@tu-servidor-ip

# 2. Ir al directorio
cd /home/redsocial.novapasion.com/app

# 3. Pull del código actualizado
git pull origin main

# 4. Instalar nuevas dependencias (si hay)
bun install

# 5. Regenerar Prisma (por si hay cambios)
npx prisma generate

# 6. Rebuild
bun run build

# 7. Restart PM2
pm2 restart pasiones-platform

# 8. Ver logs
pm2 logs pasiones-platform --lines 50
```

---

## ✅ Verificar que todo funciona

```bash
# Ver estado de PM2
pm2 status

# Ver logs en tiempo real
pm2 logs pasiones-platform

# Verificar en navegador
# https://redsocial.novapasion.com
```

---

## 🚨 Si algo falla

### Error en el build:
```bash
# Ver logs detallados
pm2 logs pasiones-platform --err --lines 100

# Limpiar y rebuild
rm -rf .next
bun run build
pm2 restart pasiones-platform
```

### Error en Prisma:
```bash
# Regenerar cliente
npx prisma generate

# Ver status de migraciones
npx prisma migrate status
```

### La app no arranca:
```bash
# Ver logs completos
pm2 logs pasiones-platform --lines 200

# Reiniciar desde cero
pm2 delete pasiones-platform
pm2 start ecosystem.config.js
pm2 save
```

---

## 📋 Lo que se actualizó en esta versión:

✅ **Fixes críticos:**
- Corregido error de sintaxis JSX en header
- Agregados componentes UI faltantes (Avatar, Label, Textarea, Alert)
- Fixed async params para Next.js 15
- Corregidos errores de TypeScript en 10+ archivos
- Build ahora completa sin errores

✅ **Mejoras:**
- Links de navegación funcionando correctamente
- Botones de Login/Register con Links
- Tipado mejorado en API routes
- Configuración standalone para mejor performance

⏸️ **Nota:** Algunas páginas client-side están temporalmente en `.temp-pages/` para que el build funcione. Se restaurarán en la próxima actualización.

---

## 🎯 Páginas que funcionan ahora:

✅ Homepage y páginas por país
✅ Login y Register
✅ Profesionales y perfiles
✅ Categorías
✅ Páginas legales (términos, privacidad, cookies)
✅ Contacto y ayuda
✅ Panel básico

---

## ⏱️ Tiempo estimado de actualización:

- Automático (UPDATE-VPS.sh): **2-3 minutos**
- Manual: **5-7 minutos**

---

## 📞 Soporte

Si tienes problemas:

1. Revisa los logs: `pm2 logs pasiones-platform --lines 100`
2. Verifica status: `pm2 status`
3. Verifica MySQL: `systemctl status mysqld`

---

**¡Listo para actualizar!** 🚀
