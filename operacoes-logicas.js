var nome, nota1, nota2, passou;

passou = false

nome = prompt("Digite o nome do Aluno: ")
nota1 = prompt("Digite a nota1 do Aluno: ")
nota2 = prompt("Digite a nota2 do Aluno: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if(media >= 5)
    passou = true;

if(passou)
    alert('Aluno: ' + nome + ', aprovado!')