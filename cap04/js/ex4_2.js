//cria referência ao form e elemento onde exibe a resposta
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

//cria um "ouvite" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    const nome = frm.inNome.value              //obtém valores do form
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)


    
    //-----USANDO A CONDICIONAL IF...ELSE--------
    /*let peso   //declara a variável peso
    if (masculino == true){
        peso = 22 * Math.pow(altura, 2)    //Math.pow eleva ao quadrado
    }else{
        peso = 21 * Math.pow(altura, 2)
    }*/
    //-----USANDO O OPERADOR TERNÁRIO----------
    const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)



    resp.innerHTML = `${nome}: seu peso ideal é = ${peso.toFixed(3)} kg` //exibe resposta
    e.preventDefault()  //evita o envio
})

frm.addEventListener('reset', () => {        //limpa a resposta
    resp.innerHTML = ``
})