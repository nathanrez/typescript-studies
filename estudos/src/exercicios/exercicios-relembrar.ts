// 1. Crie uma função greetUser que receba: name: string ; age: number ; retorne string
const greetUser = (name: string, age: number) => {
    return `Olá, ${name}. Você tem ${age} anos.`
}

// 2. Crie a função formatPrice que receba price: number ; receba currency: "BRL" | "USD" ; retorne string.
const formatPrice = (price: number, currency: "BRL" | "USD"): string => {
    if(currency === "BRL"){
        return `R$ ${price}`;
    }
    else {
        return `$ ${price}`;
    }
}

// 3. Crie um type chamado User com id: number ; name: string ; isActive: boolean
//    Crie uma função printUser que receba user: User ; não retorne nada (void)

type User = {
    id: number,
    name: string,
    isActive: boolean
}

const printUsuario = (user: User):void => { 
    console.log("Usuário ${user.name} - Ativo: {user.isActive}");
}

printUsuario({
  id: 1,
  name: "Nathan",
  isActive: true
});