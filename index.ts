#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
  { message: "please enter your number", type: "number", name: "guessnumber" },
]);
if(answer.guessnumber === randomNumber){
    console.log("Congratulation you guess a right number");

}
else{
    console.log("Wrong! you guessed wrong number")
}
