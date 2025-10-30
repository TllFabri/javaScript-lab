//Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

let saldo = 1000;         
let deposito = 500;       
let saque = 300;          

let operacao = saldo + deposito - saque;

console.log("Saldo inicial: R$" + saldo);
console.log("Depósito: R$" + deposito);
console.log("Saque: R$" + saque);
console.log("Saldo final após operações: R$" + operacao);
