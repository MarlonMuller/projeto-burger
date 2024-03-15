const list = document.querySelector("#list");
const buttonShowAll = document.querySelector("#mostrarTudo")
const buttonmap = document.querySelector("#mapear")
const buttonsumAll = document.querySelector("#sum-all")
const buttonfilterAll = document.querySelector("#filter-all")

function formatValue(value) {
    const valueBR = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    return valueBR
}


function showAll(array) {
    let myList = ""
    array.forEach(element => {
        myList +=
        `
        <li>
            <img src=${element.src} alt=${element.name}>
            <p id="name">${element.name}</p>
            <p id="price">${formatValue(element.price)}</p>
        </li>
        `
    })

    list.innerHTML = myList
}

function discount () {

    let productWithDiscout = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }))

    showAll(productWithDiscout)
}

function sumAll () {
    let totalValue = menuOptions.reduce((acc, curr) => acc + curr.price,0)
    console.log(totalValue)

    list.innerHTML = `<li>A soma de todos os valores é ${formatValue(totalValue)}</li>`

}

function filterAll () {
    const filtrados = menuOptions.filter(product => product.vegan //== true
    )
    showAll(filtrados)
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonmap.addEventListener("click", discount)
buttonsumAll.addEventListener("click", sumAll)
buttonfilterAll.addEventListener("click", filterAll)