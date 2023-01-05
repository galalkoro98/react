// Description: This file is responsible for listening to the user's choice

import { useEffect } from "react";
import "./App.js";
// import "./logic.js";

let i;
function MyButtonList() {
  useEffect(() => {
    for (i = 0; i < 5; i++) {
      const button = document.getElementById(`button-${i}`);
      button.addEventListener("click", () => {
        const userChoice = button.value;
        return { userChoice };

        // const compChoice = Object.keys(gameRules)[Math.floor(Math.random() * 5)];
        // const result = gameRules[userChoice][compChoice];

        // if (result === "win") {
        //   userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
        // } else if (result === "lose") {
        //   compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
        // } else if (result === "draw") {
        //   userScore.innerHTML = parseInt(userScore.innerHTML);
        //   compScore.innerHTML = parseInt(compScore.innerHTML);
        // }
      });
    }
  }, []);
}

export default MyButtonList;
