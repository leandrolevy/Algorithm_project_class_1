function acaoBotao() {
    var valor1, valor2, resultado, operacao
valor1 = prompt("Digite um valor: ")
operacao = prompt("Digite uma operação básica: ")
valor2 = prompt("Digite um segundo valor: ")

if( operacao == "+" ){
    resultado = parseInt( valor1 ) + parseInt( valor2 )
}else if( operacao == "-" ){
    resultado = parseInt( valor1 ) - parseInt( valor2 )
}else if( operacao == "*" ){
    resultado = parseInt( valor1 ) * parseInt( valor2 )
}else if( operacao == "/" ){
    resultado = parseInt( valor1 ) / parseInt( valor2 )
}
document.getElementById("paragrafo").innerText = resultado
}