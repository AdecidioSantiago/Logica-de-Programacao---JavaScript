const prompt = require('prompt-sync')()                          //adiciona o pacote ao programa
const peso = Number(prompt('Qual o peso da ração? (kg): '))      //lê dados de entrada
const consumo = Number(prompt('Qual o consumo diário? (gr): '))
const pesoGr = peso * 1000                                       //converte kg em gr
const duracao = Math.floor(pesoGr / consumo)                     //cálculo das respostas
const sobra = pesoGr % consumo                             

console.log(`Peso da Ração (kg): ${peso}`)                       //dados de saída
console.log(`Consumo Diário (gr): ${consumo}`)
console.log(`Duração: ${duracao} dias.`)
console.log(`Sobra: ${sobra}gr`)