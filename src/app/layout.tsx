import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { getTranslation, type Language, TranslationKey } from "@/lib/i18n";

const getSafeLang = (lang: string | string[] | undefined): Language => {
  if (lang === 'en' || lang === 'fr') {
    return lang;
  }
  return 'fr';
};

export function generateMetadata({ searchParams }: { searchParams: { lang?: string } }): Metadata {
  const lang = getSafeLang(searchParams?.lang);
  const t = (key: TranslationKey) => getTranslation(lang, key);

  return {
    title: t('appTitle'),
    description: t('appDescription'),
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang?: string };
}>) {
  const lang = getSafeLang(params?.lang);
  const t = (key: TranslationKey) => getTranslation(lang, key);

  return (
    <html lang={lang} className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <div className="flex-grow mb-8">
          {children}
        </div>
        <footer className="w-full bg-background" style={{ marginTop: '-50px' }}>
          <div className="container mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              {t('footer')}
            </p>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
