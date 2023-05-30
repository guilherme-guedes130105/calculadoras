function calcularPesoIdeal() {
    var altura = parseFloat(document.getElementById("altura").value);
    var sexo = document.getElementById("sexo").value;

    var pesoIdeal;

    if (sexo === "homem") {
      pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === "mulher") {
      pesoIdeal = (62.1 * altura) - 44.7;
    }

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "Seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg";
  }