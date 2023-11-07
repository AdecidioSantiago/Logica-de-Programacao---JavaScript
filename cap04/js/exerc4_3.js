const frm = document.querySelector('form')        //obtém os elementos do form
const resp1 = document.querySelector('#outResp1') //seleciona as tags de respostas
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', (e) => {       //"ouvinte" de eventos, acionado com o botão submit
    e.preventDefault()   //evita o envio

    const valor = Number(frm.inValor.value)  //obtém o valor de entrada
    let tempo        //declara as variáveis
    let troco
    if (valor >= 1 && valor < 1.75){        //condicional para calcular o tempo
        tempo = 30
    }else if (valor >= 1.75 && valor < 3){
        tempo = 60
    }else if (valor >= 3){
        tempo = 120
    }else{
        resp1.innerHTML = `Valor Insuficiente`
        return
    }
    if (tempo == 30 && valor > 1){         //condicional para calcular o troco, se houver
        troco = valor - 1
    }else if (tempo == 60 && valor > 1.75){
        troco = valor - 1.75
    }else if (tempo == 120 && valor > 3){
        troco = valor - 3
    }
    resp1.innerHTML = `Tempo: ${tempo} min`  //exibe respostas
    resp2.innerHTML = `Troco R$: ${troco.toFixed(2)}`
})