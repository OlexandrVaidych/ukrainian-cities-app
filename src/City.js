import "./City.css"

function City({nameCity, cityData}){
    return (
        <div>
            {cityData[nameCity] ? (
                    <div>
                        <p>{cityData[nameCity].name}</p>
                        <img src={cityData[nameCity].img} alt="City image" className="Image"/>
                        <p>Description: {cityData[nameCity].description}</p>
                        <p>Population: {cityData[nameCity].population}</p>
                    </div>
                ) :
                <p>City not found</p>}
        </div>
    )
}

export default City;
