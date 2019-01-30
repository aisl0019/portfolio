window.addEventListener("load", sidenVises);

let erSkjult = document.querySelector("#menu").classList.contains("hidden");

function sidenVises() {
    console.log("Siden vises!");

    // klik på menu-knap
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("Toggle menu");

    document.querySelector("#menu").classList.toggle("hidden");

    if (erSkjult == true) {
        // menu er skjult, lav knap til burger
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        // menu er vist, lav knap til kryds
        document.querySelector("#menuknap").textContent = "X";
    }
}
