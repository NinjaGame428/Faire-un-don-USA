export const translations = {
  en: {
    appTitle: "Faire un Don ICC USA",
    appDescription: "A donation web application for IMPACT CENTRE CHRÉTIEN (ICC) USA.",
    footer: "Created by Heavenkeys Ltd",
    mainTitle: "Give to ICC USA",
    welcomeDescription: "IMPACT CENTRE CHRÉTIEN (USA) is a church where the Word of God is taught with a particular emphasis on FAITH, HOLINESS, and IMPACT.",
    makeDonation: "Make a Donation",
    selectChurch: "Select a church or family to support",
    loading: "Redirecting...",
    backToSelection: "Back to Selection",
    support: "Support",
    donationMethods: "Official Donation Methods",
    donationVia: "Donate via",
    payableTo: "Payable to",
    donationInfoNotAvailable: "Donation information for this location is not yet available. Please check back later.",
    or: "or",
    "donation.cashapp": "CashApp",
    "donation.paypal": "PayPal",
    "donation.zelle": "ZELLE",
    "donation.check": "Check",
    "donation.interac": "Interac",
    "donation.inPerson": "In-Person",

    "us.cashapp": "$impactCCUSA",
    "us.paypal": "Impactchristiancenterusa@gmail.com",
    "us.zelle": "+1(703) 587 1793",
    "us.check": "Payable to: ICCUSA or Impact Christian center USA"
  },
  fr: {
    appTitle: "Faire un Don ICC USA",
    appDescription: "Une application web de dons pour IMPACT CENTRE CHRÉTIEN (ICC) USA.",
    footer: "Réalisé par Heavenkeys Ltd",
    mainTitle: "Faire un Don à ICC USA",
    welcomeDescription: "IMPACT CENTRE CHRÉTIEN (USA) est une église où l’on enseigne la Parole de Dieu avec un accent particulier sur la FOI, la SAINTETÉ et l’IMPACT.",
    makeDonation: "Faire un Don",
    selectChurch: "Sélectionnez une église ou une famille à soutenir",
    loading: "Redirection...",
    backToSelection: "Retour à la Sélection",
    support: "Soutenir",
    donationMethods: "Méthodes de Don Officielles",
    donationVia: "Faire un don via",
    payableTo: "Payable à l'ordre de",
    donationInfoNotAvailable: "Les informations de don pour ce lieu ne sont pas encore disponibles. Veuillez revenir plus tard.",
    or: "ou",
    "donation.cashapp": "CashApp",
    "donation.paypal": "PayPal",
    "donation.zelle": "ZELLE",
    "donation.check": "Chèque",
    "donation.interac": "Interac",
    "donation.inPerson": "En Personne",

    "us.cashapp": "$impactCCUSA",
    "us.paypal": "Impactchristiancenterusa@gmail.com",
    "us.zelle": "+1(703) 587 1793",
    "us.check": "Payable à: ICCUSA ou Impact Christian center USA"
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en & keyof typeof translations.fr;

export const getTranslation = (lang: Language, key: TranslationKey): string => {
  const translation = translations[lang]?.[key] || translations['en']?.[key];
  return translation || `Missing translation: ${key}`;
};
