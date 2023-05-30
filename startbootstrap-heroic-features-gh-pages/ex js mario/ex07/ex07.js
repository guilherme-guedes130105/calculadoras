var valores = [];

    function adicionarValor() {
      var valor = parseFloat(document.getElementById("valor").value);
      valores.push(valor);
      document.getElementById("valor").value = "";
    }

    function mostrarValores() {
      var resultadoElement = document.getElementById("resultado");
      resultadoElement.innerHTML = "Valores inseridos: " + valores.join(", ");
    }

    function mostrarMaiorValor() {
      var maiorValor = Math.max.apply(null, valores);
      var resultadoElement = document.getElementById("resultado");
      resultadoElement.innerHTML = "Maior valor: " + maiorValor;
    }

    function mostrarMenorValor() {
      var menorValor = Math.min.apply(null, valores);
      var resultadoElement = document.getElementById("resultado");
      resultadoElement.innerHTML = "Menor valor: " + menorValor;
    }