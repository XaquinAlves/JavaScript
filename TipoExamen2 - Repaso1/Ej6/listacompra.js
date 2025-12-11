let input = document.getElementById("newItemInput");
let boton = document.getElementById("addItemBtn");
let lista = document.getElementById("itemsList");

function addItem() {

    if (input.value === '') {
        input.setCustomValidity("Debes introducir un nombre de item")
    } else {
        input.setCustomValidity('');

        let newLi = document.createElement('li');
        let textLi = document.createTextNode(input.value)
        newLi.appendChild(textLi)

        let btnCheck = document.createElement('button');
        btnCheck.classList.add("completeBtn");
        btnCheck.classList.add("fa-solid");
        btnCheck.classList.add("fa-check");
        newLi.appendChild(btnCheck);

        let btnDelete = document.createElement('button');
        btnDelete.classList.add("deleteBtn");
        btnDelete.classList.add("fa-solid");
        btnDelete.classList.add("fa-x");
        newLi.appendChild(btnDelete);

        lista.appendChild(newLi);

        input.value = "";
    }
}