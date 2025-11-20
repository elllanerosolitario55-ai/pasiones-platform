#!/bin/bash

# Script de actualización rápida para VPS
# Ejecutar: bash UPDATE-VPS.sh

echo "🚀 Actualizando PASIONES Platform en VPS..."
echo "============================================"

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 1. Pull del código actualizado
echo -e "\n${YELLOW}📥 Descargando código actualizado desde GitHub...${NC}"
git pull origin main

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error al hacer pull. Verifica el repositorio.${NC}"
    exit 1
fi

# 2. Instalar dependencias nuevas (si hay)
echo -e "\n${YELLOW}📦 Instalando dependencias...${NC}"
bun install

# 3. Regenerar Prisma (por si hay cambios en schema)
echo -e "\n${YELLOW}🗄️ Regenerando Prisma client...${NC}"
npx prisma generate

# 4. Aplicar migraciones (si hay nuevas)
echo -e "\n${YELLOW}🔄 Aplicando migraciones de base de datos...${NC}"
npx prisma migrate deploy

# 5. Build del proyecto
echo -e "\n${YELLOW}🏗️ Building proyecto...${NC}"
bun run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error en el build. Revisa los logs arriba.${NC}"
    exit 1
fi

# 6. Restart PM2
echo -e "\n${YELLOW}🔄 Reiniciando aplicación con PM2...${NC}"
pm2 restart pasiones-platform

# 7. Ver estado
echo -e "\n${YELLOW}📊 Estado de la aplicación:${NC}"
pm2 status

# 8. Ver logs recientes
echo -e "\n${GREEN}✅ Actualización completada!${NC}"
echo -e "\n${YELLOW}📋 Logs recientes:${NC}"
pm2 logs pasiones-platform --lines 20 --nostream

echo -e "\n${GREEN}============================================${NC}"
echo -e "${GREEN}✅ PASIONES Platform actualizado exitosamente!${NC}"
echo -e "${GREEN}============================================${NC}"
echo -e "\n🌐 Sitio: https://redsocial.novapasion.com"
echo -e "📊 Ver logs: ${YELLOW}pm2 logs pasiones-platform${NC}"
echo -e "📈 Monitorear: ${YELLOW}pm2 monit${NC}"
