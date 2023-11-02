//cria referência ao form e elemento de resposta h3
const frm = document.querySelector('form')
const resp = document.querySelector('h3')
//cria um "ouvinte" de evento, acionado quando botão submit for clicado
frm.addEventListener('submit', (e) => {
    e.preventDefault()    //evita o envio
    const horaBrasil = Number(frm.inHoraBrasil.value) //obtém o dados informados

    let horaFranca = horaBrasil + 5  //acréscenta as 5 horas da França
    if (horaFranca > 24){            //caso ultrapasse 24 horas é subtraída 24 horas
        horaFranca = horaFranca - 24
    }
    resp.innerHTML = `Hora  na França: ${horaFranca.toFixed(2)}` //exibe a resposta
})