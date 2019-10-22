import React, {useState, useEffect } from 'react';
function Events() {

        useEffect(() => {
   fetchItems();
}, []);

        const fetchItems = async () => {
               const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
               const DataJson = await data.json();
               console.log(DataJson);
        }
    

    render(){
        return(
            <h>Hey</h>
        )
    }
}
export default Events;