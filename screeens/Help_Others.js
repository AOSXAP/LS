import React,{useState,useEffect} from 'react';
import {View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as firebase from 'firebase';
import 'firebase/database';


   var firebaseConfig = {
    apiKey: "AIzaSyBRT55m8nz_sWQFNVk3KjsGrVzuFLcAP3E",
    authDomain: "rnaosx.firebaseapp.com",
    databaseURL: "https://rnaosx.firebaseio.com",
    projectId: "rnaosx",
    storageBucket: "rnaosx.appspot.com",
    messagingSenderId: "430779929325",
    appId: "1:430779929325:web:ff55021b129dc8c23df2e4"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function All(){
  const [datay,setDatay] =useState([]);
      
  useEffect(()=>{
      var data = firebase.database().ref('locations/');
      data.once('value', (snapshot) => {
        setDatay(Object.values(snapshot.val()));
      });
  },[])

  return(
    <MapView
        style={{ flex: 1,minHeight:950}}
    >
    
    {datay.map((i,index) => <Marker key={index} title={'Signal sent from'} description={`Latitude : ${i.latitude} , longitude: ${i.longitude}`} coordinate={{ latitude: parseFloat(i.latitude), longitude: parseFloat(i.longitude)}}/>)}
      
    </MapView>
  )
  }

export default function App() {
  return (
    <View>
      <All />
    </View>
  );
}

