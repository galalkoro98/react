// Compare this snippet from src/rules.js:
// // This file contains the rules of the game. It is a simple object that maps the
// // winning and losing conditions of the game. The keys of the object are the
// // choices of the player and the values are objects that map the choices of the
// // computer to the result of the game.

import { result, compChoice } from "./listener.js";
import { userChoice } from "./logic.js";

export const userScore = document.getElementById("user_score");
export const compScore = document.getElementById("comp_score");
export const userChoiceDiv = document.getElementById("userChoice");
export const compChoiceDiv = document.getElementById("compChoice");
export const resultDiv = document.getElementById("result");

userChoiceDiv.innerHTML = userChoice;
compChoiceDiv.innerHTML = compChoice;
resultDiv.innerHTML = result;
