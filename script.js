
/* MADA CLOUD GAMING */
/* SYSTEME JAVASCRIPT */

// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

// FERMER LE MENU APRES UN CLIC
navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
    });
});

// RECHERCHE DES JEUX
const searchInput = document.getElementById("searchInput");
const gameCards = document.querySelectorAll(".game-card");
const emptyMessage = document.getElementById("emptyMessage");

let activeFilter = "all";

function filterGames() {

    const searchText = searchInput.value.toLowerCase();
    let visibleGames = 0;

    gameCards.forEach(card => {

        const gameName = card.querySelector("h3")
            .textContent.toLowerCase();

        const category = card.dataset.category;

        const matchesSearch =
            gameName.includes(searchText);

        const matchesFilter =
            activeFilter === "all" ||
            category === activeFilter;

        if (matchesSearch && matchesFilter) {
            card.style.display = "";
            visibleGames++;
        } else {
            card.style.display = "none";
        }

    });

    emptyMessage.hidden = visibleGames !== 0;
}

searchInput.addEventListener("input", filterGames);

// FILTRES
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        activeFilter = button.dataset.filter;

        filterGames();

    });

});

// BOUTONS JOUER
const playButtons = document.querySelectorAll(".play-btn");

playButtons.forEach(button => {

    button.addEventListener("click", () => {

        const gameName = button.dataset.game;

        alert(
            "Bienvenue sur Mada Cloud Gaming !\n\n" +
            "Jeu sélectionné : " + gameName +
            "\n\nLe streaming de ce jeu sera disponible " +
            "après la configuration du serveur."
        );

    });

});

console.log("MADA CLOUD GAMING : système chargé !");
