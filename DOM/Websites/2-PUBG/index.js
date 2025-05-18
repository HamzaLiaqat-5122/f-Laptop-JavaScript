const weapons = [
    {
        id: 1,
        imageUrl: "images/Akm.png",
        name: "AKM"
    },
    {
        id: 2,
        imageUrl: "images/Awm.png",
        name: "AWM"
    },
    {
        id: 3,
        imageUrl: "images/m416.png",
        name: "M416"
    },
    {
        id: 4,
        imageUrl: "images/m24.png",
        name: "M24"
    },
];

const Characters = [
    {
        id: 1,
        imageUrl: "images/victor1.png",
        name: "Victor"
    },
    {
        id: 2,
        imageUrl: "images/sara.png",
        name: "Sara"
    },
    {
        id: 3,
        imageUrl: "images/carlo.png",
        name: "Carlo"
    },
    {
        id: 4,
        imageUrl: "images/andy.png",
        name: "Andy"
    },
];

const Maps = [
    {
        id: 1,
        imageUrl: "images/erangel.jpg",
        name: "Erangel"
    },
    {
        id: 2,
        imageUrl: "images/miramar.jpg",
        name: "Miramar"
    },
    {
        id: 3,
        imageUrl: "images/vikendi.jpg",
        name: "Vikendi"
    },
    {
        id: 4,
        imageUrl: "images/livik.jpg",
        name: "Livik"
    },
];

const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");
const mobileLinks = mobileMenu.querySelectorAll("a");
const WeaponsCardsSection = document.querySelectorAll("#weapons .card-container");
console.log(WeaponsCardsSection)

toggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
