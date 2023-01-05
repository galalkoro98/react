import "./App.js";
import { useEffect } from "react";

// reset button

function ResetBtn() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", () => {
      const userScore = document.getElementById("user_score");
      const compScore = document.getElementById("comp_score");
      const userChoiceDiv = document.getElementById("userChoice");
      const compChoiceDiv = document.getElementById("compChoice");
      const resultDiv = document.getElementById("result");

      userScore.innerHTML = 0;
      compScore.innerHTML = 0;
      userChoiceDiv.innerHTML = "";
      compChoiceDiv.innerHTML = "";
      resultDiv.innerHTML = "";
    });
  }, []);
}

export default ResetBtn;
