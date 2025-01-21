// let & const => é preciso estar atento a questões de estar no bloco, fora do bloco "local" e "global".

var seraQuePode = '?'  // Recurso chamado hoisting no JavaScript (versão mais antiga) - elevar, içar.
console.log(seraQuePode)

let estaFrio = true
if(estaFrio) {
    let acao = 'Colocar o casaco!'
    console.log(acao)
}

const cpf: string = '123.456.000-99'
// cpf = '789.101.132-78'  // Claro, constante não pode ser alterada - note que se usar "es5", isso seria permitido
console.log(cpf)

// Atente ao escopo da variável

var segredo = 'externo!'
function revelar() {
    var segredo = 'interno!';
    console.log(segredo);
    }
revelar();
console.log(segredo);  // Não existe

for(let i: number = 0; i < 10; i++) {
    console.log(i);
}
