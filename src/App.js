import './App.css';
import {useState} from "react";
import CityName from "./CityName";

function App() {
    const [name, setName] = useState('');

    const [updated, setUpdated] = useState(name);

    const changeName = (event) => {
        setName(event.target.value);
    }

    const handleClick = () => {
        setUpdated(name);
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
            <button onClick={handleClick}>Show information</button>
            <CityName name={updated}/>
        </div>
    </div>
  );
}

export default App;
