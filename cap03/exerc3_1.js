const prompt = require('prompt-sync')()                   //adiciona pacote ao programa
const salario = Number(prompt('Qual o salário?: '))       //lê dados de entrada
const tempo = Number(prompt('Quanto tempo de serviço?: '))
const quadrienio = Math.floor(tempo / 4)                  //calcula quadriênios
const aumento = (salario * 0.01) * quadrienio             //acréscimo a cada 4 anos

console.log(`Salário R$: ${salario.toFixed(2)}`)          //exibe as respostas
console.log(`Tempo (anos): ${tempo}`)
console.log(`Quadriênios: ${quadrienio}`)
console.log(`Salário final R$: ${(salario+aumento).toFixed(2)}`)