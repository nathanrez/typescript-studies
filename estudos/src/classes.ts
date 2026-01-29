// ===============================
// INTERFACE
// ===============================

// Interface define um "contrato"
// Quem implementar IPerson OBRIGATORIAMENTE precisa ter essas propriedades/métodos
interface IPerson {
    id: number;
    sayMyName(): string;
}

// ===============================
// CLASSE BASE (Person)
// ===============================

// A classe Person IMPLEMENTA a interface IPerson
// Ou seja: ela é obrigada a ter id e sayMyName()
class Person implements IPerson {

    // readonly → pode ser lido, mas NÃO pode ser alterado depois do constructor
    readonly id: number;

    // protected → acessível SOMENTE dentro da classe
    // e das classes que herdam dela (extends)
    protected name: string;

    // private → acessível APENAS dentro da própria classe
    // nem classes filhas conseguem acessar
    private age: number;
    
    // constructor é chamado quando usamos "new Person(...)"
    constructor(id: number, name: string, age: number) { 
        this.id = id;
        this.name = name;
        this.age = age;
    }

    // Método exigido pela interface IPerson
    sayMyName(): string {
        return this.name;
    }
}

// ===============================
// CLASSE FILHA (Employee)
// ===============================

// Employee EXTENDS Person
// Ou seja: herda tudo que Person tem
class Employee extends Person {

    // O constructor da classe filha PRECISA chamar o super()
    // super() chama o constructor da classe pai (Person)
    constructor(id: number, name: string, age: number){
        super(id, name, age);
    }

    // Esse método consegue acessar "name"
    // porque name é protected
    whoAmI(): string {
        return this.name;
    }
}

// ===============================
// INSTÂNCIA (OBJETO)
// ===============================

// Criando um objeto do tipo Person
const felipe = new Person(1, 'Felipe', 21);

// felipe.id → OK (readonly permite leitura)
// felipe.sayMyName() → OK
// felipe.name → ERRO (protected)
// felipe.age → ERRO (private)


// forma alternativa de declarar classes (menos repeticoes)
class PersonRefact {
    constructor(
        readonly id: number,
        protected name: string,
        private age: number ) { }
}