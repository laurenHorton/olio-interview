import logo from './logo.svg';
import './App.css';
import Articles from './Articles';

function App() {

  return (
    <div className="App">
      <header className="">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <body>
        <Articles />
      </body>
    </div>
  );
}

export default App;
