function calcularGastoCombustivel() {
    var quilometragem = parseFloat(document.getElementById("quilometragem").value);
    var valorCombustivel = parseFloat(document.getElementById("valorCombustivel").value);

    var consumo = 8; // km por litro
    var litrosConsumidos = quilometragem / consumo;
    var gastoTotal = litrosConsumidos * valorCombustivel;

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "O gasto total com combustível é: R$ " + gastoTotal.toFixed(2);
}