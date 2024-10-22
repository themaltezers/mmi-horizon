import { create } from "zustand";

const products = [
    {
        id: 0,
        slug: "/produits/horizguard-basic",
        title: "HorizGuard Basic",
        subtitle: " La sécurité essentielle pour votre réseau",
        subtitle2: "Un Pare-feu Conçu pour l’Essentiel",
        description: `    Le <strong class="textAcc textAccCyber">Horizguard Basic</strong> est la solution idéale pour les petites entreprises et les particuliers souhaitant <strong class="textAcc textAccCyber">sécuriser leur réseau</strong> sans compromis. Conçu pour être performant et <strong class="textAcc textAccCyber">simple à gérer</strong>, il offre une <strong class="textAcc textAccCyber">protection robuste</strong> contre les <strong class="textAcc textAccCyber">menaces en ligne</strong>, tout en restant <strong class="textAcc textAccCyber">abordable</strong> et <strong class="textAcc textAccCyber">facile à utiliser</strong>.`,

        images: [
            {
                id: 0,
                src: "/img/product/HorizGuardBasic/HorizGuard-Basic1.webp",

                alt: "Vue avant du produit Horizguard Basic montrant son design compact et élégant",
            },
            {
                id: 1,
                src: "/img/product/HorizGuardBasic/HorizGuard-Basic2.webp",
                alt: "Vue avant du produit Horizguard Basic montrant son design compact et élégant",
            },
            {
                id: 2,
                src: "/img/product/HorizGuardBasic/HorizGuard-Basic3.webp",
                alt: `Gros plan sur les ports de connexion de l'Horizguard Basic, mettant en avant sa connectivité`,
            },
            {
                id: 3,
                src: "/img/product/HorizGuardBasic/HorizGuard-Basic4.webp",
                alt: `Câblage connecté à l'arrière de l'Horizguard Basic, illustrant sa facilité d'installation.`,
            },
            {
                id: 4,
                src: "/img/product/HorizGuardBasic/HorizGuard-Basic5.webp",
                alt: "Vue avant du produit Horizguard Basic montrant son design compact et élégant",
            },
            {
                id: 5,
                src: "/img/product/HorizGuardBasic/HorizGuard-Basic6.webp",
                alt: "Vue avant du produit Horizguard Basic montrant son design compact et élégant",
            },
        ],

        listItem: [
            {
                id: 0,
                content: "Protection 24h/24 7j/7 contre les menaces en lignes",
            },
            {
                id: 1,
                content: "Installation & Configuration simplifiées",
            },
            {
                id: 2,
                content:
                    "Performances optimisées avec un processeur Intel de dernière génération",
            },
        ],
        answer: `    Le <strong class="textAcc textAccCyber">Horizguard Basic</strong> est la solution parfaite pour les <strong class="textAcc textAccCyber">petites entreprises</strong> et les <strong class="textAcc textAccCyber">particuliers</strong> qui recherchent une <strong class="textAcc textAccCyber">protection fiable et accessible</strong> pour leur réseau. Conçu pour <strong class="textAcc textAccCyber">simplifier la gestion de la sécurité</strong>, il vous permet de transformer votre réseau en une <strong class="textAcc textAccCyber">forteresse numérique</strong> sans avoir besoin de connaissances techniques avancées. Avec une <strong class="textAcc textAccCyber">interface intuitive</strong> et une <strong class="textAcc textAccCyber">installation facile</strong>, l'Horizguard Basic vous garantit une <strong class="textAcc textAccCyber">protection 24h/24, 7j/7</strong> contre les <strong class="textAcc textAccCyber">cybermenaces</strong>, tout en maintenant des <strong class="textAcc textAccCyber">performances optimales</strong> pour vos appareils connectés. Son <strong class="textAcc textAccCyber">coût abordable</strong> en fait un choix idéal pour ceux qui souhaitent <strong class="textAcc textAccCyber">sécuriser leur réseau</strong> sans compromis sur la qualité ou la performance.`,
        cards: [
            {
                id: 0,
                title: "Résistance accrue",
                icon: "/icon/icon-security.svg",
                content: [
                    "Protégez vos données sensibles efficacement.",
                    "Repousse les cybermenaces les plus avancées.",
                ],
            },
            {
                id: 1,
                title: "Facilité de Configuration",
                icon: "/icon/icon-config.svg",
                content: [
                    " Configurez et gérez facilement.",
                    "Interface intuitive et rapide.",
                ],
            },
            {
                id: 2,
                title: "Performances Optimales",
                icon: "/icon/icon-performance.svg",
                content: [
                    " Performance réseau sans compromis.",
                    "Efficacité maximale garantie.",
                ],
            },
            {
                id: 3,
                title: "Système d'Exploitation pfSense",
                icon: "/logo-pfSense.svg",
                content: [
                    " Basé sur pfSense reconnu mondialement.",
                    "Fiable, flexible et sécurisé.Efficacité maximale garantie.",
                ],
            },
        ],

        caracs: [
            {
                id: 0,
                icon: "/icon/icon-cpu.svg",
                label: "Processeur :",
                text: "Intel Celeron J4125 CPU @ 2.70GHz",
            },
            {
                id: 1,
                icon: "/icon/icon-stockage.svg",
                label: "Mémoire RAM :",
                text: "4 Go DDR4 (extensible jusqu'à 16 Go)",
            },
            {
                id: 2,
                icon: "/icon/icon-stockage.svg",
                label: "Stockage :",
                text: "1 x mSata SSD et 1 x 2.5 pouces SATA SSD/HDD",
            },
            {
                id: 3,
                icon: "/icon/icon-stockage.svg",
                label: "Interfaces réseau :",
                text: "4 x Intel 2.5GbE I226-V",
            },
            {
                id: 4,
                icon: "/icon/icon-stockage.svg",
                label: "Ports I/O :",
                text: "HDMI, 2 x USB 3.0, VGA, 4 x LAN, DC-IN",
            },
            {
                id: 5,
                icon: "/icon/icon-stockage.svg",
                label: "Alimentation :",
                text: " DC 100-240V AC/50-60Hz 12V3A (externe)",
            },
            {
                id: 6,
                icon: "/icon/icon-stockage.svg",
                label: "Système de refroidissement :",
                text: "Passif",
            },
            {
                id: 7,
                icon: "/icon/icon-stockage.svg",
                label: "Dimensions :",
                text: "134 x 126 x 40,6 mm",
            },
            {
                id: 8,
                icon: "/icon/icon-stockage.svg",
                label: "Poids :",
                text: "1,2 kg",
            },
            {
                id: 9,
                icon: "/icon/icon-stockage.svg",
                label: "Garantie :",
                text: "3 ans",
            },
        ],
    },
    {
        id: 1,
        slug: "/produits/horizguard-premium",
        title: "HorizGuard Premium",
        subtitle: " La sécurité renforcée pour votre réseau",
        subtitle2:
            "La solution ultime pour une sécurité renforcée et une flexibilité inégalée.",

        description: `Conçu avec des matériaux de <strong class="textAcc textAccCyber">haute qualité</strong>, cet équipement offre une <strong class="textAcc textAccCyber">protection avancée</strong> contre les <strong class="textAcc textAccCyber">cybermenaces</strong>, les éléments et les impacts. Grâce à ses <strong class="textAcc textAccCyber">performances optimisées</strong>, l'Horizguard Premium est idéal pour ceux qui souhaitent <strong class="textAcc textAccCyber">sauvegarder efficacement</strong> leurs <strong class="textAcc textAccCyber">données sensibles</strong> tout en garantissant une <strong class="textAcc textAccCyber">adaptabilité</strong> à divers environnements.`,

        images: [
            {
                id: 0,
                src: "/img/product/HorizGuardPremium/HorizGuard-Premium1.png",

                alt: "Vue avant du produit Horizguard Basic montrant son design compact et élégant",
            },
        ],

        listItem: [
            {
                id: 0,
                content:
                    "Protection avancée contre les éléments et les impacts",
            },
            {
                id: 1,
                content:
                    "Conception ergonomique pour un confort et une liberté de mouvement",
            },
            {
                id: 2,
                content:
                    "Technologies innovantes pour une ventilation et une gestion de l'humidité améliorées",
            },
        ],
        answer: `<strong class="textAcc textAccCyber">L'Horizguard Premium</strong> est la solution idéale pour maximiser la <strong class="textAcc textAccCyber">sécurité</strong> de vos données. Conçu avec des <strong class="textAcc textAccCyber">matériaux de haute qualité</strong>, cet équipement offre une <strong class="textAcc textAccCyber">protection avancée</strong> contre les <strong class="textAcc textAccCyber">cybermenaces</strong>, les <strong class="textAcc textAccCyber">éléments</strong> extérieurs et les <strong class="textAcc textAccCyber">impacts</strong>. Grâce à ses <strong class="textAcc textAccCyber">performances optimisées</strong>, l'Horizguard Premium garantit une <strong class="textAcc textAccCyber">adaptabilité</strong> à divers environnements, permettant ainsi de <strong class="textAcc textAccCyber">sécuriser efficacement</strong> vos <strong class="textAcc textAccCyber">données sensibles</strong>. Choisissez l'Horizguard Premium pour une tranquillité d'esprit inégalée.`,
        cards: [
            {
                id: 0,
                title: "Protection Avancée",
                icon: "/icon/icon-security-plus.svg",
                content: [
                    "Protection renforcée contre intempéries.",
                    "Sécurisez vos activités extérieures efficacement.",
                ],
            },
            {
                id: 1,
                title: "Confort Ergonomique",
                icon: "/icon/icon-config.svg",
                content: [
                    "Ajustement parfait pour un confort optimal.",
                    "Liberté de mouvement essentielle pour vos aventures.",
                ],
            },
            {
                id: 2,
                title: "Technologie Innovante",
                icon: "/logo-pfSense.svg",
                content: [
                    "Ventilation avancée pour performance.",
                    "Fonctionnalités de pointe intégrées.",
                ],
            },
            {
                id: 3,
                title: "Durabilité Exceptionnelle",
                icon: "/logo-pfSense.svg",
                content: [
                    "Conçu pour résister à l'épreuve du temps.",
                    "Protection fiable, saison après saison.",
                ],
            },
        ],
        caracs: [
            {
                id: 0,
                icon: "/icon/icon-cpu.svg",
                label: "Processeur :",
                text: "Intel Core i7-4770 CPU @ 3.40GHz",
            },
            {
                id: 1,
                icon: "/icon/icon-stockage.svg",
                label: "Mémoire RAM :",
                text: "4 Go DDR3 (extensible jusqu'à 32 Go)",
            },
            {
                id: 2,
                icon: "/icon/icon-stockage.svg",
                label: "Stockage :",
                text: "1 x mSata SSD et 1 x 2.5 pouces SATA SSD/HDD",
            },
            {
                id: 3,
                icon: "/icon/icon-stockage.svg",
                label: "Interfaces réseau :",
                text: "6 x Intel 82574L 1GbE, 2 x SFP+ 82599ES 10 GbE",
            },
            {
                id: 4,
                icon: "/icon/icon-stockage.svg",
                label: "Ports I/O :",
                text: "Console, 2 x USB, 6 x LAN, 2 x SFP+ Optique, VGA, DC-IN",
            },
            {
                id: 5,
                icon: "/icon/icon-stockage.svg",
                label: "Alimentation :",
                text: "150w 100-240v 50hz/60hz",
            },
            {
                id: 6,
                icon: "/icon/icon-stockage.svg",
                label: "Système de refroidissement :",
                text: "Actif",
            },
            {
                id: 7,
                icon: "/icon/icon-stockage.svg",
                label: "Dimensions :",
                text: "430 x 270 x 50 mm",
            },
            {
                id: 8,
                icon: "/icon/icon-stockage.svg",
                label: "Poids :",
                text: "6,5 kg",
            },
            {
                id: 9,
                icon: "/icon/icon-stockage.svg",
                label: "Garantie :",
                text: "3 ans",
            },
        ],
    },
];

