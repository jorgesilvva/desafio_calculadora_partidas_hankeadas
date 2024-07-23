function calcularNivel(vitorias, derrotas) {
  // Calcula o saldo de vitórias
  const saldoVitorias = vitorias - derrotas;
  let nivel = '';

  // Determina o nível do jogador com base nas vitórias
  if (vitorias < 10) {
    nivel = 'Ferro';
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = 'Bronze';
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = 'Prata';
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = 'Ouro';
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = 'Diamante';
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = 'Lendário';
  } else if (vitorias >= 101) {
    nivel = 'Imortal';
  }

  // Retorna o saldo de vitórias e o nível
  return { saldoVitorias, nivel };
}

// Função principal para entrada de dados e chamada da função calcularNivel
function main() {
  const jogadores = [
    { vitorias: 45, derrotas: 20 },
    { vitorias: 85, derrotas: 15 },
    { vitorias: 120, derrotas: 5 },
    { vitorias: 7, derrotas: 3 },
    // Adicione mais jogadores conforme necessário
  ];

  for (let i = 0; i < jogadores.length; i++) {
    const { vitorias, derrotas } = jogadores[i];
    const resultado = calcularNivel(vitorias, derrotas);
    console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);
  }
}

// Chama a função principal para executar o programa
main();
