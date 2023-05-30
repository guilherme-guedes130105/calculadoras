function converterTemperatura() {
    var temperatura = parseFloat(document.getElementById("temperatura").value);
    var opcao = document.getElementById("opcao").value;
    var resultadoElement = document.getElementById("resultado");

    var temperaturaConvertida;

    if (opcao === "celsius") {
        temperaturaConvertida = temperatura * 1.8 + 32;
        resultadoElement.innerHTML = temperatura + " °C = " + temperaturaConvertida + " °F";
    } else if (opcao === "fahrenheit") {
        temperaturaConvertida = (temperatura - 32) / 1.8;
        resultadoElement.innerHTML = temperatura + " °F = " + temperaturaConvertida + " °C";
    }
}