//cria referêcia a tag form e as tags de respostas h3 e h4
const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    const medicamento = frm.inMedicamento.value       //obtém o conteúdo do campo
    const preco = Math.floor(frm.inPreco.value) * 2   //arredonda para baixo e o dobro do preço inserido

    resp1.innerText = `Promoção de ${medicamento}`    //exibe o nome do medicamento
    resp2.innerText = `Leve 2 por apenas R$: ${preco.toFixed(2)}` //exibe o valor

    e.preventDefault() //evita o envio
})