function acaoBotao() {
    var valor1, valor2, resultado, operacao
valor1 = prompt("Digite um valor: ")
operacao = prompt("Digite o sinal de uma operação básica: ")
valor2 = prompt("Digite um segundo valor: ")

switch (operacao) {
    case "+":
        resultado = parseInt( valor1 ) + parseInt( valor2 )
        break;
    case "-":
        resultado = parseInt( valor1 ) - parseInt( valor2 )
        break;
    case "*":
        resultado = parseInt( valor1 ) * parseInt( valor2 )
        break;
    case "/":
        resultado = parseInt( valor1 ) / parseInt( valor2 )
        break;
}
        document.getElementById("paragrafo").innerText = resultado
}