const servicesStore = create((set) => ({
    products,
}));

const bentos = [
    {
        id: 0,
        productTitle: "HorizGuard Basic",
        productSubtitle: " La sécurité essentielle pour votre réseau",
        productImg: "/img/product/HorizGuardBasic/HorizGuard-Basic1.webp",
        productCarac: [
            {
                id: 0,
                icon: "/icon/icon-cpu.svg",
                text: "Intel Celeron J4125 CPU @ 2.70GHz",
            },
            {
                id: 1,
                icon: "/icon/icon-stockage.svg",
                text: " 1 x mSata SSD et 1 x 3.5 pouce SATA HDD",
            },
            {
                id: 2,
                icon: "/icon/icon-cpu.svg",
                text: "Intel Celeron J4125 CPU @ 2.70GHz",
            },
        ],
    },
    {
        id: 1,
        productTitle: "HorizGuard Premium",
        productSubtitle: " La sécurité renforcée pour votre réseau",
        productImg: "/img/product/HorizGuardPremium/HorizGuard-Premium1.png",
        productCarac: [
            {
                id: 0,
                icon: "/icon/icon-cpu.svg",
                text: "Intel Celeron 5 CPU @ 2.70GHz",
            },
            {
                id: 1,
                icon: "/icon/icon-stockage.svg",
                text: " 1 x mSata SSD et 1 x 3.5 pouce SATA HDD",
            },
            {
                id: 2,
                icon: "/icon/icon-cpu.svg",
                text: "Intel Celeron J4125 CPU @ 2.70GHz",
            },
        ],
    },
];

const bentosStore = create((set) => ({
    products,
}));

const presText = [
    {
        id: 0,
        title: "Pare-feux",
        text: "Protégez votre réseau contre les cybermenaces avec nos                        solutions de pare-feux. Sécurisez vos données et                        garantissez la continuité de vos opérations grâce à une                        protection proactive et une gestion simplifiée.",

        icon: "/img/product/HorizGuardBasic/HorizGuard-Basic1.webp",

        slug: "/solutions",
    },
    {
        id: 2,
        title: "Web",
        text: "Boostez votre présence en ligne avec nos services de création de sites web et de stratégies marketing digital. Attirez plus de clients et développez votre image grâce à des solutions personnalisées et performantes.",

        icon: "/img/product/HorizGuardBasic/HorizGuard-Basic1.webp",

        slug: "/solutions",
    },
];

const presStore = create((set) => ({
    presText,
}));

export default servicesStore;
