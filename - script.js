document.addEventListener("DOMContentLoaded", function () {

    // TAHUN OTOMATIS PADA FOOTER
    const currentYear = document.getElementById("current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // NAVBAR: MENUTUP MENU TIDAK DIPERLUKAN
    // Karena navbar sekarang selalu tampil tanpa hamburger.

    // CEK GAMBAR YANG GAGAL DIMUAT
    const images = document.querySelectorAll("img");

    images.forEach(function (img) {

        img.addEventListener("error", function () {
            console.error("Gambar gagal dimuat:", img.getAttribute("src"));
        });

    });

});