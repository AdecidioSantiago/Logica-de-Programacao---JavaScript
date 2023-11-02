const prompt = require("prompt-sync")()              //adiciona pacote de dados
const veiculo = prompt('Veículo: ')                  //lê dados de entrada
const preco = Number(prompt('Preço R$: '))
const entrada = preco * 0.5                          //calcula valor de entrada
const parcela = entrada / 12                         //calcula parcelas

console.log(`Promoção: ${veiculo}`)                  //exibe as respostas
console.log(`Entrada de R$ ${entrada.toFixed(2)}`)
console.log(`+12 vezes de: R$ ${parcela.toFixed(2)}`)
