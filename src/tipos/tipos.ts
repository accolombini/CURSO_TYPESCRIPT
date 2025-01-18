// string -> o interessante é que o TypeScript consegue inferir o tipo da variável, então não é necessário declarar o tipo explicitamente. Uma maneira de contornar isso, e é preciso ter cautela é usar o tipo any, que é um tipo que aceita qualquer valor. Veja o exemplo:
// Importante o typescript não faz distinção entre valores reais valores inteiros.
// Fique atento com boolean, pois um valor tipo 1 não significa true, e sim um valor numérico, logo um erro para uma variável booleana.
// Algo legal => caso não defina o tipo na declaração ou atribua um valor para que o tipo seja inferido, o typescript aceitara valores de tipos diferentes, mas não permitirá que a variável seja reatribuída com um valor de outro tipo.

// let nome: any = 'João';

let nome: string = 'João';
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
let possuiHobbies: boolean = false;
// possuiHobbies = 1; // Erro
console.log(possuiHobbies); // Continua exibindo no console
document.body.innerHTML += `<p>Possui hobbies: ${possuiHobbies}</p>`; // Adiciona ao corpo da página 

// Tipos explícitos
let minhaIdade: any;
minhaIdade = 27;  // Atribuido após inicializar sem um tipo definido
console.log(typeof minhaIdade); // Continua exibindo no console
document.body.innerHTML += `<p>Minha idade: ${minhaIdade} (Tipo: ${typeof minhaIdade})</p>`; // Adiciona ao corpo da página
minhaIdade = 'idade é 27'; // Atribuido após inicializar sem um tipo definido
console.log(typeof minhaIdade); // Continua exibindo no console
document.body.innerHTML += `<p>Minha idade: ${minhaIdade} (Tipo: ${typeof minhaIdade})</p>`; // Adiciona ao corpo da página
minhaIdade = 45;
console.log(typeof minhaIdade); // Continua exibindo no console
document.body.innerHTML += `<p>Minha idade: ${minhaIdade} (Tipo: ${typeof minhaIdade})</p>`; // Adiciona ao corpo da página

// Trabalhando com arrays

let hobbies: any[] = ['Cozinhar', 'Praticar esportes'];
console.log(hobbies[0]); // Continua exibindo no console
document.body.innerHTML += `<p>Hobbies: ${hobbies[0]} (Tipo: ${typeof hobbies})</p>`; // Adiciona ao corpo da página
hobbies = [100, 200, 300];
console.log(hobbies[1]); // Continua exibindo no console
document.body.innerHTML += `<p>Hobbies: ${hobbies[1]} (Tipo: ${typeof hobbies})</p>`; // Adiciona ao corpo da página
console.log(hobbies); // Continua exibindo no console
document.body.innerHTML += `<p>Hobbies: ${hobbies} (Tipo: ${typeof hobbies})</p>`; // Adiciona ao corpo da página

// As tuplas são arrays com tipos e quantidades de elementos definidos

let endereco = ['Av Principal', 99, ''];
console.log(endereco); // Continua exibindo no console
document.body.innerHTML += `<p>Endereço: ${endereco} (Tipo: ${typeof endereco})</p>`; // Adiciona ao corpo da página

// Definindo um tipo para uma tupla

let endereco2: [string, number, string] = ['Av Principal', 99, 'Bloco A'];
console.log(endereco2); // Continua exibindo no console
document.body.innerHTML += `<p>Endereço: ${endereco2} (Tipo: ${typeof endereco2})</p>`; // Adiciona ao corpo da página

// Enums são estruturas que definem valores pré-definidos

enum Cor {
    CINZA, // 0
    VERDE = 100, // 100
    AZUL = 2, // 2
    LARANJA, // 3
    AMARELO, // 4
    VERMELHO = 100 // 100 -> Note que não temos problemas se a lógica exigir que tenhamos valores reptidos
}

// A seguir o uso de enum em um exemplo, aqui a variável minhar cor é do tipo Cor, e o valor atribuído é Cor.LARANJA, que é um dos valores definidos no enum Cor.
let minhaCor: Cor = Cor.VERDE;  // Atribuido após inicializar sem um tipo definido
console.log(minhaCor); // Continua exibindo no console
document.body.innerHTML += `<p>Cor: ${minhaCor} (Tipo: ${typeof minhaCor})</p>`; // Adiciona ao corpo da página
minhaCor = Cor.AZUL;
console.log(minhaCor); // Continua exibindo no console
document.body.innerHTML += `<p>Cor: ${minhaCor} (Tipo: ${typeof minhaCor})</p>`; // Adiciona ao corpo da página

minhaCor = Cor.VERMELHO;
console.log(minhaCor); // Continua exibindo no console
document.body.innerHTML += `<p>Cor: ${minhaCor} (Tipo: ${typeof minhaCor})</p>`; // Adiciona ao corpo da página

console.log(Cor.CINZA, Cor.VERDE, Cor.AZUL, Cor.LARANJA, Cor.AMARELO, Cor.VERMELHO); // Continua exibindo no console
document.body.innerHTML += `<p>Cor: ${Cor.CINZA}, ${Cor.VERDE}, ${Cor.AZUL}, ${Cor.LARANJA}, ${Cor.AMARELO}, ${Cor.VERMELHO} (Tipo: ${typeof Cor})</p>`; // Adiciona ao corpo da página

// O tipo any aceita qualquer valor, inclusive undefined e null é a forma mais próxima do javaScript

let carro: any = 'BMW';
console.log(carro); // Continua exibindo no console
document.body.innerHTML += `<p>Carro: ${carro} (Tipo: ${typeof carro})</p>`; // Adiciona ao corpo da página
carro = 3;
console.log(carro); // Continua exibindo no console
document.body.innerHTML += `<p>Carro: ${carro} (Tipo: ${typeof carro})</p>`; // Adiciona ao corpo da página
carro = {
    marca: 'BMW',
    ano: 2025
};
console.log(carro); // Continua exibindo no console
document.body.innerHTML += `<p>Carro: ${JSON.stringify(carro)} (Tipo: ${typeof carro})</p>`; // Adiciona ao corpo da página
