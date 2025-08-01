import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DonationForm } from "@/components/DonationForm";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getTranslation, type Language, TranslationKey } from "@/lib/i18n";
import Image from 'next/image';
import Link from "next/link";

const getSafeLang = (lang: string | string[] | undefined): Language => {
  if (lang === 'en' || lang === 'fr') {
    return lang;
  }
  return 'fr';
};

export default function Home({ searchParams }: { searchParams: { lang?: string } }) {
  const lang = getSafeLang(searchParams.lang);
  const t = (key: TranslationKey) => getTranslation(lang, key);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,#1e1e1e_1px,transparent_1px),linear-gradient(to_bottom,#1e1e1e_1px,transparent_1px)]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(109,40,217,0.1),transparent)]"></div></div>
      
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6">
        <Link href={`/?lang=${lang}`}>
          <Image src="/logo.png" alt="ICC Logo" width={100} height={100} data-ai-hint="logo"/>
        </Link>
        <LanguageSwitcher currentLang={lang} />
      </header>

      <main className="flex min-h-screen w-full flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-primary mb-4 mt-20">{t('mainTitle')}</h1>
          <p className="max-w-2xl text-muted-foreground mb-10 text-lg">{t('welcomeDescription')}</p>
          
          <Card className="w-full max-w-md border-primary/20 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{t('makeDonation')}</CardTitle>
              <CardDescription>{t('selectChurch')}</CardDescription>
            </CardHeader>
            <CardContent>
              <DonationForm lang={lang} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
