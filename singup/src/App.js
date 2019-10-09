import React from 'react';
import logo from './logo.svg';
import './App.css';
 import Par from './components/par';
import Todo from './components/todo';
import Nav from './components/nav';
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
  <div className = ''>
<Nav/>
<Todo/>
<Par count  = {this.state.count}/>
<h1>{this.state.count}</h1>
<button onClick = {this.tick}>Click Me</button>

</div>
)
}}
export default App;