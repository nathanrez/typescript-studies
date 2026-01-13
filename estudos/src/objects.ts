// Type
type posts = {
    productId: string,
    price: number
}
type User2 = {
    firstName: string,
    age: number,
    email?: string, // o interrogação antes dos 2 pontos faz com que o campo não se torne obrigatorio para preencher. Tentar usar uma propriedade nao obrigatoria
    password:string,
    posts: posts[]
}

const user2: User2 ={
   firstName: 'Mike',
   age: 20,
   password: '123123',
   posts: [{ productId: '1', price: 200 }]
};

const printLog = (message: string) => {};

printLog(user2.email!)