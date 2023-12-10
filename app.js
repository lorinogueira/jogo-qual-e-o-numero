let listaNumeroSecreto = [];
let limiteNumeroAleatorio = 30;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;
preencherTelaInicial ();

function gerarNumeroAleatorio() {
    numeroSorteado = parseInt(Math.random()*limiteNumeroAleatorio+1);
    if (listaNumeroSecreto.length == limiteNumeroAleatorio) {
        listaNumeroSecreto = [];
    }    
    if (listaNumeroSecreto.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSecreto.push(numeroSorteado);
        return numeroSorteado;
    }
}

function preencherCamposDeTexto (tag, texto) {
    document.querySelector(tag).innerHTML = texto;
}

function preencherTelaInicial () {
preencherCamposDeTexto ('h1', 'Descubra o Número Secreto');
preencherCamposDeTexto ('p', `Digite um número de 1 a ${limiteNumeroAleatorio}.`);
}

function verificarChute() {
    tentativas++;
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        preencherCamposDeTexto ('h1', 'Acertou!! :D');
        preencherCamposDeTexto ('p', `Você descobriu o número secreto com ${tentativas} tentativas!`);
        document.getElementById('chutar').setAttribute('disabled', true);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
            preencherCamposDeTexto ('h1', 'Tente novamente.');
            preencherCamposDeTexto ('p', `O número secreto é ${chute > numeroSecreto? 'menor' : 'maior'}.`);
            limparCampo();
        }
        console.log(tentativas + 'ª tentativa: ' + chute);
        console.log(listaNumeroSecreto)
    }

function limparCampo () {
    document.querySelector('input').value = '';
    // O jeito explicado na aula:
    //      chute = document.querySelector('input');
    //      chute.value = '';
}

function reiniciarJogo () {
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chutar').removeAttribute('disabled');
    limparCampo();
    preencherTelaInicial ()
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
}
