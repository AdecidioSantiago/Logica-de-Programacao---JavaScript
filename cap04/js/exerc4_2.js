const frm = document.querySelector('form')   //obtém os dados da página
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {    //"ouvinte" de evento
    e.preventDefault()

    const permitida = Number(frm.inPermitida.value)  //obtém os dados de entrada do form
    const condutor = Number(frm.inCondutor.value)
    let situacao          //declara a variável
    const multa = permitida * 0.2   //calcula os 20%
    if (condutor <= permitida){     //condicional sem multa
        situacao = 'Sem Multa'
        resp.innerHTML = `Situação: ${situacao}`
        return                      
    }
    situacao = condutor <= (permitida + multa) ? 'Leve' : 'Grave' //calcula multa leve ou grave
    resp.innerHTML = `Situação: Multa ${situacao}`   //exibe resposta
})