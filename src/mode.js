// import useEffect
import "./App.js";
import { useEffect } from "react";

// dark mode
function ModeBtn() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const button = document.querySelector(".dark-mode");
    const p = document.querySelector(".p-text");
    const container = document.querySelector(".container");
    const gameHeading = document.querySelector(".title");
    const score = document.querySelector(".score");
    const choosingPartComp = document.querySelector(".choosing-part-comp");
    const choosingPartUser = document.querySelector(".choosing-part-user");
    const i = document.querySelector(".fas");

    button.addEventListener("click", () => {
      darkModeIcon();
      body();
      socialButtons();
      navBarP();
      mainContainer();
      heading();
      scoreColor();
      choosingText();
      choosingPart();

      if (document.querySelector(".fa-sun")) {
        // console.log("sun detected");
        p.innerText = "light Mode";
      } else {
        // console.log("moon detected");
        p.innerText = "Dark Mode";
      }
    });

    function choosingPart() {
      choosingPartComp.classList.toggle("choosing-part-comp-dark");
      choosingPartUser.classList.toggle("choosing-part-user-dark");
    }

    function choosingText() {
      let element = document.querySelectorAll(".choosing-text");
      element.forEach((text) => {
        text.classList.toggle("choosing-text-dark");
      });
    }
    function darkModeIcon() {
      let btn = document.querySelector(".dark-mode");
      btn.classList.toggle("nav-btn-color");
      btn.classList.toggle("dark-mode-button");

      i.classList.toggle("fa-moon-o");
      i.classList.toggle("fa-sun");
    }

    function body() {
      let element = document.body;
      element.classList.toggle("dark-mode-body");
    }

    function socialButtons() {
      let element = document.querySelectorAll(".social-btn");
      element.forEach((btn) => {
        btn.classList.toggle("social-btn-dark");
      });
    }

    function navBarP() {
      //   let element = document.querySelector(".p-text");
      p.classList.toggle("p-color");
      p.classList.toggle("p-color-dark");
    }

    function mainContainer() {
      //   let element = document.querySelector(".container");
      container.classList.toggle("container-light");
      container.classList.toggle("container-dark");
    }

    function heading() {
      //   let element = document.querySelector(".title");
      gameHeading.classList.toggle("title-light");
      gameHeading.classList.toggle("title-dark");
    }

    function scoreColor() {
      //   let element = document.querySelector(".score");
      score.classList.toggle("score-light");
      score.classList.toggle("score-dark");
    }
  }, []);
}

export default ModeBtn;
