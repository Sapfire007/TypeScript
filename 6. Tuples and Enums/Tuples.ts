let myTuple: [number, string];
myTuple = [10, "Hello World"];
// myTuple = ["Hello World", 10]; <- Not possible: incorrect order
console.log(myTuple);

const products: (number | string)[] = ['item 1', 12];
console.log(products);

const games: [string, string, string] = ["Minecraft", "Assassin's Creed", "Far Cry 4"];
console.log(games);

const game: [string, number, boolean] = ["Forza Horizon 5", 4.5, true];
console.log(game);