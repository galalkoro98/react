import { gameRules } from "./rules.js";
import { userScore, compScore } from "./handler.js";
import { MyButtonList } from "./listener.js";

export const { userChoice } = MyButtonList();

// export const game = () => {
const compChoice = Object.keys(gameRules)[Math.floor(Math.random() * 5)];
const result = gameRules[userChoice][compChoice];

if (result === "win") {
  userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
} else if (result === "lose") {
  compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
} else if (result === "draw") {
  userScore.innerHTML = parseInt(userScore.innerHTML);
  compScore.innerHTML = parseInt(compScore.innerHTML);
}
// };
