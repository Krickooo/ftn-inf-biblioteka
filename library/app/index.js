if (!localStorage.getItem("allBooks")) {
    localStorage.setItem("allBooks", JSON.stringify([
        { id: "B1234", naziv: "Knjiga 1", datum: "2022", url: "assets/images/book1.jpg", opis: "Opis knjige 1", popularnost: 4 },
        { id: "B5678", naziv: "Knjiga 2", datum: "2021", url: "assets/images/book2.jpg", opis: "Opis knjige 2", popularnost: 5 }
    ]));
}


if (!localStorage.getItem("iznajmljeneKnjige")) {
    localStorage.setItem("iznajmljeneKnjige", JSON.stringify([
        { id: "B1234", naziv: "Knjiga 1", datum: "2022", url: "assets/images/book1.jpg", opis: "Opis knjige 1", popularnost: 4 },
        { id: "B5678", naziv: "Knjiga 2", datum: "2021", url: "assets/images/book2.jpg", opis: "Opis knjige 2", popularnost: 5 }
    ]));
}

function getAllBooks() {
    return JSON.parse(localStorage.getItem("allBooks")) || [];
}

function saveAllBooks(books) {
    localStorage.setItem("allBooks", JSON.stringify(books));
}

function getRentedBooks() {
    return JSON.parse(localStorage.getItem("iznajmljeneKnjige")) || [];
}

function saveRentedBooks(books) {
    localStorage.setItem("iznajmljeneKnjige", JSON.stringify(books));
}