const frm = document.querySelector('form')
const respErros = document.querySelector('#outErros')
const respChances = document.querySelector('#outChances')
const respDica = document.querySelector('#outDica')

const erros = []   //vetor escopo global com números já apostados
const numAleatorio = Math.floor(Math.random() * 100 + 1) //um número aleatório entre 1 e 100
const CHANCES = 6  //constante com o número máximo de chances

frm.addEventListener('submit', (e) => {   //"escuta" evento submit do form
    e.preventDefault()    //evita o envio do form
    const numero = Number(frm.inNumero.value)  //obtém o número inserido
    if (numero == numAleatorio){     //se acertou
        respDica.innerText = `Parabéns!! Número sorteado: ${numAleatorio}`
        frm.btSubmit.disabled = true  //troca os status dos botões
        frm.btNovo.className = 'exibe'
    }else{
        if(erros.includes(numero)){   //se número existe no vetor erros (já apostou)
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        }else{
            erros.push(numero)                     //adiciona número ao vetor
            const numErros = erros.length          //obtém tamanho do vetor
            const numChances = CHANCES - numErros  //calcula n° de chances
            //exibe n° de erros, conteúdo do vetor e n° de chances
            respErros.innerText = `${numErros} (${erros.join(', ')})`
            respChances.innerText = numChances
            if (numChances == 0){
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled = true
                frm.btNovo.className = 'exibe'
                respDica.innerText = `Game Over!! Número Sorteado: ${numAleatorio}`
            }else{
                //usa o operador ternário para mensagem da dica
                const dica = numero < numAleatorio ? "Maior" : "Menor"
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.inNumero.value = ''  //limpa campo de entrada
    frm.inNumero.focus()     //posiciona cursor neste campo
    
})
frm.btNovo.addEventListener('click', () => {
    location.reload()       //recarrega a página
})