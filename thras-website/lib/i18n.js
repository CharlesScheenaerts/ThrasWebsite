import { useRouter } from 'next/router';

export const translations = {
  en: {
    nav: { home: 'HOME', about: 'ABOUT US', expertise: 'EXPERTISE', careers: 'CAREERS', news: 'NEWS', contact: 'CONTACT' },
    footer: {
      company: 'COMPANY', about: 'About Us', expertise: 'Our Expertise', careers: 'Careers', news: 'News',
      contact: 'CONTACT', getInTouch: 'Get in Touch', rights: 'All rights reserved.',
    },
    home: {
      metaTitle: 'Thras | AI, Automation & Software For Your Time',
      metaDescription: 'Time is money. Thras builds AI, Automation and Software that take repetitive work off your plate, with monthly plans that keep it running.',
      heroTitle1: 'Smart Solutions', heroTitle2: 'For Your Time', heroSub: 'Time is money. Save both.',
      howItWorks: 'How it works', letsTalk: "Let's talk",
      expertiseTitle: 'OUR EXPERTISE', expertiseSub: 'We mix what fits your problem best, not what is trendy',
      aiTitle: 'AI', aiText: 'Systems that take over repetitive work',
      autoTitle: 'Automation', autoText: 'Tasks that run by themselves',
      softTitle: 'Software', softText: 'Tools built around your business',
      planTitle: 'WHICH PLAN FITS YOU?', planSub: 'Slide to show how much repetitive work weighs on your team.',
      planAria: 'Amount of repetitive work', little: 'A little', lot: 'A lot',
      scopes: ['a few tasks', 'your key workflows', 'all your workflows'],
      aboutTitle: 'ABOUT THRAS',
      aboutText: 'Based in Brussels, Thras builds AI, Automation and Software that give companies their time back. Less repetitive work, more room for the things that actually need a human.',
      aboutLink: 'Learn more about us',
      helpTitle: 'HOW CAN WE HELP YOU', helpButton: 'Get in touch with us',
      greek1: 'The Greek word θράσος (thrasos) means courage, boldness, or recklessness.',
      greek2: 'In Greek mythology, Thrasos is also the personification of insolence and excessive daring.',
    },
  },
  fr: {
    nav: { home: 'ACCUEIL', about: 'À PROPOS', expertise: 'EXPERTISE', careers: 'CARRIÈRES', news: 'ACTUALITÉS', contact: 'CONTACT' },
    footer: {
      company: 'ENTREPRISE', about: 'À propos', expertise: 'Notre expertise', careers: 'Carrières', news: 'Actualités',
      contact: 'CONTACT', getInTouch: 'Contactez-nous', rights: 'Tous droits réservés.',
    },
    home: {
      metaTitle: 'Thras | IA, automatisation et logiciels pour votre temps',
      metaDescription: "Le temps, c'est de l'argent. Thras conçoit de l'IA, de l'automatisation et des logiciels qui vous enlèvent le travail répétitif, avec des formules mensuelles pour que tout continue de tourner.",
      heroTitle1: 'Des solutions intelligentes', heroTitle2: 'pour votre temps', heroSub: "Le temps, c'est de l'argent. Économisez les deux.",
      howItWorks: 'Comment ça marche', letsTalk: 'Parlons-en',
      expertiseTitle: 'NOTRE EXPERTISE', expertiseSub: "Nous combinons ce qui convient le mieux à votre problème, pas ce qui est à la mode",
      aiTitle: 'IA', aiText: 'Des systèmes qui prennent en charge le travail répétitif',
      autoTitle: 'Automatisation', autoText: "Des tâches qui s'exécutent toutes seules",
      softTitle: 'Logiciels', softText: 'Des outils conçus autour de votre activité',
      planTitle: 'QUELLE FORMULE VOUS CONVIENT ?', planSub: 'Faites glisser pour indiquer le poids du travail répétitif sur votre équipe.',
      planAria: 'Quantité de travail répétitif', little: 'Peu', lot: 'Beaucoup',
      scopes: ['quelques tâches', 'vos processus clés', 'tous vos processus'],
      aboutTitle: 'À PROPOS DE THRAS',
      aboutText: "Basée à Bruxelles, Thras conçoit de l'IA, de l'automatisation et des logiciels qui rendent du temps aux entreprises. Moins de travail répétitif, plus de place pour ce qui demande vraiment un humain.",
      aboutLink: 'En savoir plus sur nous',
      helpTitle: 'COMMENT POUVONS-NOUS VOUS AIDER ?', helpButton: 'Contactez-nous',
      greek1: 'Le mot grec θράσος (thrasos) signifie courage, audace ou témérité.',
      greek2: "Dans la mythologie grecque, Thrasos est aussi la personnification de l'insolence et de l'audace excessive.",
    },
  },
  nl: {
    nav: { home: 'HOME', about: 'OVER ONS', expertise: 'EXPERTISE', careers: 'CARRIÈRE', news: 'NIEUWS', contact: 'CONTACT' },
    footer: {
      company: 'BEDRIJF', about: 'Over ons', expertise: 'Onze expertise', careers: 'Carrière', news: 'Nieuws',
      contact: 'CONTACT', getInTouch: 'Neem contact op', rights: 'Alle rechten voorbehouden.',
    },
    home: {
      metaTitle: 'Thras | AI, automatisering en software voor uw tijd',
      metaDescription: 'Tijd is geld. Thras bouwt AI, automatisering en software die repetitief werk uit uw handen nemen, met maandelijkse plannen die alles draaiend houden.',
      heroTitle1: 'Slimme oplossingen', heroTitle2: 'voor uw tijd', heroSub: 'Tijd is geld. Bespaar beide.',
      howItWorks: 'Hoe het werkt', letsTalk: 'Laten we praten',
      expertiseTitle: 'ONZE EXPERTISE', expertiseSub: 'We combineren wat het best bij uw probleem past, niet wat in de mode is',
      aiTitle: 'AI', aiText: 'Systemen die repetitief werk overnemen',
      autoTitle: 'Automatisering', autoText: 'Taken die vanzelf draaien',
      softTitle: 'Software', softText: 'Tools gebouwd rond uw bedrijf',
      planTitle: 'WELK PLAN PAST BIJ U?', planSub: 'Schuif om aan te geven hoeveel repetitief werk uw team belast.',
      planAria: 'Hoeveelheid repetitief werk', little: 'Weinig', lot: 'Veel',
      scopes: ['enkele taken', 'uw belangrijkste processen', 'al uw processen'],
      aboutTitle: 'OVER THRAS',
      aboutText: 'Thras is gevestigd in Brussel en bouwt AI, automatisering en software die bedrijven hun tijd teruggeven. Minder repetitief werk, meer ruimte voor wat echt een mens vraagt.',
      aboutLink: 'Meer over ons',
      helpTitle: 'HOE KUNNEN WE U HELPEN?', helpButton: 'Neem contact met ons op',
      greek1: 'Het Griekse woord θράσος (thrasos) betekent moed, durf of roekeloosheid.',
      greek2: 'In de Griekse mythologie is Thrasos ook de personificatie van onbeschaamdheid en overmoed.',
    },
  },
};

export function useT() {
  const { locale } = useRouter();
  return translations[locale] || translations.en;
}
