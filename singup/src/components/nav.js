import React from 'react';
import { Link } from 'react-router-dom';
 
class Nav extends React.Component{
render(){
    return(
        <ul>
        <Link to='/'><li>Home</li></Link>
       
        <Link to='/about'><li>About</li></Link> 
        <Link to ='/todo'><li>Todo</li></Link>
        
        
        </ul>
    )
}

}
export default Nav;