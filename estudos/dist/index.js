"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// === VARIAVEL TIPADA COMO NUMBER ===
// só aceita números
let anos = 5;
// === CONSTANTE TIPO STRING ===
// não pode mudar o valor depois
const name = 'fulano';
// === CONSTANTE TIPO BOOLEAN ===
// true ou false, nada além disso
const isValid = true;
// === ANY DESATIVA O TS ===
// aceita qualquer tipo (use só quando não tiver escolha)
const semTipo = 5;
// === ARRAY TIPADO: SOMENTE NUMEROS ===
const ids = [1, 2, 3, 4, 5];
// === TUPLA ===
// posição 0: number
// posição 1: string
// ordem importa (array com estrutura fixa)
const person = [1, ''];
// === ARRAY DE TUPLAS ===
// cada item precisa seguir [number, string]
// Muito usado pra listas simples e dados retornados de API
const people = [
    [1, 'jane'],
    [2, 'felipe'],
    [3, 'joao']
];
// === UNION TYPE ===
// aceita OU string OU number
// Isso evita any e deixa o código flexível com segurança.
const productId = 12;
// === ENUM ===
// cria um conjunto fechado de valores
// bom para estados, tipos fixos e direcoes
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "esquerda";
    Direction["Right"] = "direita";
})(Direction || (Direction = {}));
// variável que só pode receber valores do enum Direction
const direction = Direction.Left;
// === TYPE ASSERTION ===
// você está dizendo ao TS: "confia em mim, é string"
// Assertion não converte, só informa o tipo.
const productName = 'Bone';
// forçando o tipo
let itemId = productName;
//# sourceMappingURL=index.js.map