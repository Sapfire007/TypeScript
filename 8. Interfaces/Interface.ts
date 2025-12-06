interface Computer {
    name: string;
    ram: number;
    hdd: number;
}

const computerExample: Computer = {
    name: 'i9',
    ram: 32,
    hdd: 500
}

console.log(computerExample.name);
console.log(computerExample.ram);
console.log(computerExample.hdd);


interface Movie {
  readonly name: string; // 👈 Readonly Property
  ratings: number;
  genre?: string; // 👈 Optional Property
}

const movie1: Movie = {
  name: "John Wick",
  ratings: 7,
  genre: "Action",
};

// movie1.name = "Another Movie" // 👈 ERROR
console.log(movie1);
// ----------------------------------