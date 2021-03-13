import React,{useState,useEffect} from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as firebase from 'firebase';
import 'firebase/database';
import initFirebase from './components/initFirebase';
initFirebase();

export default function All(){
  const [datay,setDatay] =useState([]);
      
  useEffect(()=>{
      var data = firebase.database().ref('locations/');
      data.once('value', (snapshot) => {
        let newdata = Object.values(snapshot.val());
        newdata.forEach(ob => {
          ob.longitude = parseFloat(ob.longitude);
          ob.latitude = parseFloat(ob.latitude);
        });
        setDatay(Object.values(newdata));
      });
  },[])

  return(
    <MapView style={{ flex: 1,minHeight:950}} >

        {datay.map((i,index) => <Marker key={index} title={'Signal sent from'} description={`Latitude : ${i.latitude} , longitude: ${i.longitude}`} 
        coordinate={{ latitude: (i.latitude), longitude: (i.longitude)}}/>)}
        
    </MapView>
  )
  }


