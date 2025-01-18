"use strict";
// string -> o interessante é que o TypeScript consegue inferir o tipo da variável, então não é necessário declarar o tipo explicitamente. Uma maneira de contornar isso, e é preciso ter cautela é usar o tipo any, que é um tipo que aceita qualquer valor. Veja o exemplo:
// Importante o typescript não faz distinção entre valores reais valores inteiros.
// Fique atento com boolean, pois um valor tipo 1 não significa true, e sim um valor numérico, logo um erro para uma variável booleana.
// Algo legal => caso não defina o tipo na declaração ou atribua um valor para que o tipo seja inferido, o typescript aceitara valores de tipos diferentes, mas não permitirá que a variável seja reatribuída com um valor de outro tipo.
// Por fim: note que estarei usando sempre duas formas de exibição de resultados, console.log e document.body -> nos testes estarei usando ou melhor visualizando o que for tratado como document.body.innerHTML.
// let nome: any = 'João';
let nome = 'João';
console.log(nome); // Continua exibindo no console
document.body.innerHTML += `<p>Nome: ${nome}</p>`; // Adiciona ao corpo da página
// Numéricos
let idade = 27;
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
// Tipos explícitos
let minhaIdade;
minhaIdade = 27; // Atribuido após inicializar sem um tipo definido
console.log(typeof minhaIdade); // Continua exibindo no console
document.body.innerHTML += `<p>Minha idade: ${minhaIdade} (Tipo: ${typeof minhaIdade})</p>`; // Adiciona ao corpo da página
minhaIdade = 'idade é 27'; // Atribuido após inicializar sem um tipo definido
console.log(typeof minhaIdade); // Continua exibindo no console
document.body.innerHTML += `<p>Minha idade: ${minhaIdade} (Tipo: ${typeof minhaIdade})</p>`; // Adiciona ao corpo da página
minhaIdade = 45;
console.log(typeof minhaIdade); // Continua exibindo no console
document.body.innerHTML += `<p>Minha idade: ${minhaIdade} (Tipo: ${typeof minhaIdade})</p>`; // Adiciona ao corpo da página
// Trabalhando com arrays
let hobbies = ['Cozinhar', 'Praticar esportes'];
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
let endereco2 = ['Av Principal', 99, 'Bloco A'];
console.log(endereco2); // Continua exibindo no console
document.body.innerHTML += `<p>Endereço: ${endereco2} (Tipo: ${typeof endereco2})</p>`; // Adiciona ao corpo da página
// Enums são estruturas que definem valores pré-definidos
var Cor;
(function (Cor) {
    Cor[Cor["CINZA"] = 0] = "CINZA";
    Cor[Cor["VERDE"] = 100] = "VERDE";
    Cor[Cor["AZUL"] = 2] = "AZUL";
    Cor[Cor["LARANJA"] = 3] = "LARANJA";
    Cor[Cor["AMARELO"] = 4] = "AMARELO";
    Cor[Cor["VERMELHO"] = 100] = "VERMELHO"; // 100 -> Note que não temos problemas se a lógica exigir que tenhamos valores reptidos
})(Cor || (Cor = {}));
// A seguir o uso de enum em um exemplo, aqui a variável minhar cor é do tipo Cor, e o valor atribuído é Cor.LARANJA, que é um dos valores definidos no enum Cor.
let minhaCor = Cor.VERDE; // Atribuido após inicializar sem um tipo definido
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
let carro = 'BMW';
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
// Funções extramentes importantes para qualquer sistema computacional -> vamos aos parâmetros
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
document.body.innerHTML += `<p>nome: ${retornaMeuNome()}</p>`;
// Função sem retorno
function digaOi() {
    console.log('Oi');
    document.body.innerHTML += `<p>Oi!!!</p>`;
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 3));
document.body.innerHTML += `<p>Multiplica: ${multiplicar(2.7, 3)}</p>`;
// Atribuindo uma função a uma variável ou a uma constante
const somar = function (numA, numB) {
    return numA + numB;
};
console.log(somar(2, 3));
document.body.innerHTML += `<p>Somar: ${somar(2, 3.5)}</p>`;
// Manipulando o DOM de fomra mais eficiente
// Para exibir textos
function exibir(mensagem) {
    const elemento = document.createElement('p');
    elemento.textContent = mensagem;
    document.body.appendChild(elemento);
}
exibir('Olá, mundo!'); // Exibe: "Olá, mundo!"
// Para exibir números -> note que precisaremos converter o número para string
function exibirnum(mensagem) {
    const elemento = document.createElement('p');
    elemento.textContent = mensagem.toString(); // Converte número para string
    document.body.appendChild(elemento);
}
exibirnum(42); // Exibe: "42"
// Para exibir objetos -> note que precisaremos converter o objeto para string
function exibirobj(mensagem) {
    const elemento = document.createElement('p');
    elemento.textContent = JSON.stringify(mensagem); // Converte objeto para string
    document.body.appendChild(elemento);
}
exibirobj({ nome: 'João', idade: 27 }); // Exibe: '{"nome": "João", "idade": 27}'
// Para exibir arrays -> note que precisaremos converter o array para string
function exibirarray(mensagem) {
    const elemento = document.createElement('p');
    elemento.textContent = JSON.stringify(mensagem); // Converte array para string
    document.body.appendChild(elemento);
}
exibirarray([1, 2, 3]); // Exibe: "[1, 2, 3]"
exibirarray(['maçã', 'banana', 'laranja']); // Exibe: '["maçã", "banana", "laranja"]'
// Exibir qualquer tipo usando any
function exibirqualquer(mensagem) {
    const elemento = document.createElement('p');
    elemento.textContent = mensagem;
    document.body.appendChild(elemento);
}
exibirqualquer('Olá, mundo!'); // Exibe: "Olá, mundo!"
exibirqualquer(42); // Exibe: "42"
exibirqualquer({ nome: 'João', idade: 27 }); // Exibe: '{"nome": "João", "idade": 27}'
exibirqualquer([1, 2, 3]); // Exibe: "[1, 2, 3]"
exibirqualquer('melão'); // Exibe: "maçã"
// Boas práticas de tipagem => use typeof
function exibirqq(mensagem) {
    const elemento = document.createElement('p');
    if (typeof mensagem === 'object') {
        elemento.textContent = JSON.stringify(mensagem);
    }
    else {
        elemento.textContent = String(mensagem);
    }
    document.body.appendChild(elemento);
}
exibirqq('Olá, mundo!'); // Exibe: "Olá, mundo!"
exibirqq(42); // Exibe: "42"
exibirqq({ nome: 'João', idade: 27 }); // Exibe: '{"nome": "João", "idade": 27}'
exibirqq([1, 2, 3]); // Exibe: "[1, 2, 3]"
exibirqq('abacaxi'); // Exibe: "maçã" 
// Usando de forma mais controlado o typeof
function exibirtof(mensagem) {
    // Cria um elemento <p> para adicionar ao DOM
    const elemento = document.createElement('p');
    // Verifica se a mensagem é um objeto
    if (typeof mensagem === 'object') {
        // Converte o objeto ou array em uma string legível
        elemento.textContent = JSON.stringify(mensagem, null, 2);
    }
    else {
        // Converte string ou número para texto diretamente
        elemento.textContent = String(mensagem);
    }
    // Adiciona o elemento <p> ao body do documento
    document.body.appendChild(elemento);
}
exibirtof('Olá, mundo!'); // Exibe: "Olá, mundo!"
exibirtof(42); // Exibe: "42"
exibirtof({ nome: 'João', idade: 27 }); // Exibe: '{"nome": "João", "idade": 27}'
exibirtof([1, 2, 3]); // Exibe: "[1, 2, 3]"
exibirtof('pera'); // Exibe: "maçã"
