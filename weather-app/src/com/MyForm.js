import React from 'react';
function MyFrom (props){
    return(
        <div>
        <form onSubmit = {props.weather}>
        <input type = "text" name="city" placeholder = "Enter City "></input><br></br>
        <input type = "text" name="country" placeholder = 'Enter Country'></input><br></br>
        <input type = 'submit' value = 'submit'></input>
        </form>
        </div>
    )
}
export default MyFrom;