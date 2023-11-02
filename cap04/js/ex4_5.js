//cria referência ao form e ao elemento de respota(h3)
const frm = document.querySelector('form')
const resp = document.querySelector('h3')
//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    e.preventDefault()   //evita o envio
    const numero = Number(frm.inNumero.value)   //obtém o valor
    const raiz = Math.sqrt(numero)              //calcula a raiz
    if (Number.isInteger(raiz)){                //verifica se o número é inteiro
        resp.innerHTML = `Raiz: ${raiz}`        //exibe resposta
    }else{
        resp.innerHTML = `Não há raiz exata para: ${numero}`
    }
   
})