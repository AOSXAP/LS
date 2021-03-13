import React,{useEffect,useState} from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
const fetch = require('node-fetch');
import { ListItem, Avatar } from 'react-native-elements'

export default function App() {
  let [datax,setDatax] = useState([]);

  useEffect(() =>{
     fetch('https://scrape.aosxap.repl.co')
              .then(response => response.json())
              .then(data => {setDatax(data)});
  },[])


  return (
    <>
      <ScrollView>
          {
            datax.map((l, i) => (
              <ListItem key={i} bottomDivider>
                <ListItem.Content>
                  <Avatar source={{uri: `http://openweathermap.org/img/w/${l.weather[0].icon}.png`}} />
                  <ListItem.Title>{l.name}</ListItem.Title>
                  <ListItem.Subtitle>Temperature : {l.main.temp} C and it feels like : {l.main.feels_like} C</ListItem.Subtitle>
                  <ListItem.Subtitle>Pressure is {l.main.pressure} hPa and humidity : {l.main.humidity}%</ListItem.Subtitle>
                  <ListItem.Subtitle>Weather : {l.weather[0].main} , wind speed : {l.wind.speed} km/h</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))
          }
        </ScrollView>
    </>
  );
}
