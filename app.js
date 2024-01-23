let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}
function mensagemInicial(){
exibirTextoNaTela('h1','Jogo do número secreto!' );
exibirTextoNaTela('p', 'Descubra um numero de 1 a 10');
}
mensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input'). value;
   //console.log(numeroSecreto == chute);
   if (chute == numeroSecreto){ //verificando se o chute é igual ao numero secreto
   exibirTextoNaTela('h1', 'Acertou'); //titulo principal da imagem
   let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa'; // trocando a palavra do singular ao plural caso o numero de tentativas seja maior que 1
   let mensagemTentativa = `Você descobriu o numero Secreto com ${tentativas} ${palavraTentativa}!`; //variavel criada para colocar no semi titulo
   exibirTextoNaTela('p', mensagemTentativa); //variavel no lugar do semi titulo
   document.getElementById('reiniciar').removeAttribute('disabled');
   } else { //se não acertar o chute 
    if (chute > numeroSecreto){ // se o chute for maior que o numero secreto
        exibirTextoNaTela('p', 'O Número secreto é menor');   
    } else {
        exibirTextoNaTela('p', 'O Número secreto é maior');
    }
    tentativas++;     // acrescentando +1 na tentativas
    limparCampo();
   }   
}

function numeroAleatorio(){ 
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return numeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';   
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
