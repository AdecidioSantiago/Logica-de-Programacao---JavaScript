//cria referências ao formulário e as tags de respostas
const frm = document.querySelector('form')
const resp1 = document.querySelector('h2')
const resp2 = document.querySelector('h3')
//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)   //obtém valores do form
    const nota2 = Number(frm.inNota2.value)

    const media = (nota1 + nota2) / 2         //calcula a média

    resp1.innerText = `Média das Notas ${media.toFixed(1)}`

    //cria as condições
    if (media >= 7){
        //altera o texto e estilo da cor do elemento resp2
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a).`
        resp2.style.color = 'green'
    }else if (media >= 4){
        resp2.innerText = `Atenção ${nome}. Você está de recuperação.`
        resp2.style.color = 'blue'
    }else {
        resp2.innerText = `Ops ${nome}... Você foi reprovado.`
        resp2.style.color = 'red'
    }

    e.preventDefault() //evita o envio
})