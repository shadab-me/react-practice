import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component{
render(){
  return(
    <div className = 'Form'>
    <form>
    <input type ="text" placeholder =" Enter Your Yame"></input><br></br>
    <input type = "email" placeholder = "Enter Your Email"></input><br></br>
    <button type = 'submit' value = 'Submit Now'>Submit</button>
    </form>
    </div>
  )
}

}
 

export default App;
