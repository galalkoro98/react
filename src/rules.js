// This file contains the rules of the game. It is a simple object that maps the
// winning and losing conditions of the game. The keys of the object are the
// choices of the player and the values are objects that map the choices of the
// computer to the result of the game.

export const gameRules = {
  Rock: {
    Rock: "draw",
    Scissors: "lose",
    Paper: "win",
    Spock: "win",
    Lizard: "lose",
  },
  Paper: {
    Paper: "draw",
    Rock: "lose",
    Scissors: "win",
    Lizard: "win",
    Spock: "lose",
  },
  Scissors: {
    Scissors: "draw",
    Paper: "lose",
    Rock: "win",
    Lizard: "lose",
    Spock: "win",
  },
  Lizard: {
    Scissors: "win",
    Paper: "lose",
    Rock: "win",
    Lizard: "draw",
    Spock: "lose",
  },
  Spock: {
    Scissors: "lose",
    Paper: "win",
    Rock: "lose",
    Lizard: "win",
    Spock: "draw",
  },
};
