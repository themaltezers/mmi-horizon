import { create } from "zustand";

const cards = [
    {
        id: 0,
        title: "Pare-feu",
        text: " Protégez votre réseau contre les cybermenaces avec nos   solutions de pare-feux. Sécurisez vos données et         garantissez la continuité de vos opérations grâce à une                   protection proactive et une gestion simplifiée.",
        cta: "Voir plus",
        slug: "/solutions",
    },
    {
        id: 1,
        title: "Web & Marketing Digital",
        text: " Boostez votre présence en ligne avec nos services de                        création de sites web et de stratégies marketing                        digital. Attirez plus de clients et développez votre                        image grâce à des solutions personnalisées et                        performantes.",
        cta: "Voir plus",
        slug: "/solutions",
    },
    {
        id: 2,
        title: "Électronique",
        text: "Optimisez vos systèmes avec nos solutions électroniques fiables et performantes. Adaptées à vos besoins, elles assurent une gestion précise et durable. Boostez l'efficacité de votre infrastructure avec notre expertise.",
        cta: "Voir plus",
        slug: "/solutions",
    },
];

const presCardStore = create((set) => ({
    cards,
}));

export default presCardStore;
