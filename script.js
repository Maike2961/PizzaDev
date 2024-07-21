const pedirToogle = document.getElementsByClassName("pedir")
const secao = document.getElementById("carrinho")
for (let i = 0; i < pedirToogle.length; i++) {
    pedirToogle[i].addEventListener("click", adicionarPizza)
    pedirToogle[i].addEventListener("click", ()=>{
        secao.scrollIntoView({behavior: "smooth"})
    })
}

function adicionarPizza(event) {
    const botao = event.target
    const pizainfos = botao.parentElement.parentElement
    const pizzaImage = pizainfos.getElementsByClassName("pizza-image")[0].src
    const pizzaName = pizainfos.getElementsByTagName("h3")[0].innerText
    const tableBody = document.getElementById("lista")

    tableBody.innerHTML = ''
    tableBody.innerHTML += `
    <tr>
        <td class="carrinho-image">
            <img src="${pizzaImage}" alt="${pizzaName}">
            <strong class="pizza-name">${pizzaName}</strong>
        </td>
        <td>
            <input type="number" value="1" min="0" class="pizza-qtd-input">
        </td>
        <td>
            <select id="SelectFatia">
                <option value="35,00">6 fatias</option>
                <option value="45,00">8 fatias</option>
                <option value="55,00">12 fatias</option>
            </select>
        </td>
        <td>
            <div class="menu-carrinho">
                <div class="one"></div>
                <div class="three"></div>
            </div>
        </td>
    </tr>
    `

    abrircarrinho()
    calcular()
    const QtdTable = document.querySelector(".pizza-qtd-input")
    const PrecoTable = document.querySelector("#SelectFatia")

    QtdTable.addEventListener("change", calcular)
    PrecoTable.addEventListener("change", calcular)
}

const calcular = () =>{
    const rows = document.querySelectorAll("#lista tr")
    const total = document.getElementById("total")
    let soma = 0;
    console.log(rows)
    rows.forEach(element => {
        let preco = element.querySelector("#SelectFatia")
        console.log(preco)
        let quantidade = element.querySelector(".pizza-qtd-input")
        console.log(quantidade)
        if(preco && quantidade != null){
            let precovalor = parseFloat(preco.value)
            let Quantidadevalor = parseInt(quantidade.value)
            let subTotal = Quantidadevalor * precovalor
            soma += subTotal
        }
    });
    console.log(soma)
    total.innerHTML = soma.toFixed(2)
}

const finalizarPedido = () =>{
    const finaliza = document.querySelector(".button")
    console.log(finaliza)
    const carro = document.querySelector(".carrinho.on")
    finaliza.addEventListener('click', function(){
        alert("Parabéns pedido finalizado")
        setTimeout(()=>{
            carro.classList.remove('on')
        },1000)
    })
}


function abrircarrinho(event) {
    let show = true
    const carro = document.querySelector(".carrinho")
    carro.classList.toggle('on', show)
    carro.style.width = "100vw"
    carro.style.height = "60vh"
    show = !show;
    fecharcarrinho()
    finalizarPedido()
}

function fecharcarrinho(){
    const menuCarrinho = document.querySelector(".menu-carrinho")
    const carro = document.querySelector(".carrinho.on")
    
    menuCarrinho.addEventListener('click', function(){
        carro.classList.remove('on')
    })
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