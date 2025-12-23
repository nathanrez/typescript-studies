// ==== 1. Crie uma função multiply que: receba dois numbers e retorne number. ====
const multiply = (x: number, y: number): number => {
  return x * y;
}

// ==== 2. Crie uma função formatName que receba name: string e retorne string em maiúsculo. ====
const formatName = (name: string): string => {
  return name.toUpperCase();
}

formatName("Alisson");

// ==== 3. Crie uma função showStatus que receba status: string não retorne nada ====
const showStatus = (status: string): void => {
    console.log(status);
}