import React from 'react';
import './weather.css';
function Weather(props){

     
    return(
        <div className = "container">
        <p>{props.temp}</p>
         <p>{props.name}</p>
         <p>{props.des}</p>

        </div>
    )
}
export default Weather;