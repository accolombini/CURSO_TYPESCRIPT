# O que é TypeScript?

1. __Superset de JavaScript__: Qualquer código JavaScript é código TypeScript válido.
2. __Tipagem Estática__: Você pode definir os tipos das variáveis, parâmetros e retornos de funções. Isso ajuda a evitar erros no tempo de execução.
3. __Compilação para JavaScript__: TypeScript precisa ser "transpilado" para JavaScript antes de ser executado.

## Benefícioas do TypeScript

1. __Detecta Erros em Tempo de Compilação__: Você encontra erros antes de executar o código.
2. __Autocompletar e IntelliSense Melhorados__: Ferramentas como VS Code oferecem dicas mais precisas.
3. __Código Mais Legível e Manutenível__: Com tipagem, é mais fácil entender o propósito do código.
4. __Compatível com Bibliotecas JavaScript__: Você pode usar qualquer biblioteca JavaScript.

### Conceitos Básicos de TypeScript

1. __Tipagem básica__:
   ```TypeScript
    let name: string = "Angelo";
    let age: number = 30;
    let isActive: boolean = true;
    ```
2. __Arrays e Objetos__:
   ```TypeScript
    let hobbies: string[] = ["coding", "reading"];
    let user: { name: string; age: number } = {
        name: "Angelo",
        age: 30,
    };
    ```
3. __Funções com Tipagem__:
    ```TypeScript
      function add(a: number, b: number): number {
      return a + b;
    }
    ```
4. __Interfaces e Tipos__:
   ```TypeScript
      interface User {
        name: string;
        age: number;
      }

      const user: User = {
        name: "Angelo",
        age: 30,
      };
    ```
5. __Tipos Opcionais e Union Types__:
   ```TypeScript
      function greet(name: string, age?: number): string {
        return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}.`;
      }

      let value: string | number = "test"; // Pode ser string ou number
    ```

### Recursos Avançados

1. __Generics__:
   ```TypeScript
      function identity<T>(value: T): T {
        return value;
    } 
    
    const result = identity<string>("Hello");
    ```

2. __Classes__:
   ```TypeScript
      class Person {
        constructor(public name: string, private age: number) {}

        greet() {
            return `Hello, my name is ${this.name}`;
        }
    }

    const angelo = new Person("Angelo", 30);
    console.log(angelo.greet());
    ```

3. __Enums__:
   ```TypeScript
      enum Color {
        Red = "RED",
        Green = "GREEN",
        Blue = "BLUE",
    }

    const favoriteColor: Color = Color.Red;
    ```

4. __Modules e Import/Export__:
   ```TypeScript
      // math.ts -> Em math.ts
      export const add = (a: number, b: number): number => a + b;

      // main.ts -> No main.ts
      import { add } from "./math";

      console.log(add(2, 3));
    ```

# Roterio para criar um repositório para um projeto usando TypScript

### Configurando localmente

```script
mkdir meu-projeto
cd meu-projeto
npm init -y
```

Isso irá criar um arquivo package.json no projeto

### Instalando typescript localmente

npm install typescript --save-dev

### Crie um Arquivo tsconfig.json

npx tsc --init

##### Exemplo de um arquivo de configuração básico:

```javaScript 
    {
      "compilerOptions": {
       "target": "ES6",                // Especifica o JavaScript gerado
        "module": "commonjs",           // Sistema de módulo usado
      "strict": true,                 // Ativa verificações estritas
        "esModuleInterop": true,        // Suporte para módulos ES
        "outDir": "./dist",             // Saída dos arquivos compilados
        "rootDir": "./src"              // Diretório de origem
      }
    }
```

#### Organize a estrutura do Projeto

__Crie uma estrutura básica__

```TypeScript 
  mkdir src
  touch src/index.ts
```

#### Coloque o código TypeScript em src/index.ts. Por exemplo:

```TypeScript 
  const mensagem: string = "Olá, TypeScript!";
  console.log(mensagem);
```

#### Verifique a instalação do TypeScript

```TypeScript 
  npx tsc --version
```

__Confirme se o TypeScript esta instalado no diretório node_modules__

```TypeScript 
  ls node_modules/typescript
```
__Liste as dependências instaladas do TypeScript__
```TypeScript 
  npm list typescript
```
__Compilar um arquivo localmente (sem a intalação global do TypeScript)__:
```TypeScript
  npx tsc <nome_arquivo>.ts
```
__Inicializando um arquivo de configuração (tsconfig.json)__:
```TypeScript
  npx tsc --init
```
__Compilando múltiplos arquivos no projeto__: após configurar o tsconfig.json:
```TypeScript
  npx tsc
```
__Executando um arquivo .ts__:
```TypeScript
  npx ts-node <arqrivo.ts>
```
__Executando o arquivo compilado com Node.js__:
```TypeScript
  node <arquivo.js>
```
__Automatizando compilação e execução__:
```TypeScript
  npx tsc <arquivo.ts> && node <arquivo.js>
```
