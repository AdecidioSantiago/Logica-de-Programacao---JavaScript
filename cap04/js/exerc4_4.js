const frm = document.querySelector('form')        //obtém os dados do form
const resp1 = document.querySelector('#outResp1') //seleciona as tags de resposta
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', (e) => {    //"ouvinte" de eventos, acionado no botão submit
    e.preventDefault()

    const ladoA = Number(frm.inLadoA.value)  //obtém os dados de entrada
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB){ //condicional caso não seja triângulo
        resp1.innerHTML = `Essas medidas não correspondem a um TRIÂNGULO`
        return
    }
    let tipoTriangulo    //declara a variável
    if (ladoA == ladoB && ladoA == ladoC){     //condicional para saber o tipo de triângulo
        tipoTriangulo = 'Equilátero'
    }else if (ladoA == ladoB && ladoA != ladoC || ladoB == ladoC && ladoB != ladoA ||
        ladoA == ladoC && ladoA != ladoB){
        tipoTriangulo = 'Isósceles'
    }else{
        tipoTriangulo = 'Escaleno'
    }
    resp1.innerHTML = `Lados podem formar um triângulo`   //exibe resposta
    resp2.innerHTML = `Tipo: ${tipoTriangulo}`
})