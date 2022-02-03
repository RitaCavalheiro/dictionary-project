import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Be a sesquipedalian</h1>
      </header>
      <main>
        <Dictionary />
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
