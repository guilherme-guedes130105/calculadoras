function calcularCustoPiso() {
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var largura = parseFloat(document.getElementById("largura").value);

    var precoPorMetroQuadrado = 36.00;
    var area = comprimento * largura;
    var custoTotal = area * precoPorMetroQuadrado;

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "O custo total para assentar piso é: R$ " + custoTotal.toFixed(2);
}