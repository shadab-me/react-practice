import React from 'react';
import '../components/todo.css';

class Todo extends React.Component{
    
    constructor(){
        super();
 
    }
        render(){
        return(
            <div className = 'ToDo'>
            
            <h1>To Do list</h1>
            <input type = 'text'></input>    
            <button>+</button>
   <ul></ul>
            </div>
        )}
}
export default Todo;