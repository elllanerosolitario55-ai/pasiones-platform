import { CountryProvider } from '@/contexts/CountryContext';
import { getCountryByCode, COUNTRIES } from '@/lib/countries/countries';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface CountryLayoutProps {
  children: React.ReactNode;
  params: Promise<{ country: string }>;
}

// Generar metadata dinámicamente por país
export async function generateMetadata({ params }: CountryLayoutProps): Promise<Metadata> {
  const { country: countryCode } = await params;
  const countryData = getCountryByCode(countryCode.toUpperCase());

  if (!countryData) {
    return {
      title: 'País no encontrado',
    };
  }

  return {
    title: `Pasiones ${countryData.name} - Conecta con Profesionales`,
    description: `Plataforma de videochat y streaming con profesionales verificados en ${countryData.name}. Chat en vivo, contenido exclusivo y mucho más.`,
    keywords: `profesionales ${countryData.name}, videochat ${countryData.name}, streaming, modelos verificados`,
  };
}

// Generar rutas estáticas para todos los países habilitados
export function generateStaticParams() {
  return Object.values(COUNTRIES)
    .filter(c => c.enabled)
    .map(c => ({
      country: c.code.toLowerCase(),
    }));
}

export default async function CountryLayout({ children, params }: CountryLayoutProps) {
  const { country } = await params;
  const countryCode = country.toUpperCase();
  const countryData = getCountryByCode(countryCode);

  // Si el país no existe o no está habilitado, mostrar 404
  if (!countryData || !countryData.enabled) {
    notFound();
  }

  return (
    <CountryProvider>
      <div data-country={countryCode} data-language={countryData.language}>
        {children}
      </div>
    </CountryProvider>
  );
}
