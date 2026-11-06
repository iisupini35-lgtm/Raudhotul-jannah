
// MENU NAVIGASI MOBILE

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    // FUNGSI BUKA DAN TUTUP MENU
    function closeMenu() {
        navbar.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Buka menu");
    }

    function openMenu() {
        navbar.classList.add("active");

        menuToggle.textContent = "✕";

        menuToggle.setAttribute("aria-expanded", "true");

        menuToggle.setAttribute("aria-label", "Tutup menu");
    }

    // KLIK TOMBOL HAMBURGER
    menuToggle.addEventListener("click", function () {

        const isOpen = navbar.classList.contains("active");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    });

    // TUTUP MENU SETELAH LINK DIKLIK
    navbar.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {
            closeMenu();
        });

    });

    // TUTUP MENU JIKA KLIK DI LUAR NAVBAR
    document.addEventListener("click", function (event) {

        const clickedInsideNavbar = navbar.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideNavbar && !clickedToggle) {
            closeMenu();
        }

    });

    // RESET SAAT KEMBALI KE DESKTOP
    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {
            closeMenu();
        }

    });

}


// ANIMASI SCROLL

const sections = document.querySelectorAll("section");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.1
    });

    sections.forEach(function (section) {

        section.classList.add("hidden");

        observer.observe(section);

    });

}


// TAHUN OTOMATIS

const year = document.getElementById("current-year");

if (year) {
    year.textContent = new Date().getFullYear();
}
