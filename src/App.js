import './App.css';
import {useState} from "react";
import City from "./City";
import cityData from "./cities.json";

function App() {
    const [name, setName] = useState('');

    const [updated, setUpdated] = useState(name);

    const [display, setDisplay] = useState(false);


    const changeName = (event) => {
        setName(event.target.value);
    }

    const handleClick = () => {
        setUpdated(name.toLowerCase());
        setDisplay(true);
    }

  return (
    <div className="App">
      <header className="Header">
        <h1>Ukrainian Cities</h1>
      </header>
        <div className="Container">
            <div className="Input">
                <input
                    type="text"
                    onChange={changeName}
                    placeholder="Enter city name"
                /><br/>
            </div>
            <div className="Show">
                <button onClick={handleClick}>Show information</button>
            </div>
            {display && <City nameCity={updated} cityData={cityData}/>}
        </div>
    </div>
  );
}

export default App;
