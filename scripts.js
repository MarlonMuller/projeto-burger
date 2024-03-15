const list = document.querySelector("#list");
const buttonShowAll = document.querySelector("#mostrarTudo")
const buttonmap = document.querySelector("#mapear")
let myList = ""

function showAll() {
    menuOptions.forEach(element => {
        myList +=
        `
        <li>
            <img src=${element.src} alt=${element.name}>
            <p id="name">${element.name}</p>
            <p id="price">${element.price}</p>
        </li>
        `
    })

    list.innerHTML = myList
}

function mapear (){

    const productDiscount = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))
console.log(productDiscount)
}

buttonShowAll.addEventListener("click", showAll)
buttonmap.addEventListener("click", mapear)


