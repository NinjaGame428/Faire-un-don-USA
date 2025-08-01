'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Language } from '@/lib/i18n';

export function LanguageSwitcher({ currentLang }: { currentLang: Language }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const switchLanguage = (lang: Language) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('lang', lang);
    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  return (
    <div className="flex items-center gap-1 rounded-full border bg-card p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLanguage('fr')}
        className={cn(
            'rounded-full px-3 py-1 text-sm font-semibold', 
            currentLang === 'fr' 
            ? 'bg-primary text-primary-foreground' 
            : 'text-muted-foreground hover:bg-muted/50'
        )}
      >
        FR
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLanguage('en')}
        className={cn(
            'rounded-full px-3 py-1 text-sm font-semibold', 
            currentLang === 'en' 
            ? 'bg-primary text-primary-foreground' 
            : 'text-muted-foreground hover:bg-muted/50'
        )}
      >
        EN
      </Button>
    </div>
  );
}
