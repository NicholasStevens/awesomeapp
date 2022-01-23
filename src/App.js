import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learning React: Week 2</h1>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World
        </a>
      </header>
      <h1>First time using "React"</h1>
      <p> Where will this show up?? </p>
      <div> <button>hello world</button> </div>
      <a href="wwww.google.com" target="_blank">Click this link</a>
    </div>
  );
}

export default App;
