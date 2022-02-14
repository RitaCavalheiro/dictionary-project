import React from "react";
import "./App.scss";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div class="page-bg"></div>

      <div class="animation-wrapper">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
      </div>
      <header>
        <h1>Be a sesquipedalian</h1>
      </header>
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
