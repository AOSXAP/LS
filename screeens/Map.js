import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import * as Permission from 'expo-permissions'
import getLocation from './components/getLocation';

export default function App(){

  useEffect(() => {
  })
  return(
      <>
        <MapView 
          onMapReady={async() => { await Permission.askAsync(Permission.LOCATION)}} 
          style={{flex:1}} showsUserLocation={true}>
        </MapView>
      </>
  )
}



