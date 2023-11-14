function calcularConversao() {
    // Obter os valores dos campos
    var valorEmDolar = parseFloat(document.getElementById('valorEmDolar').value);
    var cotacaoDoDolar = parseFloat(document.getElementById('cotacaoDoDolar').value);

    // Calcular o valor em real
    var valorEmReal = valorEmDolar * cotacaoDoDolar;

    // Formatar o resultado para duas casas decimais
    valorEmReal = valorEmReal.toFixed(2);

    // Exibir o resultado na página
    document.getElementById('resultado').innerHTML = `<h2 class="text-white">O valor em reais é: R$ ${valorEmReal}</h2>`;
}