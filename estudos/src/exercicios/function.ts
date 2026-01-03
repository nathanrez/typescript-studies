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

// === 4. Crie uma função addAge que: receba age: number, retorne number, some 1 à idade recebida ===

const addAge = (age: number): number => {
  return age + 1;
}

// === 5. Crie uma função formatId que: receba id: number | string, retorne string. se for number, converta para string, se já for string, apenas retorne. Dica: use typeof.

const formatId = (id: number | string): string => {
  if (typeof id === "string") {
    return id;
  } 
  else {
    return id.toString();
  }
}

// 6. Crie um enum OrderStatus com: Pending, Shipped, Delivered. Depois crie uma função printStatus que: receba um status: OrderStatus. não retorne nada (void), imprima o status no console.

enum OrderStatus {
  Pending = "pendente",
  Shipped = "enviado",
  Delivered = "entregue"
}

const printStatus = (status: OrderStatus): void => {
  console.log(status);
}

// 7. Crie uma função printUser que: receba um objeto. o objeto deve ter: id: number, name: string, isActive: boolean, a função não retorna nada (void)
// apenas imprima o objeto no console. (Dica: tipa o objeto direto no parâmetro.)

const printUser = (user: {
  id: number;
  name: string;
  isActive: boolean;
}): void =>{
  console.log(user);
}

// 8. Crie uma função getStatusMessage que: receba status: "success" | "error". retorne string, se for "success", retorne "Operação realizada com sucesso, 
// se for "error", retorne "Erro na operação". 👉 Aqui você usa union de literals, não enum.

const getStatusMessage = (status: "sucess" | "error") => {
  if(status === "sucess"){
    console.log("Operação realizada com sucesso");
  }
  else if(status === "error"){
    console.log("Erro na operação");
  }

  return;
}

    // Correcao
    const getStatusMessage2 = (status: "success" | "error"): string => {
    if (status === "success") {
      return "Operação realizada com sucesso";
    }

    return "Erro na operação";
  }

// 9. Crie uma função calculateDiscount que: receba: price: number discount: number | "none". retorne number 
// (regras: se discount for "none", retorne price, se for number, subtraia o desconto do preço e retorne o valor final)

const calculateDiscount = (discount : {
  price: number;
  desconto: number | "none";
}) => {
  if(discount.desconto === "none"){
    return discount.price;
  }
  else{
    return discount.price - discount.desconto;
  }
}

// 10. Crie um type chamado Order com id: number. status: "pending" | "shipped" | "delivered". total: number
// Crie uma função printOrder que receba um order: Order não retorne nada (void) imprima no console

type Order = {
  id: number;
  status: "pending" | "shipped" | "delivered";
  total: number;
}

const printOrder = (print: Order): void => {
  console.log(`Pedido <${print.id}> - Status: <${print.status}> - Total: <${print.total}>`)
}