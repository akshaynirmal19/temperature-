import React, { useEffect, useState } from "react";





function Wheather(){

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Mumbai");

    useEffect(()=> {

        const fetchApi = async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9f5dbfc4f636956084a944b06c6e7a26`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }

        fetchApi();


    },[search])

    function inputEvent(e){

        setSearch(e.target.value);

    }


    return( 
    <>


    <div className="box">
        <div className="inputData">

        <input type="search" value={search} className="inputFeild" onChange={inputEvent}/>


        </div>

        {!city ?(<p className="p">No Data Found</p>):( 
            <div>

        <div className="info">
        <h2 className="location"><i className="fa-solid fa-street-view"></i> {search} </h2>
        <h1 className="temp">{city.temp}°C </h1>
        <h3>Min: {city.temp_min}°C| Max: {city.temp_max}°C</h3>

        </div>
        <div className="wave1"></div>
        <div className="wave2"></div>
        <div className="wave3"></div>
        </div>
        )}
    </div>
    
</>

   


);


}


export default Wheather;