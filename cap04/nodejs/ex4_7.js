const prompt = require("prompt-sync")()           //adiciona o pacote prompt-sync
const pessoas = Number(prompt("Nº de pessoas: ")) //lê os dados
const peixes = Number(prompt("Nº de peixes: "))
let pagar                      //declara a variável pagar
if (pessoas >= peixes){        //condicional sem taxa extra
    pagar = pessoas *20
}else{                         //condicional com taxa extra
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}
console.log(`Total a pagar: R$ ${pagar.toFixed(2)}`) //exibe o valor total a pagar