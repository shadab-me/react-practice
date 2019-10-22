import React from 'react';
import logo from './logo.svg';
import './App.css';
 import Par from './components/par';
import Todo from './components/todo';
import Nav from './components/nav';
import About from './components/about';
import Home from './components/home';
import Events from './components/events';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     count: 0
  };

 this.tick = this.tick.bind(this);

 }

 tick(){
  this.setState({
  count: this.state.count+1,
  });

}


render() {
return(
  
  <div className = 'App'>
 
<Par count  = {this.state.count}/>
<h1>{this.state.count}</h1>
<button onClick = {this.tick}>Click Me</button>
<Router>
<Nav/>

<Switch>
<Route path = '/' exact component={Home} /> 
<Route path = '/about' component={About} />
<Route path = '/todo' component={Todo} />
<Route path = '/events' component={Events} />
</Switch>
 </Router>
</div>

);
}
}
 
export default App;
