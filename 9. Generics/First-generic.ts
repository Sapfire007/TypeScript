function printInfo<T>(x: T): T{
    return x;
}

const str = printInfo<string>("Hello");
const num = printInfo<number>(2);
const bool = printInfo<boolean>(true);


function printNumber(item: number, defaultValue: number): [number, number] {
    return [item, defaultValue];
}

function printString(item: string, defaultValue: string): [string, string] {
    return [item, defaultValue];
}

function printBoolean(item: boolean, defaultValue: boolean): [boolean, boolean] {
    return [item, defaultValue];
}

const num2 = printNumber(12, 20);
console.log(num2);

const str2 = printString("Hello", "World");
console.log(str2);

const bool2 = printBoolean(true, false);
console.log(bool2);


function printXYZ(item: any, defaultValue: any): [any, any] {
    return [item, defaultValue];
}

const xyz = printXYZ(17, "Sap");
console.log(xyz);

// --------------- Using Generics ---------------
function uniqueDataTypesFunc<Type>(item: Type, defaultValue: Type): [Type, Type] {
    return [item, defaultValue];
}

const res1 = uniqueDataTypesFunc<number>(10, 20);
console.log(res1);

const res2 = uniqueDataTypesFunc<string>("Sap", "X");
console.log(res2);

const res3 = uniqueDataTypesFunc<boolean>(false, true);
console.log(res3);


// Example usage with a custom type
interface Dog{
    name: string;
    breed: string;
}

const dog1 = uniqueDataTypesFunc<Dog>({name: "Tommy", breed: "Pug"}, {name: "Buddy", breed: "Labrador"});
console.log(dog1);