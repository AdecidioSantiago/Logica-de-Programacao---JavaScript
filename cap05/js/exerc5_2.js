const frm = document.querySelector('form')  //obtém os dados da página
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) => { //"escuta" eventos, acionado com o botão submit
    e.preventDefault()

    const quantidade = frm.inChin.value  //obtém dados do form
    const anos = frm.inAnos.value
    
    if (quantidade < 2){   //condicional caso o número seja menor que 2
        alert('Favor inserir um número maior ou igual a 2')
        return
    }
    let mult = quantidade   //declarada variável mult, que será iniciada de acordo com número inserido

    let resposta = ''  //declarada Stringer que exibirá resposta
    
    for (let i = 1; i <= anos; i++){  //laço para triplicar o mult a cada ano
        resposta += `${i}º Ano: ${mult} Chinchilas \n`

        mult *= 3
        
    }
    resp.innerHTML= resposta   //exibe resultado
})