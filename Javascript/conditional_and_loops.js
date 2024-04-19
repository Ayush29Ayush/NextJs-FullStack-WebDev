let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

let a = 10;
let b = 20;
if (a > b) {
  console.log("a is greater than b");
} else if (a == b) {
  console.log("a is equal to b");
} else {
  console.log("b is greater than a");
}

let ch = 4;
switch (ch) {
  case 1:
    console.log("a");
    break;
  case 2:
    console.log("b");
    break;
  case 3:
    console.log("c");
    break;
  case 4:
    console.log("d");
    break;
  default:
    console.log("Invalid Choice");
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log("2 x " + i + " = " + 2 * i);
  console.log(`2 x ${i} = ${2 * i}`);
}

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
