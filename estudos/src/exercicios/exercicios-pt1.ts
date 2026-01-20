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

// 6. Crie um objeto person com name: string, sayName(): void

const person2 = {
    name: "Nathan",
    sayName(): void {
        console.log(this.name);
    }
}

// 7. Crie um objeto counter com: value: number increment(): void decrement(): void 
// Cada método deve: alterar this.value imprimir o valor atual

const object = {
    value: 3,
    increment(): void {
        for(let i = this.value; i === this.value; i++){
            let increment = this.value + 1;
            console.log(increment)
        }
    },
    decrement(): void {
        for(let i = this.value; i === this.value; i++){
            let increment = this.value - 1;
            console.log(increment)
        }
    }
}

// ===== CORRECAO 7 ==== (ERA MAIS SIMPLES!!!!!!!!!)
const counter = {
  value: 3,
  increment(): void {
    this.value++;
    console.log(this.value);
  },
  decrement(): void {
    this.value--;
    console.log(this.value);
  }
};


// 8. Crie um objeto userSession com userName: string, isLogged: boolean
    //Métodos: login(): void, deve alterar this.isLogged para true, 
    // imprimir: 👉 Usuário X logado, logout(): void, deve alterar this.isLogged para false, imprimir:
    // 👉 Usuário X deslogado checkStatus(): void usar setTimeout após 1 segundo, 
    // imprimir: Usuário X está logado ou Usuário X não está logado

const userSession = {
    userName: "Thiaguinho",
    isLogged: false,
    login(): void {
        this.isLogged = true;
        console.log(this.isLogged);
    },
    logout(): void {
        this.isLogged = false;
        console.log(this.isLogged);
    }, /*
    checkStatus(): void {
        let verificacao = this.isLogged;
        setTimeout(() => {
            console.log(verificacao);
        }, 1000)
    }*/
 // === corrigindo apenas a checkStatus... a variavel verificacao guarda a informacao antes do setTimeout, portanto a info nao fica atualizada.
    checkStatus(): void {
    setTimeout(() => {
        console.log(this.isLogged);
    }, 1000);
}
}

// 8. 

const shoppingCart ={
    items: [] as number[],
    addItem(item: number):void {
        this.items.push(item);
        console.log(`Item "${item}" adicionado!`);
    },
    getTotal() {
        return this.items.reduce((total, numero) => total + numero, 0);
    }, 
    printTotalDelayed(): void {
        setTimeout(()=>{
            console.log(this.getTotal())
        }, 1000);
    }
}

