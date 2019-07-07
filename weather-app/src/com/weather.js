import React from 'react';
function Weather(props){
    return(
        <div>
        <p>{props.tem}</p>
         <p>{props.name}</p>
         <p>{props.des}</p>

        </div>
    )
}
export default Weather;