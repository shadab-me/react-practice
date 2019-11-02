 import React from 'react' 
 class Events extends React.Component{
         state = {
                 items: []
         }
         fetchItems() {
                 async () => {
                const data = await fetch('https://fortnite-public-api.theapinetwork.com/upcoming/get');
                const items = await data.json();
                console.log(items);
                setItems(items.items)
         };
        }
         render(){
                 return(
                        <div className = 'Apps'> 
                        {items.map(item => (<h1>{item.name}</h1> ))}
                          </div>
                 )
         }
 }

        
        
    
     
export default Events;