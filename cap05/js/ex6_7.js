const frm = document.querySelector('form')  //obtém elementos da página
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {    //"escutaa" evento submit do form
    e.preventDefault()    //evita o envio

    const num = Number(frm.inNumero.value) //obtém o número informado      
    let estrelas = ''       //variável que irá concatenar as estrelas/traços

    for (i = 1; i <= num; i++){   //cria laço de repetição de 1 até num
        if (i % 2 == 1){
            estrelas += '*'       //na posição ímpar do i: *
        }else{
            estrelas += '-'       //na posição par: -
        }
    }
    resp.innerText = `${estrelas}` //exibe as estrelas
})