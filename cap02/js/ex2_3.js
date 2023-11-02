//cria referência a form e aos elementos de respostas (pelo seu id)
const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    const modelo = frm.inModelo.value                  //obtém o conteúdo dos campos
    const preco = Number(frm.inEntrada.value) / 2      //calcula a entrada
    const parcela = preco / 12                         //calcula as parcelas restantes


    resp1.innerText = `Promoção: ${modelo}`                 //exibe as respostas
    resp2.innerText = `Entrada de R$: ${preco.toFixed(2)}`
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault()                     //evita o envio
})
