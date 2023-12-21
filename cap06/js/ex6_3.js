const frm = document.querySelector('form')   //obtém elementos da página
const resp = document.querySelector('pre')
const carros = []

frm.addEventListener('submit', (e) => {  //"escuta" de evento submit do form
    e.preventDefault()    //evita o envio

    const modelo = frm.inModelo.value       //obtém dados do form
    const preco = Number(frm.inPreco.value)

    carros.push({modelo, preco})        //adiciona dados ao vetor de objetos
    frm.inModelo.value = ''             //limpa campos
    frm.inPreco.value = ''
    inModelo.focus()                    //posiciona o cursor em inModelo
    //dispara em evento de click em btListar (equilave a um click no botão na página)
    frm.btListar.dispatchEvent(new Event('click'))
})

frm.btListar.addEventListener('click', () => {
    if (carros.length == 0) {
        alert('Não há carros na lista')
        return
    }
    //método reduce() concatena uma string, obtendo modelo e preço de cada veículo
    const lista = carros.reduce((acumulador, carro) => 
        acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + '\n', ' ')
    resp.innerText = `Lista dos Carros Cadastrados\n${'-'.repeat(40)}\n${lista}`
})