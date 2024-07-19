const pedirToogle = document.getElementsByClassName("pedir")
for (let i = 0; i < pedirToogle.length; i++) {
    pedirToogle[i].addEventListener("click", adicionarPizza)
}

function adicionarPizza(event) {
    const botao = event.target
    const pizainfos = botao.parentElement.parentElement
    const pizzaImage = pizainfos.getElementsByClassName("pizza-image")[0].src
    const pizzaName = pizainfos.getElementsByTagName("h3")[0].innerText
    const pizzaFatia0 = pizainfos.getElementsByTagName("h4")[0].innerText
    const pizzaFatia1 = pizainfos.getElementsByTagName("h4")[1].innerText
    const pizzaFatia2 = pizainfos.getElementsByTagName("h4")[2].innerText

    const pizzah4 = pizainfos.getElementsByTagName("span")[0].innerText
    console.log(pizzaFatia0.split(""))

    const tableBody = document.getElementById("lista")

    tableBody.innerHTML = ''
    tableBody.innerHTML += `
    <td class="carrinho-image">
        <img src="${pizzaImage}" alt="${pizzaName}">
        <strong class="pizza-name">${pizzaName}</strong>
    </td>
    <td>
        <span class="Pizza-fatia">${pizzaFatia0}</span>
        <span class="Pizza-fatia">${pizzaFatia1}</span>
        <span class="Pizza-fatia">${pizzaFatia2}</span>
    </td>
    <td>
        <input type="number" value="1" min="0" class="product-qtd-input">
        <button type="button" class="remove-product-button">Remover</button>
    </td>
    `
    abrircarrinho()
}

function abrircarrinho(event) {
    let show = true
    const carro = document.querySelector(".carrinho")
    console.log(carro)
    carro.classList.toggle('on', show)
    carro.style.width = "100vw"
    carro.style.height = "30vh"
    carro.style.transition = "ease-out 0.8s 5s"
    show = !show;
}

function menu() {
    let show = true
    const menuContent = document.querySelector(".content");
    const menuToggle = menuContent.querySelector(".menu-toggle");
    //adicionando uma nova class
    menuToggle.addEventListener("click", () => {
        menuContent.classList.toggle('on', show)
        show = !show;
    })
}

menu()