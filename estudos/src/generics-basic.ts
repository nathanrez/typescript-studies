// ================================
// GENERICS — VISÃO GERAL
// ================================

// ❌ Exemplo SEM generics (usando any)
// Problema: perde totalmente o tipo
// O TypeScript não protege nada aqui
const returnValue = (value: any) => value;

const message = returnValue('Hello World'); // pode virar qualquer coisa
const count = returnValue(5);

// ================================
// ✅ Exemplo COM generics
// ================================

// <T> representa um tipo genérico
// Quem usa a função decide qual será esse tipo
// A função retorna exatamente o mesmo tipo recebido
const returnValueGeneric = <T>(value: T): T => value;

// Aqui estamos INFORMANDO explicitamente o tipo
const messageGeneric = returnValueGeneric<string>('Hello World');
const countGeneric = returnValueGeneric<number>(5);

// Vantagem:
// - Tipagem forte
// - Autocomplete
// - Segurança em tempo de compilação

// ================================
// GENERICS EM FUNÇÕES
// ================================

// Função que recebe um array de qualquer tipo T
// e retorna o primeiro elemento desse array
function getFirstValueFromArray<T>(array: T[]): T {    
    return array[0];
}

// Aqui T é string
const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);

// Aqui T é number
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

// O TypeScript entende automaticamente o tipo de retorno

// ================================
// MÚLTIPLOS GENERICS
// ================================

// Função com mais de um tipo genérico
// OBS: Nem sempre você vai usar todos
// Aqui só usamos T, os outros são apenas exemplo
const anyGenericVar = <T, X, Y>(value: T): T => value;

// Mesmo declarando vários generics,
// você pode usar apenas os que precisar
const testGenericVar = anyGenericVar<string, boolean, number>("");

// ================================
// GENERICS COM PROMISES
// ================================

// Promise<number> indica que:
// - é uma função assíncrona
// - o retorno final será um number
const returnPromise = async (): Promise<number> => {
    return 5;
};

// Muito comum em APIs, fetch, banco de dados etc.

// ================================
// GENERICS COM CLASSES
// ================================

// Classe genérica
// O tipo T será definido quando a classe for instanciada
class GenericNumber<T> {
    // Valor inicial genérico
    zeroValue: T;

    // Função que recebe dois T e retorna um T
    sum: (x: T, y: T) => T;

    constructor(
        zeroValue: T,
        sum: (x: T, y: T) => T
    ) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

// Aqui estamos dizendo que T será number
const myGenericNumber = new GenericNumber<number>(
    0,
    (x: number, y: number) => {
        return x + y;
    }
);

// Resultado:
// - zeroValue é number
// - sum só aceita number
// - total segurança de tipo