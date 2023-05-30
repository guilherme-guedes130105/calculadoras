function calcularTotalVenda() {
    var nomeProduto1 = document.getElementById("nomeProduto1").value;
    var valorProduto1 = parseFloat(document.getElementById("valorProduto1").value);
    var quantidadeProduto1 = parseInt(document.getElementById("quantidadeProduto1").value);

    var nomeProduto2 = document.getElementById("nomeProduto2").value;
    var valorProduto2 = parseFloat(document.getElementById("valorProduto2").value);
    var quantidadeProduto2 = parseInt(document.getElementById("quantidadeProduto2").value);

    var nomeProduto3 = document.getElementById("nomeProduto3").value;
    var valorProduto3 = parseFloat(document.getElementById("valorProduto3").value);
    var quantidadeProduto3 = parseInt(document.getElementById("quantidadeProduto3").value);

    var totalVenda = (valorProduto1 * quantidadeProduto1) + (valorProduto2 * quantidadeProduto2) + (valorProduto3 * quantidadeProduto3);

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "O valor total da venda é: R$ " + totalVenda.toFixed(2);
  }