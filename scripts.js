const list = document.querySelector("#list")
const buttonMostrar = document.querySelector("#mostrarTudo")
let myList = ""


function mostrar() {

    menuOptions.forEach(product => {
        myList += `
        <li>
            <img src=${product.src} alt=${product.name}>
            <p id="name">${product.name}</p>
            <p id="price">R$ ${product.price},00</p>
        </li>
    `
    })
list.innerHTML = myList
}
buttonMostrar.addEventListener("click", mostrar)