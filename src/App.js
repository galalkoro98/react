import React from "react";
import "./index.css";
import MyButtonList from "./init.js";
import ResetBtn from "./reset.js";
import ModeBtn from "./mode.js";

function MyComponent() {
  return (
    <>
      <MyButtonList />
      <ResetBtn />
      <ModeBtn />

      <div className="main-header">
        <div className="navbar">
          <ul className="nav-ul">
            <li className="first-li">
              <button
                className="social-btn nav-btn-color"
                title="partha's github profile"
              >
                <i className="fab fa-github"></i>
              </button>
            </li>

            <li className="last-li">
              <p className="p-text p-color">Dark Mode</p>
              <button className="nav-btn-color dark-mode" title="change theme">
                <i className="fas fa-moon"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="container container-light">
        <header>
          <div className="title title-light">
            <p>Rock</p>
            <p>Paper</p>
            <p>Scissors</p>
            <p>Lizard</p>
            <p>Spock</p>
          </div>
          <div className="score score-light">
            <p>
              Computer: <span id="comp_score">0</span>
            </p>
            <p>
              User: <span id="user_score">0</span>
            </p>
          </div>
        </header>

        <div className="main-part">
          <button id="button-0" value="Rock">
            <i className="far fa-hand-rock"></i>
          </button>
          <button id="button-1" value="Paper">
            <i className="far fa-hand-paper"></i>
          </button>
          <button id="button-2" value="Scissors">
            <i className="far fa-hand-scissors"></i>
          </button>
          <button id="button-3" value="Lizard">
            <i className="far fa-hand-lizard"></i>
          </button>
          <button id="button-4" value="Spock">
            <i className="far fa-hand-spock"></i>
          </button>
        </div>

        <div className="reset">
          <button id="reset" title="reset score">
            <i className="fas fa-redo-alt"></i>
          </button>
        </div>

        <div className="last-part">
          <p className="choosing-part-comp p-light" id="compChoice"></p>
          <p className="choosing-part-user p-light" id="userChoice"></p>
          <p id="result"></p>
        </div>
      </div>
    </>
  );
}

export default MyComponent;
