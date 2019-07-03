import React from 'react';
import './ListItem.css';

function ListItems(props){
     const items = props.items;
     const ListItems =  items.map(item => 
        
        {
    return <div className = "list" key = {item.key}>
       <p>{item.text} <span onClick ={ ()=> props.deleteItem(item.key) }>X</span></p>
       
     </div>
     
    })
    
    return(
        <div>{ListItems}</div>
     )
}

export default ListItems;