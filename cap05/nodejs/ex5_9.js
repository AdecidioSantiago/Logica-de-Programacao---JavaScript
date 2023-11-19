const prompt = require('prompt-sync')()  
const produto = prompt('Produto: ')        //lê nome do produto
const etiqueta = Number(prompt('Nº de Etiquetas: '))  //quantidade de etiquetas
//cria um laço de repetição até etiquetas/2 (pois imprime 2 etiquetaas por linha)
for (let i = 1; i <= etiqueta / 2; i++){
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
if (etiqueta % 2 == 1){        //se quantidade solicitada de etiquetas for ímpar...
    console.log(`${produto}`)  //imprime mais uma etiqueta
}