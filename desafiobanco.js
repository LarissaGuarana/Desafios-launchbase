const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };

// criar um função
function createTransaction(transaction) {
//adicionar uma nova transação no array de transações de um usuário
    user.transactions.push(transaction)

    if (transaction.type === `credit`) {
        // tipo crédito soma
        user.balance = user.balance + transaction.value
    }else {
        // tipo debito subtrai
        user.balance = user.balance - transaction.value
    }
  }

// criar uma função, recebe como parâmetro o TIPO de transação
function getHigherTransactionByType(type) {
    let higherTransaction 
    let higherValue = 0

    //percorre as transações do usuário
    for (let transaction of user.transactions) {
    // objeto da transação de maior valor com aquele tipo
        if (transaction.type == type && transaction.value > higherValue) {
            transactionValue = higherValue
            higherTransaction = transaction
        }
    }

    //retorna o objeto da transação de maior valor com aquele tipo:
    return higherTransaction
}

//criar uma função,
function getAverageTransactionValue () {
    let sum = 0

    for (let transaction of user.transactions) {
        sum = sum + transaction.value
    }

    //retorna o valor médio das transações
    return sum / user.transactions.length
}

//criar uma função,
function getTransactionsCount () {
    let count = {
        credit: 0,
        debit: 0,
    }

    for (let transaction of user.transactions) {
        if (transaction.type === `credit`) {
            count.credit++
        }else {
            count.debit++
        }
    }

    //que retorna o número de transações de cada tipo
    return count
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); 

console.log(getHigherTransactionByType("credit"));
console.log(getHigherTransactionByType("debit")); 

console.log(getAverageTransactionValue());

console.log(getTransactionsCount()); 

    