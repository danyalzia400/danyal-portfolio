/* =========================================================
   DANYAL ZIA — PORTFOLIO
   COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");


if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            if (isOpen) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        }

    });

}


/* =========================================================
   NAVIGATION LINKS
========================================================= */

const navLinks = document.querySelectorAll("#navMenu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (!navMenu || !menuBtn) return;

        navMenu.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});


/* =========================================================
   ACTIVE NAVIGATION ON SCROLL
========================================================= */

const sections = document.querySelectorAll("section[id]");


function updateActiveNavigation() {

    let currentSection = "";

    const scrollPosition = window.scrollY + 180;


    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


/* =========================================================
   SCROLL EVENT
========================================================= */

window.addEventListener("scroll", updateActiveNavigation);


/* =========================================================
   INITIAL ACTIVE NAVIGATION
========================================================= */

updateActiveNavigation();


/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", event => {

    if (!navMenu || !menuBtn) return;

    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedMenuButton = menuBtn.contains(event.target);

    if (
        navMenu.classList.contains("show") &&
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {

        navMenu.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    }

});


/* =========================================================
   ESC KEY — CLOSE MOBILE MENU
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape" && navMenu && menuBtn) {

        navMenu.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    }

});