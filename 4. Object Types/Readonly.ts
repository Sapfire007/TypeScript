type Person = {
  name: string;
  age: number;
  readonly email: string;
};

const user: Person = {
  name: "John",
  age: 20,
  email: "test@gmail.com",
};

// user.email = "john@gmail.com" // 🚫 Not Valid
console.log(user.email); // Valid