const frm = document.querySelector('form')  //obtém os dados de entrada do form
const resp = document.querySelector('h3')   

frm.addEventListener('submit', (e) => {     //adiciona um "ouvinte" de evento, acionado quando o botão submit for clicado
    e.preventDefault()          //evita o envio
    const numero = frm.inNumero.value

    const calculo = numero % 2 == 0 ? 'PAR' : 'ÍMPAR'  //calcula se é múltiplo de 2 (operador ternário)

    resp.innerHTML = `${numero} é ${calculo}`  //exibe resposta

})