import { create } from "zustand";

const products = [
    {
        id: 0,
        productTitle: "HorizGuard Basic",
        productSubtitle: " La sécurité essentielle pour votre réseau",
        productSubtitle2: "Un Pare-feu Conçu pour l’Essentiel",
        // productImg: "/img/product/HorizGuardBasic/HorizGuard-Basic1.webp",
        productImg: [
            "/img/product/HorizGuardBasic/HorizGuard-Basic1.webp",
            "/img/product/HorizGuardBasic/HorizGuard-Basic2.webp",
            "/img/product/HorizGuardBasic/HorizGuard-Basic3.webp",
            "/img/product/HorizGuardBasic/HorizGuard-Basic4.webp",
            "/img/product/HorizGuardBasic/HorizGuard-Basic5.webp",
            "/img/product/HorizGuardBasic/HorizGuard-Basic6.webp",
        ],
        slug: "/produits/horizguard-basic",

        productCarac: [
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
        productTitle: "HorizGuard Premium",
        productSubtitle: " La sécurité renforcée pour votre réseau",
        productImg: ["/img/product/HorizGuardPremium/HorizGuard-Premium1.png"],
        slug: "/produits/horizguard-premium",
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

export default servicesStore;
