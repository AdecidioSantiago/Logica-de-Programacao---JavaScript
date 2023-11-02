//cria referência a tag form e a tag de respota h3
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

//cria um "ouvinte" de evento, acionado o botão submit for clicado
frm.addEventListener('submit', (e) => {
    const preco = frm.inPreco.value        //obtém o conteúdo dos campos
    const tempo = frm.inTempo.value

    const resultado = Math.ceil(tempo / 15) * preco  //calcula o vlar a cada 15min arredodando para cima

    resp.innerText = `Valor a Pagar R$: ${resultado.toFixed(2)}`  //exibe o resultado

    e.preventDefault()  //evita o envio
})