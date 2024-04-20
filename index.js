#! /usr/bin/env node
// Printing A Welcome Message
console.log(`\n\t welcome To \'codeWithAbdullhakeem\' CLI Simple Calculator \n`);
// CLI Simple Calculator
// Asking Question From Users Through Inquirer
import inquirer from "inquirer"; // import inquire
let answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter yoursecond number", type: "number", name: "secondNumber" },
    {
        message: "Slect An Operator to Perform Operation",
        type: "list",
        name: "Operator",
        choices: ["+", "-", "*", "/"]
    }
]);
if (answer.Operator === "+") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.Operator === "-") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.Operator === "*") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.Operator === "/") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log(`Please select an operator`);
}
