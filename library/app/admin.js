'use strict'

function prikaziKnjige() {
    const knjige = getAllBooks();
    const container = document.querySelector("#allBooksContainer");

    container.innerHTML = "";

    for (let i = 0; i < knjige.length; i++) {
        const knjiga = knjige[i];

        const red = document.createElement("tr");

        red.innerHTML = `
            <td>${i + 1}</td>
            <td>${knjiga.naziv}</td>
            <td><button class="obrisi-btn" data-id="${knjiga.id}">Obriši</button></td>
        `;
        container.appendChild(red);
    }

    dodajEventZaBrisanje();
}
function dodajEventZaBrisanje() {
    const dugmici = document.querySelectorAll(".obrisi-btn");

    for (let i = 0; i < dugmici.length; i++) {
        dugmici[i].addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            obrisiKnjigu(id);
        });
    }
}
function obrisiKnjigu(id) {
    let knjige = getAllBooks();
    knjige = knjige.filter(function(knjiga) {
        return knjiga.id !== id;
    });

    saveAllBooks(knjige);
    prikaziKnjige();
}
document.addEventListener("DOMContentLoaded", function() {
    prikaziKnjige();
});
