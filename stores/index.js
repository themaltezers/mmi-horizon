import { create } from "zustand";

const products = [
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
