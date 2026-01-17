// =======================
// TYPES (tipos customizados)
// =======================

// Type simples para representar um post/produto
type Post = {
  productId: string; // id do produto (string)
  price: number;     // preço do produto
};

// Type User com propriedades obrigatórias e opcionais
type User2 = {
  firstName: string; // nome obrigatório
  age: number;       // idade obrigatória

  // email é opcional
  // o ? indica que o campo pode existir ou não
  email?: string;

  password: string; // senha obrigatória

  // posts é um array do type Post
  posts: Post[];
};

// Objeto seguindo exatamente o contrato do type User2
const user2: User2 = {
  firstName: 'Mike',
  age: 20,
  password: '123123',
  posts: [{ productId: '1', price: 200 }]
  // email não é obrigatório, então pode ser omitido
};

// Função que recebe uma string e não retorna nada (void)
const printLog = (message: string): void => {
  console.log(message);
};

// Aqui usamos o operador ! (non-null assertion)
// Ele diz ao TypeScript:
// "confia em mim, isso NÃO é undefined agora"
printLog(user2.email!);

// ⚠️ Cuidado: se email realmente for undefined em runtime, pode dar erro.
// Use com consciência.

// =======================
// INTERSECTION TYPES (&)
// =======================

// Type Author
type Author = {
  books: string[]; // lista de livros
};

// Intersection (&):
// O objeto PRECISA TER tudo de User2 + tudo de Author
const author: Author & User2 = {
  age: 2,
  books: ["1"],
  email: "author@gmail.com",
  firstName: "Emanuel",
  password: "123123",
  posts: []
};

// =======================
// INTERFACES
// =======================

// Interface para representar um usuário simples
interface UserInterface {
  firstName: string;
  email: string;
}

// Objeto seguindo a interface
const emailUser: UserInterface = {
  email: "renata@gmail.com",
  firstName: "Renata"
};

// Interface Author
interface AuthorInterface {
  books: string[];
}

// Intersection entre interfaces
// Precisa ter TUDO de UserInterface + AuthorInterface
const newAuthor: UserInterface & AuthorInterface = {
  email: "felipe@gmail.com",
  firstName: "felipe",
  books: []
};

// =======================
// UNION TYPES ( | ) (nao pode ser feito assim em interface, apenas em type)
// =======================

// Grade pode ser number OU string
type Grade = number | string;

// Uso válido
const grade: Grade = 1;
// também seria válido: const grade: Grade = "A";

// === part 2 funcoes em objetos ===

type User4 = {
  firstName: string;
  age: number;
  email?: string;
  password: string;
  orders: Order[];
  register(): string;
}

const User4 = {
  firstName: "joao",
  age: 23,  
  password: "abc123",
  orders: [{productId: "1", price: 200 }],
  register() {
    return "a";
  }
}
