import "./City.css"

function City({nameCity, cityData}){
    return (
        <div>
            {cityData[nameCity] ? (
                    <div>
                        <h3>{cityData[nameCity].name}</h3>
                        <img src={cityData[nameCity].img} alt="City image" className="Image"/>
                        <p><b>Description</b>: {cityData[nameCity].description}</p>
                        <p><b>Population</b>: {cityData[nameCity].population}</p>
                    </div>
                ) :
                <h3>City not found</h3>}
        </div>
    )
}

export default City;
