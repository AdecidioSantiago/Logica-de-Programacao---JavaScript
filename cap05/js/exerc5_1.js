const frm = document.querySelector('form')   //obtém dos elementos da página
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {      //"escuta" de eventos botão submit
    e.preventDefault()    //evita o envio

    const fruta = frm.inFruta.value          //obtém os valores do form
    const num = frm.inNum.value
    let resposta = ''      //declara variável de resposta
    for (let i = 1; i < num; i++){           //laço acrescenta o mesmo nome a cada repetição
        resposta += fruta + ' * '
    }
    resp.innerHTML = `${resposta + fruta}`   //fruta mais uma vez para retirar o * no final
})