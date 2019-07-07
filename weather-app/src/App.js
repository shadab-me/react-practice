import React from 'react';
import MyTitle from './com/MyTitle';
import MyForm from './com/MyForm';
import Weather from './com/weather'
 class App extends React.Component{
 state = {
   name:undefined,
   temp:undefined,
   des:undefined
 }

  getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  console.log(city);

  const API_Key = '7e75071161dfbce874f9149abbfdcba2';
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`).then(data => data.json());
  console.log(data);
this.setState({
  name:data.name,
  temp:data.main.temp,
  des:data.weather[0].description
 })

  }
  

  


  render(){
    return(
      <div className = "App">
      <MyTitle/>
      <MyForm weather = {this.getWeather}/>
      <Weather  name = {this.state.name}
                des = {this.state.des}
                temp = {this.state.temp}
      
      />
      
    </div>
     )
  }


}
export default App;