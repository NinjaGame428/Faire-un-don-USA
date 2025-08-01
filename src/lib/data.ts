export type LocationType = 'US';

export interface Church {
  slug: string;
  name_fr: string;
  name_en: string;
  location: LocationType;
}

export const churches: Church[] = [
  { slug: 'eglise-d-atlanta', name_fr: "Église d'Atlanta", name_en: 'Atlanta Church', location: 'US' },
  { slug: 'famille-de-boston', name_fr: 'Famille de Boston', name_en: 'Boston Family', location: 'US' },
  { slug: 'famille-de-floride-miami', name_fr: 'Famille de Floride (Miami)', name_en: 'Florida (Miami) Family', location: 'US' },
  { slug: 'eglise-d-houston', name_fr: "Église d'Houston", name_en: 'Houston Church', location: 'US' },
  { slug: 'eglise-de-new-york', name_fr: 'Église de New-York', name_en: 'New York Church', location: 'US' },
  { slug: 'eglise-de-washington-dc', name_fr: 'Église de Washington DC', name_en: 'Washington DC Church', location: 'US' },
];

export const usDonationDetails = {
  cashApp: '$impactCCUSA',
  payPal: 'Impactchristiancenterusa@gmail.com',
  zelle: '+1(703) 587 1793',
  check: 'ICCUSA or Impact Christian center USA',
};
