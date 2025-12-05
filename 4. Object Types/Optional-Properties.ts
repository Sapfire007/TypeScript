type User = {
    name: string;
    age?: number;
    location: string;
};

const user1: User = {
    name: "Saptarshi",
    age: 19,
    location: "India"
};
console.log(`Name: ${user1.name}; Age: ${user1.age}; Location: ${user1.location}`);

const user2: User = {
    name: "David",
    location: "USA"
};
console.log(`Name: ${user2.name}; Age: ${user2.age}; Location: ${user2.location}`);