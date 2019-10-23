import React, {useState, useEffect } from 'react';
function Events() {

        useEffect(() => {
   fetchItems();
}, []);
const [items, setItems] = useState('[]')

        const fetchItems = async () => {
               const data = await fetch('https://fortnite-public-api.theapinetwork.com/upcoming/get');
               const DataJson = await data.json();
               console.log(items);
               setItems(items.items)
        };
        return(
            <div>
             <h1>Hey</h1>
     <div>
{items.map(item => {
    <h1>{item.name}</h1>
})}
  </div>
  </div>
         );
    
    }
    
export default Events;