const frm = document.querySelector('form')  //obtém os dados do form
const resp = document.querySelector('h3')   //seleciona a tag de resposta

frm.addEventListener('submit', (e) => {     //"escuta" de eventos
    e.preventDefault()     //evita o envio
    const numero = frm.inNumero.value       //obtém o número informado

    let resposta = `Entre ${numero} e 1: `  //String para montar resposta

    for (let i = numero; i > 1; i--){       //cria um for decrescente
        resposta = resposta + i + ', '
    }
    resp.innerHTML = resposta + '1.'   //exibe resposta
})