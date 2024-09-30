const choiceForm = [
    {
        id: 0,
        name: "Stockage SSD. ",
        q: "Vous avez besoin de combien d'espace de stockage ? ",
        choice: [
            {
                id: 0,
                selector: "256 Go",
                price: "+ 20 €",
            },
            {
                id: 1,
                selector: "512 Go",
                price: "+ 20 €",
            },
            {
                id: 2,
                selector: "1 To",
                price: "+ 20 €",
            },
        ],
    },
    {
        id: 1,
        name: "Mémoire RAM. ",
        q: "Optez pour la RAM idéale pour vos besoins : ",
        choice: [
            {
                id: 0,
                selector: "8 Go",
                price: "+ 20 €",
            },
            {
                id: 1,
                selector: "16 Go",
                price: "+ 20 €",
            },
            {
                id: 2,
                selector: "32 Go",
                price: "+ 20 €",
            },
        ],
    },
    {
        id: 2,
        name: "RAID. ",
        q: " Choisissez la configuration RAID parfaite pour vous : ",
        choice: [
            {
                id: 0,
                selector: "Pas de RAID",
            },
            {
                id: 1,
                selector: "Raid 0",
                price: "+ 20 €",
            },
            {
                id: 2,
                selector: "RAID 1",
                price: "+ 20 €",
            },
            {
                id: 3,
                selector: "RAID 5",
                price: "+ 20 €",
            },
        ],
    },
    {
        id: 3,
        name: "Extension de garantie. ",
        q: "Quelle durée vous apporterai le plus de sérénité  ? ",
        choice: [
            {
                id: 0,
                selector: "Non merci",
            },
            {
                id: 1,
                selector: "+1 an",
                price: "+20",
            },
            {
                id: 2,
                selector: "+2 ans",
                price: "+20",
            },
            {
                id: 3,
                selector: "+3 ans",
                price: "+20",
            },
        ],
    },
];

export { choiceForm };
