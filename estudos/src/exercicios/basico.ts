// Exercicio 1 - uma variável age do tipo number; uma variável username do tipo string; uma variável isAdmin do tipo boolean
let age: number = 26;
let username: string = "Marcos";
let isAdmin: boolean = true;

// Exercicio 2 - Array que só aceite números. 3 valores válidos.
const scores: number[] = [2, 7, 21];

// Exercicio 3 - Tupla de usuario
const user: [number, string] = [0, "Rogerio"];

// Exercicio 4 - array de tuplas
const usuarios: [number, string][] = [
    [0, "Rogerio"],
    [1, "Juliana"],
    [2, "Roberto"],
    [1, "Claudio"],
    [1, "Fernanda"],
];

// Exercicio 5 - Crie uma variável orderId que aceite: number ou string e Teste os dois.
let orderId: number | string;
// orderId = 0;
orderId = "Renato";
console.log(orderId);

// Exercicio 6 - Crie um enum Status com: Pending, Approved, Rejected. Crie uma variável usando esse enum.
enum Status {
    Pending = "Pendente",
    Approved = "Aprovado",
    Rejected = "Rejeitado"
}

let statusPedido = Status.Approved;