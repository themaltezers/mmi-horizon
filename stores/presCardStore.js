import { create } from "zustand";

const cards = [
    {
        id: 0,
        title: "Pare-feu",
        text: `<strong class="important">Protégez votre réseau</strong> contre les <strong class="important">cybermenaces</strong> grâce à nos solutions avancées de <strong class="importantCyber">pare-feux</strong>. Assurez la <strong class="important">sécurité de vos données</strong> et <strong class="important">la continuité de vos opérations</strong> avec une <strong class="important">protection proactive</strong> contre les attaques, une surveillance en temps réel, et une <strong class="important">gestion simplifiée</strong> de vos infrastructures. Nos pare-feux garantissent une défense renforcée pour préserver vos systèmes contre les menaces numériques.`,
        icon: "/icon/icon-pare-feu.svg",
        cta: "Voir plus",
        ctaStyle: "Cyber",
        slug: "/solutions",
    },
    {
        id: 1,
        title: "Web & Marketing Digital",
        text: `<strong class="important">Boostez votre présence en ligne</strong> avec nos services de <strong class="important">création de<strong class="importantWeb"> sites web</strong></strong> et de <strong class="important">stratégies de <strong class="importantWeb">marketing digital</strong></strong>. Attirez davantage de clients, améliorez votre <strong class="important">visibilité sur internet </strong> et développez votre <strong class="important">image de marque</strong> grâce à des <strong class="important">solutions personnalisées</strong> et performantes.  Optimisez votre <strong class="important">référencement SEO</strong>, gérer vos <strong class="important">campagnes publicitaires</strong> et renforcer votre <strong class="important">stratégie digitale.</strong>`,
        icon: "/icon/icon-web.svg",
        cta: "Voir plus",
        ctaStyle: "Web",
        slug: "/solutions",
    },
    {
        id: 2,
        title: "Électronique",
        text: "Optimisez vos systèmes avec nos solutions électroniques fiables et performantes. Nos produits, adaptés à vos besoins spécifiques, garantissent une gestion précise et durable de votre infrastructure. Boostez l'efficacité de votre entreprise grâce à notre expertise en solutions électroniques. Découvrez comment nos innovations peuvent transformer votre fonctionnement et maximiser vos performances.",
        icon: "/icon/icon-electronique.svg",
        cta: "Voir plus",
        ctaStyle: "Elec",
        slug: "/solutions",
    },
];

const presCardStore = create((set) => ({
    cards,
}));

export default presCardStore;
