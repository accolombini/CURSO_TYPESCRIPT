"use strict";
// Neste arquivo, vamos conhecer o processo de compilação do TypeScript e a compatibilidade com diferentes ambientes.
// Declaração de uma variável `a` contendo a mensagem de teste.
const a = "Teste TS (compilação com npx e usando live-server!)";
// Verificação do ambiente de execução:
// Verifica se o objeto `document` está definido, indicando que o código está sendo executado em um navegador.
if (typeof document !== "undefined") {
    console.log("Executando no navegador"); // Exibe no console do navegador que o código está sendo executado no navegador.
    // Adiciona dinamicamente a mensagem no corpo do HTML.
    document.body.innerHTML += `<p>${a} no navegador!</p>`;
}
else {
    // Caso o objeto `document` não esteja disponível, presume-se que o código está sendo executado no Node.js.
    console.log("Executando no Node.js"); // Exibe no console do Node.js que o código está rodando fora do navegador.
    console.log(a); // Mostra a mensagem no console do Node.js.
}
