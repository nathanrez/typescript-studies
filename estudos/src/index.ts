// === VARIAVEL TIPADA COMO NUMBER ===
// só aceita números
let anos: number = 5;

// === CONSTANTE TIPO STRING ===
// não pode mudar o valor depois
const nome: string = 'fulano';

// === CONSTANTE TIPO BOOLEAN ===
// true ou false, nada além disso
const isValid: boolean = true;

// === ANY DESATIVA O TS ===
// aceita qualquer tipo (use só quando não tiver escolha)
const semTipo: any = 5;

// === ARRAY TIPADO: SOMENTE NUMEROS ===
const ids: number[] = [1, 2, 3, 4, 5];

// === TUPLA ===
// posição 0: number
// posição 1: string
// ordem importa (array com estrutura fixa)
const person: [number, string] = [1, ''];

// === ARRAY DE TUPLAS ===
// cada item precisa seguir [number, string]
// Muito usado pra listas simples e dados retornados de API
const people: [number, string][] = [
  [1, 'jane'],
  [2, 'felipe'],
  [3, 'joao']
];

// === UNION TYPE ===
// aceita OU string OU number
// Isso evita any e deixa o código flexível com segurança.
const productId: string | number = 12;

// === ENUM ===
// cria um conjunto fechado de valores
// bom para estados, tipos fixos e direcoes
enum Direction {
  Up = 1,
  Down = 2,
  Left = 'esquerda',
  Right = 'direita'
}

// variável que só pode receber valores do enum Direction
const direction = Direction.Left;

// === TYPE ASSERTION ===
// você está dizendo ao TS: "confia em mim, é string"
// Assertion não converte, só informa o tipo.
const productName: any = 'Bone';

// forçando o tipo
let itemId = productName as string;