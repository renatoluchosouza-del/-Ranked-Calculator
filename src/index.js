function calculoRank(vitorias, derrotas) {
    
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // estrutura de decisão 
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // retorno do resultado 
    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// função com repetição 
let jogadores = [
    { nome: "André", vitorias: 15, derrotas: 5 },
    { nome: "Marcelo", vitorias: 40, derrotas: 2 },
    { nome: "Beatriz", vitorias: 115, derrotas: 114 },
    { nome: "Ronaldo", vitorias: 4, derrotas: 80 }
];

// laço de repetição 
for (let i = 0; i < jogadores.length; i++) {
    let jogador = jogadores[i];
    let resultado = calculoRank(jogador.vitorias, jogador.derrotas);
    console.log(`Jogador: ${jogador.nome} → ${resultado}`);
}