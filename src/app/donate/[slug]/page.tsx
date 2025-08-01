import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ArrowLeft, CreditCard, Smartphone, CheckSquare, Banknote, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { churches } from '@/lib/data';
import { getTranslation, type Language, TranslationKey } from '@/lib/i18n';
import Image from 'next/image';

const getSafeLang = (lang: string | string[] | undefined): Language => {
  if (lang === 'en' || lang === 'fr') return lang;
  return 'fr';
};

export default function DonationPage({ params, searchParams }: { params: { slug: string }, searchParams: { lang?: string } }) {
  const lang = getSafeLang(searchParams.lang);
  const t = (key: TranslationKey) => getTranslation(lang, key);

  const church = churches.find((c) => c.slug === params.slug);

  if (!church) {
    const newSearchParams = new URLSearchParams(searchParams as Record<string, string>);
    redirect(`/?${newSearchParams.toString()}`);
  }

  const churchName = lang === 'en' ? church.name_en : church.name_fr;

  const donationMethods = [
    { key: 'cashapp', icon: Smartphone },
    { key: 'paypal', icon: Mail },
    { key: 'zelle', icon: CreditCard },
    { key: 'check', icon: CheckSquare },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background p-4 sm:p-6 md:p-8 animate-fade-in">
       <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,#1e1e1e_1px,transparent_1px),linear-gradient(to_bottom,#1e1e1e_1px,transparent_1px)]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(109,40,217,0.1),transparent)]"></div></div>
      <header className="w-full max-w-5xl flex justify-between items-center mb-8">
        <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
          <Link href={`/?lang=${lang}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('backToSelection')}
          </Link>
        </Button>
        <LanguageSwitcher currentLang={lang} />
      </header>

      <main className="w-full max-w-5xl flex flex-col items-center">
        <Link href={`/?lang=${lang}`}>
          <Image src="/logo.png" alt="ICC Logo" width={100} height={100} className="mb-6" data-ai-hint="logo" />
        </Link>
        <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-primary text-center mb-2 tracking-tight">
          {t('support')} {churchName}
        </h1>
        <p className="text-muted-foreground mb-10 text-lg">{t('donationMethods')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {donationMethods.map((method) => {
            const translationKey = `us.${method.key}` as TranslationKey;
            
            return (
              <Card key={method.key} className="text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 border-primary/10 flex flex-col group">
                <CardHeader className="items-center">
                  <div className="mx-auto bg-primary/10 text-primary rounded-xl p-4 w-fit mb-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <method.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{t(`donation.${method.key}` as TranslationKey)}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center p-6">
                   <p className="text-lg font-mono font-medium text-foreground bg-muted/70 rounded-md px-4 py-2 break-words w-full">
                    {t(translationKey)}
                   </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>
    </div>
  );
}
