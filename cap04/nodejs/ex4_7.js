const prompt = require("prompt-sync")()
const pessoas = Number(prompt("Nº de pessoas: "))
const peixes = Number(prompt("Nº de peixes: "))
let pagar
if (peixes > pessoas){
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}else {
    pagar = pessoas * 20
}
console.log(`Total a pagar R$: ${pagar.toFixed(2)}`)
