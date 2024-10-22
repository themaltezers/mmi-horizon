import { create } from "zustand";

const slides = [
    {
        id: 0,
        title: "Sécurité Informatique",
        text: "Protégez vos données avec nos solutions avancées de cybersécurité. Pare-feux, protection des réseaux, et surveillance en temps réel pour une sécurité optimale.",
        cta: "Protégez vos données",
        ctaStyle: "ctaCyber",
        slug: "/solutions",
    },
    {
        id: 1,
        title: "Création de Sites Web",
        text: "Créez un site web sur mesure, moderne et responsive. Attirez plus de clients avec une plateforme qui reflète votre identité et booste votre activité.",
        cta: "Créez votre site",
        ctaStyle: "ctaWeb",
        slug: "/solutions",
    },
    {
        id: 2,
        title: "Marketing Digital",
        text: "Optimisez votre présence en ligne avec des stratégies digitales efficaces : référencement, campagnes publicitaires, et gestion des réseaux sociaux pour maximiser votre visibilité.",
        cta: "Boostez votre visibilité",
        ctaStyle: "ctaWeb",
        slug: "/solutions",
    },
    {
        id: 3,
        title: "Support IT Personnalisé",
        text: "Profitez d'un support informatique sur-mesure. Nos experts sont à vos côtés pour garantir le bon fonctionnement de vos systèmes et vous accompagner dans votre croissance.",
        cta: "Obtenez notre support",
        ctaStyle: "ctaCyber",
        slug: "/solutions",
    },
];

const carouselStore = create((set) => ({
    slides,
}));

export default carouselStore;
