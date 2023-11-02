//cria referência a tag form e as tags de respostas pelo o ID
const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

//cria um "ouvinte" de eventos, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    const produto = frm.inProduto.value    //obtém o conteúdo dos campos
    const preco = frm.inPreco.value

    const promocao = preco * 0.5          //calcula 50% de 1 produto
    const total = (preco * 2) + promocao  //calcula o valor a pagar

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}` //exibe o quanto irá pagar
    resp2.innerText = `O 3º produto custa apenas R$: ${promocao.toFixed(2)}`      //exibe o desconto dado no 3º produto

    e.preventDefault()  //evita o envioexit
    
})