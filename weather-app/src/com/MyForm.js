import React from 'react';
import './MyForm.css'
function MyFrom (props){
    return(
        <div className = "Form-section">
        <form onSubmit = {props.weather}>
        <input type = "text" name="city" placeholder = "Enter City "></input>

        
        <input type = "text" name="country" placeholder = 'Enter Country'></input>


        <input type = 'submit' value = 'submit' className = "btn-submit"></input>
        </form>
        </div>
    )
}
export default MyFrom;