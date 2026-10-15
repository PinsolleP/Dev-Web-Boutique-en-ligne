$(document).ready(function () {

     const produits = [
        {
            id: 1,
            nom: "Carnet Les petits jours",
            description: "A5 · Papier ligné · 96 pages",
            prix: 14.00,
            image: "carnet.jpg",
            categorie: "carnets"
        },
        {
            id: 2,
            nom: "Duo de masking tapes",
            description: "2 rouleaux · 15 mm × 10 m",
            prix: 7.50,
            image: "maskingTapes.jpg",
            categorie: "accessoires"
        },
        {
            id: 3,
            nom: "Crayons de couleur",
            description: "Pour donner vie à vos idées",
            prix: 12.00,
            image: "crayonCouleur.jpg",
            categorie: "accessoires"
        },
        {
            id: 4,
            nom: "Stickers jardin",
            description: "Des motifs fleuris pour vos créations",
            prix: 5.00,
            image: "stickersJardin.jpg",
            categorie: "stickers"
        },
        {
            id: 5,
            nom: "Kit créatif",
            description: "Tout le nécessaire pour créer",
            prix: 29.00,
            image: "kit-creatif.jpg",
            categorie: "kits"
        },
        {
            id: 6,
            nom: "Carnet Jardin secret",
            description: "Carnet illustré, format A5",
            prix: 12.00,
            image: "carnet.jpg",
            categorie: "carnets"
        },
        {
            id: 7,
            nom: "Bloc-notes Douce pensée",
            description: "Bloc-notes pour toutes vos idées",
            prix: 8.00,
            image: "carnet.jpg",
            categorie: "carnets"
        },
        {
            id: 8,
            nom: "Stylos pastel",
            description: "Un assortiment de stylos colorés",
            prix: 6.00,
            image: "crayonCouleur.jpg",
            categorie: "accessoires"
        },
        {
            id: 9,
            nom: "Stickers fleurs",
            description: "Des motifs fleuris et délicats",
            prix: 4.50,
            image: "stickersJardin.jpg",
            categorie: "stickers"
        },
        {
            id: 10,
            nom: "Stickers petits mots",
            description: "Pour décorer et personnaliser",
            prix: 4.00,
            image: "stickersJardin.jpg",
            categorie: "stickers"
        },
        {
            id: 11,
            nom: "Kit carnet & couleurs",
            description: "Un carnet et de quoi le décorer",
            prix: 24.00,
            image: "kit-creatif.jpg",
            categorie: "kits"
        },
        {
            id: 12,
            nom: "Kit stickers & déco",
            description: "Un assortiment pour vos créations",
            prix: 18.00,
            image: "kit-creatif.jpg",
            categorie: "kits"
        }
    ];

    const plus = document.querySelector(".plus");
    const minus = document.querySelector(".minus");
    const num = document.querySelector(".num");

    // Vérifier que le compteur existe sur la page
    if (plus && minus && num) {

        let a = 1;

        plus.addEventListener("click", () => {
            a++;
            num.textContent = a < 10 ? "0" + a : a;
        });

        minus.addEventListener("click", () => {
            if (a > 1) {
                a--;
                num.textContent = a < 10 ? "0" + a : a;
            }
        });

    }

});