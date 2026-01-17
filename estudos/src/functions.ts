// função arrow
// recebe dois parâmetros do tipo number
// o TypeScript infere que o retorno é number
const sum = (x: number, y: number) => {
  return x + y;
};

// chamada da função
// o retorno é um number
const value = sum(2, 3); // value se torna number

// função com tipo de retorno explícito
// mesmo somando números, ela retorna string
const sum2 = (x: number, y: number): string => {
  return (x + y).toString();
};

// função que não retorna nada
// usada apenas para executar uma ação
const log = (message: string): void => {
  console.log(message);
};

// === function em interface pt2. ===

interface MathFunc{
  (x: number, y: number): number;
};

const sum3: MathFunc = (x: number, y: number):  number => {
  return x + y;
};

const sub: MathFunc = (x: number, y: number): number => {
  return x - y;
};