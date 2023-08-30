function City({nameCity, cityData}){
    return (
        <div>
            {cityData[nameCity] ? (
                    <div>
                        <p>Name: {cityData[nameCity].name}</p>
                        <p>Description: {cityData[nameCity].description}</p>
                        <p>Population: {cityData[nameCity].population}</p>
                    </div>
                ) :
                <p>City not found</p>}
        </div>
    )
}

export default City;
