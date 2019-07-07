import React from 'react';
import MyTitle from './com/MyTitle';
import MyForm from './com/MyForm';
class App extends React.Component{
 

  getWeather = (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  const API_Key = '7e75071161dfbce874f9149abbfdcba2';
  const data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`).then(data => data.json());
  console.log(data);
  }
  

  


  render(){
    return(
      <div className = "App">
      <MyTitle/>
      <MyForm weather = {this.getWeather}/>
    </div>
     )
  }


}
export default App;