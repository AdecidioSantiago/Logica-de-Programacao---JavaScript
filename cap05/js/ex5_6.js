const frm = document.querySelector('form')    //obtém elementos da página
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {      //"escuta" evento submit do form
    e.preventDefault()        //evita o envio

    const num = frm.inNumero.value           //obtém número informado

    let temDivisores = 0      //declara e inicializa a variável do tipo flag

    for (let i = 2; i <= num / 2; i++){      //percorre os possíveis divisores do num
        if (num % i == 0){      //se tem um divisor
             temDivisores = 1   //muda o flag
             break              //sai da repetição
        }
    }
    if (num > 1 && !temDivisores){           //se num > 1 e não possui divisor
        resp.innerText = `${num} É primo`
    }else{
        resp.innerText = `${num} Não é primo`
    }
})