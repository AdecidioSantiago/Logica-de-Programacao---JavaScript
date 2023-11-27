const frm = document.querySelector('form')                //obtém os dados da página
const respErros = document.querySelector('#outErros')
const respChances = document.querySelector('#outChances')
const respDica = document.querySelector('#outDica')

//Array de palavras
const palavras = ['javascript', 'programação', 'desenvolvimento', 'web', 'html', 'css', 'nodejs']
const sorteioIndice = Math.floor(Math.random() * palavras.length)  //sortea um índice do vetor
const palavraSorteada = palavras[sorteioIndice] //seleciona a string do vetor de acordo o índice sorteado

const CHANCES = 5
const erros = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const palavra = String(frm.inPalavra.value).toLowerCase() //obtém a palavra inserida
    
    if (palavra == palavraSorteada){  //se acertou
        respDica.innerText = `Parabéns!! Acertou a palavra: ${palavra.toUpperCase()}`
        desabilitarBotoes()
    }else{
        if(erros.includes(palavra)){  //se a strig já exitir no vetor
            alert(`Você já usou a palavra ${palavra.toUpperCase()}. Tente outra...`)
        }else {
            erros.push(palavra)   //adiciona ao vetor de erros
            const numChanches = CHANCES - erros.length  //calcula o número de chanches restantes
            
            //Dica da palavra sorteada
            let primeiraLetra = palavraSorteada[0].toUpperCase()  //seleciona a primeira letra da palavra sorteada
            let ultimaLetra = palavraSorteada[palavraSorteada.length - 1].toUpperCase()  //seleciona a última letra
            
            //exibe o n° de erros, conteúdo do vetor e n° de chanches
            respErros.innerText = `${erros.length} (${erros.join(', ').toUpperCase()})`
            respDica.innerText = `Errado. A palavra começa com ${primeiraLetra} e termina com ${ultimaLetra}`
            respChances.innerText = numChanches
            
            if (numChanches == 0){
                alert("Suas chances acabaram...")
                desabilitarBotoes()
                respDica.innerText = `Game Over!! Palavra sorteada: ${palavraSorteada.toUpperCase()}`
            }
        }
        frm.inPalavra.value = ''  //limpa o conteúdo do campo de formulário
        frm.inPalavra.focus()     //posiciona o cursor nesse campo
     
    }
})
frm.btNovo.addEventListener('click', () => {
    location.reload()
})
function desabilitarBotoes() {
    frm.btSubmit.disabled = true
    frm.btNovo.className = 'exibe'
}
