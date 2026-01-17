// 1. Crie uma função greet que: receba name: string e retorne uma string
const greet = (name: string) => {
    return `Olá, ${name}!`
}

// 2. Crie uma função formatValue que: receba value: number | string. retorne string
    // se for number → retorne "Valor numérico: X" e se for string → retorne "Valor textual: X"

const formatValue = (value: number | string) => {
    if(typeof value === 'string'){
        return `Valor textual: ${value}`;
    }
    else {
        return `Valor: ${value}`
    }
}

// 3. Crie uma interface de função chamada CalcFunc que: receba dois números, retorne número
    // Depois: implemente multiply, implemente divide. Use a interface nas duas.

interface CalcFunc {
    (x: number, y: number): number;
}

const multiply2: CalcFunc = (x: number, y: number): number => {
    return x * y;
}

const divide: CalcFunc = (x: number, y: number): number => {
    return x / y;
}

// 4. Crie um type User com: id: number, name: string, role: "admin" | "user", login(): string
    // Crie um objeto userAdmin que: implemente esse type o método login deve retornar: Usuário NAME logado como ROLE

type User7 = {
    id: number;
    name: string;
    role: "admin" | "user";
    login(): string;
}

const userAdmin = {
    id: 123,
    name: "joaquim",
    role: "admin",
    login(){
        return `Usuário ${userAdmin.name} logado como ${userAdmin.role}`
    }
}

// 5. Um type Order id: number, total: number, status: "pending" | "paid"
    // Um type User name: string, orders: Order[], getTotalOrders(): number
    // Um objeto user com pelo menos 2 pedidos getTotalOrders deve: somar o total de todos os pedidos retornar o valor final

type Order2 = {
    id: number;
    total: number;
    status: "pending" | "paid";
}

type User5 = {
    name: string;
    orders: Order[];
    getTotalOrders(): number;
}

const userOrder = {
    id: 123,
    total: 2,
    status: "pending",
    name: "Diego",
    orders: [
        {productId: 1, name: "mouse", price: 50}, 
        {productId: 6, name: "cabo hdmi", price: 30}
    ],
    getTotalOrders(){
        return this.orders.reduce((sum, order) => sum + order.price, 0);
    }
}