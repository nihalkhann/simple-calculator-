#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimations from "chalk-animation";
const sleep = (ms = 2000) => new Promise((resolve, reject) => setTimeout(resolve, ms));
async function welcome() {
    let rainbowTitle = chalkAnimations.rainbow("lets start calculations");
    await sleep();
    rainbowTitle.stop();
}
welcome();
const answers = await inquirer.prompt([
    {
        message: chalk.blue("Enter first number"),
        type: "number",
        name: "firstNumber",
    },
    {
        message: chalk.blue("Enter second number"),
        type: "number",
        name: "secondNumber",
    },
    {
        type: "list",
        name: "operator",
        message: chalk.red("which operation you want to perform"),
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answers.operator === "Addition") {
    console.log(chalk.rgb(39, 174, 96)(answers.firstNumber + answers.secondNumber));
}
else if (answers.operator === "Subtraction") {
    console.log(chalk.rgb(39, 174, 96)(answers.firstNumber - answers.secondNumber));
}
else if (answers.operator === "Multiplication") {
    console.log(chalk.rgb(39, 174, 96)(answers.firstNumber * answers.secondNumber));
}
else if (answers.operator === "Division") {
    console.log(chalk.rgb(39, 174, 96)(answers.firstNumber / answers.secondNumber));
}
else {
    console.log("invalid operation");
}
