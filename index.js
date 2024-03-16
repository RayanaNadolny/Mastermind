import promptSync from 'prompt-sync';
const prompt = promptSync();

function numeroAleatorio() {
    const numero = Math.floor(Math.random() * 10);
    return numero;
}

function sequenciaAleatoria() {
    const sequenciaComputador = [];

    while (sequenciaComputador.length < 4) {
        let numero = numeroAleatorio();
        if (!sequenciaComputador.includes(numero)) {
            sequenciaComputador.push(numero);
        }
    }
    return sequenciaComputador;
}

const sequenciaComputador = sequenciaAleatoria();

function tentativaDeSequencia() {
    let tentativa = prompt('Tentativa: ');
    let sequenciaDoJogador = Array.from(tentativa);
    sequenciaDoJogador = sequenciaDoJogador.map(function (numero) {
        return parseInt(numero);
    })
    return sequenciaDoJogador;
}

for (let i = 1; i <= 10; i++) {
    let tentativaJogador = tentativaDeSequencia();
    let lugarCorreto = 0;
    let posicoesErradas = 0;

    tentativaJogador.forEach(function (numero, index) {
        let numeroCerto = numero == sequenciaComputador[index];

        if (numeroCerto) {
            lugarCorreto++;
        }

        if (sequenciaComputador.includes(numero)) {
            if (!numeroCerto) {
                posicoesErradas++;
            }
        }
    })
    console.log(lugarCorreto, 'número(s) certo(s) na posição certa.');
    console.log(posicoesErradas, 'número(s) certo(s) na posição errada.');

    if (lugarCorreto == 4) {
        console.log('Parabéns! Você acertou!');
        break;
    }

    if (i == 10 && lugarCorreto != 4) { console.log('Não foi dessa vez... A sequência era:', sequenciaComputador); }
}
