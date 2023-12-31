const frm = document.querySelector('form') //obtém elementos da página
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) => {       //"escuta" evento submit do form
    e.preventDefault()                        //evita envio do form
    const numero = Number(frm.inNumero.value) //obtém número informado
    
    let resposta = ""    //variável do tip String, para contenar a resposta

    for (let i = 1; i <= 10; i++){
        //a variável resposta vai acumulando os novos conteúdos
        resposta = resposta + numero + " X " + i + " = " + (numero * i) + "\n"
    }
    //o conteúdo da tag pre é alterado para exibir a tabuada do número
    resp.innerHTML = resposta
})