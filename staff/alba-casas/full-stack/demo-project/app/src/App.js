import logo from "./logo.svg";
import "./App.css";
import { validators } from "commons";
const { validateString } = validators;

function App() {
  const search = (event) => {
    event.preventDefault();

    const query = event.target.query.value;

    try {
      validateString(query, "query");

      alert("todo ok");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={search}>
          <input type="text" name="query" />
          <button>Search</button>
        </form>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
