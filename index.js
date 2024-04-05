#! /usr/bin/env node
import inquirer from "inquirer";
let myPin = 12345;
let myBalance = 10000;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin: ",
        type: "number"
    }
]);
if (pinAns.pin == myPin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"]
        }
    ]);
    if (operationAns.operation == "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount you want to withdraw: ",
                type: "number"
            }
        ]);
        if (amountAnswer.amount < myBalance) {
            myBalance -= amountAnswer.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    else if (operationAns.operation == "check balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
    else if (operationAns.operation == "fastcash") {
        let fastAns = await inquirer.prompt([
            {
                name: "fast",
                message: "How much amount you want to withdraw",
                type: "list",
                choices: ["1000", "3000", "5000"]
            }
        ]);
        if (fastAns.fast == "1000") {
            myBalance -= fastAns.fast;
            console.log(`your remaining balance is: ${myBalance}`);
        }
        if (fastAns.fast == "3000") {
            myBalance -= fastAns.fast;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        if (fastAns.fast == "5000") {
            myBalance -= fastAns.fast;
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("Invalid pin code");
}
;
