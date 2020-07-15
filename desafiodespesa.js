
// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];


// utilizar a função somaNumeros
function calculaSaldo(receitas, despesas) {

    let somaReceitas = somaNumeros(receitas)
    let somaDespesas = somaNumeros(despesas)
// retornar o saldo do usuario
    return somaReceitas - somaDespesas

}

// calcular a soma de receitas e despesas
function somaNumeros(numeros) {
// Soma todos números dentro do array "numeros
    let soma = 0
// recebe como parâmetro um array de números
    for (let numero of numeros) {
        soma = soma + numero
    }
// retorna a soma deles
    return soma
      
}

//Percorra o array de usuários 
for (let usuario of usuarios) {
//chame uma função chamada calculaSaldo 
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldo >= 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    }else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}









