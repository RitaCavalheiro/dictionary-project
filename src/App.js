import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">Be a sesquipedalian</header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <small>Open-source coded by Rita Cavalheiro</small>
      </footer>
    </div>
  );
}

export default App;
