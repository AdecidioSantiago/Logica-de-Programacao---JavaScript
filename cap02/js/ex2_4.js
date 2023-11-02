//cria referência ao form e ao elemento de resposta (pela tag)
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    const prato = frm.inPrato.value         //obtém o conteúdo
    const consumo = frm.inConsumo.value

    const pagar = (prato / 1000) * consumo  //calcula o valor do prato em gramas

    resp.innerText = `Valor a pagar R$: ${pagar.toFixed(2)}` //exibe a resposta
    e.preventDefault()   //evita o envio
})