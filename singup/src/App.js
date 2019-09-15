import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component{
  constructor(props){
    super(props)
  }
render(){
 
  return(
    <div className = 'Form' onSubmit = {this.handleSubmit}>
    <form>
    <input type ="text" placeholder =" Enter Your Yame" value  = {this.state.name}></input><br></br>
    <input type = "email" placeholder = "Enter Your Email"></input><br></br>
    <button type = 'submit' value = 'Submit Now'>Submit</button>
    </form>
    </div>
  )
}
handleSubmit(){
     
}
}
 
nowHandle 

export default App;
