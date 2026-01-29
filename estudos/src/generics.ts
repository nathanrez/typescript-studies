const returnValue = (value: any) => value

const message = returnValue('Hello World');
const count = returnValue(5)

const returnValueGeneric = <T>(value: T): T => value

const messageGeneric = returnValueGeneric<string>('Hello World');
const countGeneric = returnValueGeneric<number>(5);

// usando em funcoes

function getFirstValueFromArray<T>(array: T[]): T{    
    return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

// com diferentes atribuicoes no generics
const anyGenericVar = <T, X, Y>(value: T): T => value;
const testGenericVar = anyGenericVar<string, boolean, number>("");

// promises
const returnPromise = async(): Promise<number> => {
    return 5;
}

// utilizando com classes
class GenericNumber <T> {
    zeroValue: T;
    sum: (x: T, y: T) => T;

    constructor(zeroValue: T, sum: (x: T, y: T) => T){
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) =>{
    return x + y;
})

