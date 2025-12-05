type UserInfo = {
    first: string;
    last: string;
    age: number;
};

type AccountDetails = {
    email: string;
    password: string;
};

type User = UserInfo & AccountDetails;

const sap: User = {
    first: "Sap",
    last: "X",
    age: 19,
    email: "sapx007@gmail.com",
    password: "password25"
};

console.log(`Name: ${sap.first}${sap.last}; Age: ${sap.age}; Email: ${sap.email}; Password: ${sap. password}`);