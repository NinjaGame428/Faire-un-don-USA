'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { churches, type Church } from '@/lib/data';
import { getTranslation, type Language, type TranslationKey } from '@/lib/i18n';
import { Loader2 } from 'lucide-react';

export function DonationForm({ lang }: { lang: Language }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const t = (key: TranslationKey) => getTranslation(lang, key);

  const handleSelect = (slug: string) => {
    if (!slug) return;
    setIsRedirecting(true);
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('lang', lang);
    router.push(`/donate/${slug}?${newSearchParams.toString()}`);
  };

  return (
    <div className="w-full max-w-sm space-y-4">
      <Select onValueChange={handleSelect} disabled={isRedirecting}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={t('selectChurch')} />
        </SelectTrigger>
        <SelectContent>
          {churches.map((church: Church) => (
            <SelectItem key={church.slug} value={church.slug}>
              {lang === 'en' ? church.name_en : church.name_fr}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {isRedirecting && (
        <div className="flex items-center justify-center text-muted-foreground pt-2">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          <span>{t('loading')}</span>
        </div>
      )}
    </div>
  );
}
