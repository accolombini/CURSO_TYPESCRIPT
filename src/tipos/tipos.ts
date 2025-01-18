// string -> o interessante é que o TypeScript consegue inferir o tipo da variável, então não é necessário declarar o tipo explicitamente. Uma maneira de contornar isso, e é preciso ter cautela é usar o tipo any, que é um tipo que aceita qualquer valor. Veja o exemplo:
// Importante o typescript não faz distinção entre valores reais valores inteiros.
// Fique atento com boolean, pois um valor tipo 1 não significa true, e sim um valor numérico, logo um erro para uma variável booleana.

// let nome: any = 'João';

let nome = 'João';
console.log(nome); // Continua exibindo no console
document.body.innerHTML += `<p>Nome: ${nome}</p>`; // Adiciona ao corpo da página

// Numéricos
let idade: number = 27;
console.log(idade); // Continua exibindo no console
document.body.innerHTML += `<p>Idade: ${idade}</p>`; // Adiciona ao corpo da página

// Atribuindo um ral
idade = 27.5;
console.log(idade); // Continua exibindo no console
document.body.innerHTML += `<p>Idade: ${idade}</p>`; // Adiciona ao corpo da página

// Booleanos
let possuiHobbies = false;
// possuiHobbies = 1; // Erro
console.log(possuiHobbies); // Continua exibindo no console
document.body.innerHTML += `<p>Possui hobbies: ${possuiHobbies}</p>`; // Adiciona ao corpo da página 
