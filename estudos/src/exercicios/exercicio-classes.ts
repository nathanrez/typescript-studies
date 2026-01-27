/* ex.1
interface IVehicle {
    brand: string,
    year: number,
    getInfo(): string
}

class Vehicle implements IVehicle {
    brand: string;
    year: number;

    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
    }
    
    getInfo(): string {
        return `marca: ${this.brand} - Ano: ${this.year}`;
    }
}

const newVehicle = new Vehicle ("Toyota", 1998);
newVehicle.getInfo(); */

// ex.2
interface IProduct {
    name: string,
    price: number,
    getPriceTag(): string
}

class Product implements IProduct {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPriceTag(): string {
        return `Produto: ${this.name} - Preço: R$ ${this.price}`;
    }
}

const product = new Product ("banana", 4);
console.log(product.getPriceTag());