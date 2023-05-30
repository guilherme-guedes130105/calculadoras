function exibirNumerosPares() {
    var limite = parseInt(document.getElementById("limite").value);
    var soma = 0;
    var numerosPares = [];

    for (var i = 1; i <= limite; i++) {
      if (i % 2 === 0) {
        numerosPares.push(i);
        soma += i;
      }
    }

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "Números pares: " + numerosPares.join(", ");
    resultadoElement.innerHTML += "<br> Soma total: " + soma;
  }