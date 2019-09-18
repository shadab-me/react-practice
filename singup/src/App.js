import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);


  }

  handleChange(e){
      let target = e.target;
      let value = target.type === 'email'? '': target.value; 
      let password = target.password
      
      this.setState({
        [email]: value,
        [password]: password
      })
  }
  


render(){
 
  return(
    <div className = "App">
     <div className = "App__Aside"></div>
     <div className = "App__Form">
     
     <form onSubmit = {this.handleSubmit}>

     <input type = 'Email' placeholder = 'Enter Your Email' value = {this.state.email} onChange = {this.handleChange}></input>
     <br></br>
     <input type = 'password' placeholder = 'Enter Your password' value = {this.state.password} onChange  = {this.handleChange}></input>
     <br></br>
     <button type = 'submit'>Submit</button>
     </form>
     
     </div>


    </div>
  )

  }
}
export default App;
