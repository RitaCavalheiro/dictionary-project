import book from "./book.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary</header>
      <img
        src={book}
        className="book img-fluid"
        alt="book with letters comming out of it"
      ></img>
    </div>
  );
}

export default App;
