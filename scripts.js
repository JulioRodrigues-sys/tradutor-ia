let inputTexto = document.querySelector(".input-texto")


async function Traduzir(){
    console.log(inputTexto.value)

    let endereco ="https://api.mymemory.translated.net/get?q=" 
    + inputTexto.value
    + "&langpair=pt-BR|en"

    let resposta = await fetch(endereco)

    let dados = await resposta.json()
    
    console.log(dados)

}