let A = null;
let B = null;
let C = null;

A = Number(prompt("Enter a value for A:"));
B = Number(prompt("Enter a value for B:"));
C = Number(prompt("Enter a value for C:"));

A += B;   // A = A + B
A /= C;   // A = A / C
C %= B;   // C = C % B

console.log("The value of A plus B, then divided by C is:", A);
console.log("The value of C modulus B is:", C);