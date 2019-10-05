import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

 constructor(props) {
   super(props);
   this.state = {count: 0};
 }

 tick(){
  this.setState({
    count: count + 1,
  });

}

render() {
return(

    <div>
    <h1>{this.state.count}</h1>
<button onClick = {this.tick}>Click Me</button>
</div>


  )
}


}
export default App;