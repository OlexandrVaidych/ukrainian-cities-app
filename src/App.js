import './App.css';
import {useState} from "react";

function App() {
    const [name, setName] = useState('');

    const changeName = (event) => {
        setName(event.target.value);
    }

    const showName = () => {
        console.log(name);
    }

  return (
    <div className="App">
      <header>
        <h1>Ukrainian Cities</h1>
      </header>
        <div>
            Enter city name:<br/>
            <input
                type="text"
                onChange={changeName}
            /><br/>
            <button onClick={showName}>Show information</button>
        </div>
    </div>
  );
}

export default App;
