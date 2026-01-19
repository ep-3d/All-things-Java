let A = null;
let B = null;

A = prompt("Enter a value for A:")
B = prompt("Enter a value for B:")

let A_squared = A * A;
let B_squared = B * B;
let C_squared = A_squared + B_squared; 
let C = Math.sqrt(C_squared);


console.log("The value of A^2 + B^2 is:", C_squared);
console.log("The value of C is:", C);
