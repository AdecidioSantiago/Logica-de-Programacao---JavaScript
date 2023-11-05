const prompt = require('prompt-sync')()   //adiciona pacote prompt-sync
const numero = Number(prompt('Informe uma centena: '))  //lê o número
if (numero < 100 || numero >= 1000){       //condicional caso não seja centena
    console.log("Erro... deve ser uma centena")
    return
}
const num1 = Math.floor(numero / 100)          //obtém o 1º número
const num2 = Math.floor((numero % 100) / 10)   //obtém o 2º número
const num3 = numero % 10                       //obtém o 3º número
console.log(`Número Invertido: ${num3}${num2}${num1}`)   //exibe o número invertido
