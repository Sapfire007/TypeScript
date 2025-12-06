let color: 'red' | "crimson" | 'cyan';
color = 'red';
console.log(color);
// color = "yellow";
// console.log(color); <- Not possible

let check: true | false;
check = true;
// check = "xyz"; <- Error

let number = 1 | 2 | 3;
number = 1;
console.log(number);

let password: "secretpassword" = "secretpassword";
// password = "tryinganotherpassword"; // Warning ⚠️
console.log(password);