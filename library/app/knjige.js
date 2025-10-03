'use strict'
function prikaziIznajmljeneKnjige() {
    const iznajmljene = getRentedBooks(); 
    const container = document.querySelector("#rentedBooksContainer");

    container.innerHTML = ""; 

    for (let i = 0; i < iznajmljene.length; i++) {
        const knjiga = iznajmljene[i];

        const red = document.createElement("tr");

        red.innerHTML = `
            <td>${i + 1}</td>
            <td>${knjiga.naziv}</td>
            <td><button class="vrati-btn" data-id="${knjiga.id}">Vrati</button></td>
        `;

        container.appendChild(red);
    }

    dodajEventZaVracanje();
}

function dodajEventZaVracanje() {
    const dugmici = document.querySelectorAll(".vrati-btn");

    for (let i = 0; i < dugmici.length; i++) {
        dugmici[i].addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            vratiKnjigu(id);
        });
    }
}

function vratiKnjigu(id) {
    let iznajmljene = getRentedBooks();
    const knjiga = iznajmljene.find(function(k) {
        return k.id === id;
    });

    if (knjiga) {
        let sve = getAllBooks();

        if (!sve.find(function(k) { return k.id === knjiga.id; })) {
            sve.push(knjiga);
            saveAllBooks(sve);
        }
        let novaLista = [];
        for (let i = 0; i < iznajmljene.length; i++) {
            if (iznajmljene[i].id !== id) {
                novaLista.push(iznajmljene[i]);
            }
        }
        saveRentedBooks(novaLista);
        prikaziIznajmljeneKnjige(); 
    }
}
document.addEventListener("DOMContentLoaded", function() {
    prikaziIznajmljeneKnjige();
});
