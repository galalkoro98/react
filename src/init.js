// Description: This file is responsible for listening to the user's choice

import { useEffect } from "react";
import "./App.js";
import gameRules from "./rules.js";

function MyButtonList() {
  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      const button = document.getElementById(`button-${i}`);
      button.addEventListener("click", () => {
        const userChoice = button.value;
        const compChoice =
          Object.keys(gameRules)[Math.floor(Math.random() * 5)];
        const result = gameRules[userChoice][compChoice];

        const userScore = document.getElementById("user_score");
        const compScore = document.getElementById("comp_score");
        const userChoiceDiv = document.getElementById("userChoice");
        const compChoiceDiv = document.getElementById("compChoice");
        const resultDiv = document.getElementById("result");

        userChoiceDiv.innerHTML = userChoice;
        compChoiceDiv.innerHTML = compChoice;
        resultDiv.innerHTML = result;

        if (result === "win") {
          userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
        }
        if (result === "lose") {
          compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
        }

        if (userScore.innerHTML === "5") {
          resultDiv.innerHTML = "You win the game!";
          userScore.innerHTML = 0;
          compScore.innerHTML = 0;
        }
        if (compScore.innerHTML === "5") {
          resultDiv.innerHTML = "You lose the game!";
          userScore.innerHTML = 0;
          compScore.innerHTML = 0;
        }
      });
    }
  }, []);


}
export default MyButtonList;
