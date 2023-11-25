const frm = document.querySelector('form')        //obtém dados dos elementos da página
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', (e) => {  //"escuta" de ventos, acionado no botão submit
    e.preventDefault()  //evita o envio

    const numero = Number(frm.inNumero.value)  //obtém o dados do form
    let divisores = ''   //declára a variável dos divisores
    let soma = 0         //declára a variável da soma dos divisores
    for (let i = 1; i <= numero / 2; i++){   //loop do 1º divisores até o último divisor inteiro
        if (numero % i === 0){
            divisores += i 
            soma += i
            
            if (i < numero / 2){   //condicional para evitar a última vírgula
                divisores += ', '
            }
        }
    }
    if (soma == numero){     //condicional para exibir resposta
        resp1.innerHTML = `Divisores do ${numero}: ${divisores} (Soma: ${soma})`
        resp2.innerHTML = `${numero} É um Número Perfeito`
    }else {
        resp1.innerHTML = `Divisores do ${numero}: ${divisores} (Soma: ${soma})`
        resp2.innerHTML = `${numero} Não é um Número Perfeito`
    }
})