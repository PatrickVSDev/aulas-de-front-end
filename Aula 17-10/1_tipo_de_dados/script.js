/* console.log('Hello World no arquivo script.js!!!')
var idade = 25;
var situacao = true;

console.log(typeof 'Hello World no arquivo script.js!!!');
console.log('-----------------------------------');
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof situacao);

// mais exemplos de typeof number

console.log('-----------------------------------');
console.log(typeof 10);
console.log(typeof 10.5);
console.log(typeof -10);
console.log(typeof (1+1));

// exemplos com special numbers
console.log('-----------------------------------');
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);

// exemplos com string 

console.log('-----------------------------------');
console.log('Texto com aspas simples');
console.log("Texto com aspas duplas");
console.log(`Texto com crase`);
console.log(`O aluno ${nome} possui ${idade} anos`);
console.log(`O aluno ` + nome + ` possui ` + idade + `anos`);
*/

//exemplo com operador ternário 

var idade = 25;

if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

console.log('-----------------------------------');
console.log(idade >= 18 ? 'Maior de idade' : 'Menor de idade'); // operador ternário

// exemplo com empty values
console.log('-----------------------------------');
var teste;
var teste2 = null;
console.log(teste);
console.log(teste2);
// console.log(teste3); // retorna um erro no console

console.log('Conversão 1: ' , 5 * teste2); // vai converter o null para 0
console.log('Conversão 2: ' , '5' - 3); // vai converter o '5' em string para um número
console.log('Conversão 3: ' , 'dois' * 'três'); // vai retornar um NaN (Not a Number)
