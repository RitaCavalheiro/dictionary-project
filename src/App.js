import React from "react";
import "./App.scss";
import Dictionary from "./Dictionary";
import Owl from "./Owl";

function App() {
  return (
    <div className="App">
      <div className="page-bg"></div>

      <div className="animation-wrapper">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>
      <header>
        <h1>Be a sesquipedalian</h1>
      </header>
      <div className="container">
        <Owl />
      </div>
      <main>
        <Dictionary defaultKeyword="owl" />
      </main>
      <footer>
        <small>
          <a
            href="https://github.com/RitaCavalheiro/dictionary-project"
            target="_blank"
            rel="noreferrer"
            className="gitLink"
          >
            Open-source
          </a>{" "}
          coded by Rita Cavalheiro
        </small>
      </footer>
    </div>
  );
}

export default App;
