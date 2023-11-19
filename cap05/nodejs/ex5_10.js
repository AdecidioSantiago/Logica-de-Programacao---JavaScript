const prompt = require('prompt-sync')()
const valor = Number(prompt('Valor R$: '))         //lê valor do carnê
const num = Number(prompt('N° de Parcelas: '))     //e númer de parcelas

const valorParcelas = Math.floor(valor / num)      //calcula valor sem decimais
const valorFinal = valorParcelas + (valor % num)   //calcula parcela final
for (let i = 1; i < num; i++){                     //enquanto i < num
    console.log(`${i}ª parcela: ${valorParcelas.toFixed(2)}`)
}
console.log(`${num}ª parcela: ${(valorFinal).toFixed(2)}`)   //última parcela

