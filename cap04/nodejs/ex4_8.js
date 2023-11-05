const prompt = require('prompt-sync')()     //adiciona pacote prompt-sync
const compra = Number(prompt('Qual o valor da compra? '))  //lê valor da compra
aux = Math.floor(compra / 20)   //aux = nº de parcelas sem condições
const parcelas = aux < 1 ? 1 : aux > 6 ? 6 : aux   //operador ternário
const valorParcela = compra / parcelas    //cálculo do valor da parcela
console.log(`Valor da compra R$: ${compra.toFixed(2)}`)
console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`)   //exibe resposta