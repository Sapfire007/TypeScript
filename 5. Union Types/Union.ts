let password: string | number = 1455892;
console.log(password);

type UserInfo = {
    first: string;
    last: string;
    age: number;
}

type AccountDetails = {
    email: string;
    password: string;
}

let user1: UserInfo | AccountDetails = {
    first: "Sap",
    last: "X",
    age: 19
}
console.log(user1);

let user2: UserInfo | AccountDetails = {
    email: "sapx@mail.com",
    password: "we@rf#gr32$1"
}
console.log(user2);

let user3: UserInfo | AccountDetails = {
    email: "sapx@mail.com",
    last: "X",
    password: "we@rf#gr32$1",
    first: "Sap"
}
console.log(user3);

const items: (number | string)[] = [1, 4, 6, 7, 2, "apple", "blue", 9, 23];
console.log(items);