
document.getElementById('sortearBotao').addEventListener('click', function() {
    // Gerar um número aleatório entre 1 e 100
    var numeroSorteado = Math.floor(Math.random() * 30) + 0;

    // Exibir o número sorteado no elemento com id "resultado"
    document.getElementById('resultado').textContent = 'Número Sorteado: ' + numeroSorteado;
});
