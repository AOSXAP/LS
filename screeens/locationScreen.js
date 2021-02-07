import * as firebase from "firebase";
import "firebase/database";
import React, { useState } from "react";
import { Appbar } from "react-native-paper";

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Button,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";

  var firebaseConfig = {
    apiKey: "AIzaSyAcnjtDLee5E2kTULRDWI1bHzjXOhre9jE",
    authDomain: "rnaosx.firebaseapp.com",
    databaseURL: "https://rnaosx.firebaseio.com",
    projectId: "rnaosx",
    storageBucket: "rnaosx.appspot.com",
    messagingSenderId: "430779929325",
    appId: "1:430779929325:web:b2a1506db556a9e33df2e4",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

const locationScreen = ({ navigation }) => {
  var [latitude, setLatitude] = useState("unknown");
  var [longitude, setLongitude] = useState("unknown");
  var [locationStatus, setLocationStatus] = useState("Find Location");

  const xd = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    var x = '';
    for(var i = 0; i<5;i++){
      const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
      const randomNum = Math.floor(Math.random() * 10);
      x = x + randomCharacter + randomNum;
    }
    return x;
  };

  const uud = (a, b, c, d) => {
    firebase
      .database()
      .ref("locations/" + xd())
      .set({
        latitude: a,
        longitude: b,
        data: c,
        time: d
      });
  };

  const getOneTimeLocation = async (uud) => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setLocationStatus("Permission to access location was denied");
    }
    //time
    var today = new Date();
    data =today.getFullYear() + "-" +(today.getMonth() + 1) + "-" + today.getDate();
    time =today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    let location = await Location.getCurrentPositionAsync({});
    const latitude = JSON.stringify(location.coords.latitude);
    const longitude = JSON.stringify(location.coords.longitude);
    return{
      latitude,
      longitude,
      time,
      data
    }
  };

  const doubleF = async() => {
    setLocationStatus("Please Wait...");
  let datax = await getOneTimeLocation();
   await uud(datax.latitude, datax.longitude, datax.data, datax.time);
   setLatitude(datax.latitude);
   setLongitude(datax.longitude);
  setLocationStatus("Location sent");
  };

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'white'}}>
      <View
        style={{
          width: "100%",
          display: "flex",
          marginTop: 50,
          justifyContent: "center",
          textAlign: "center",
          flex: 1,
          margin:0
        }}
      >
        <Image
          style={{
            width: "100%",
            alignSelf:'center',
            marginTop: 45,
            flex: 0.6,
          }}
          source={require("./assets/undraw_Navigation_re_wxx4.png")}
        />
      </View>
      <View style={styles.container}>
            <Text style={styles.boldText}>{locationStatus}</Text>
            <Text style={{ justifyContent: "center", alignItems: "center" }}>
              Latitudine : {latitude}
            </Text>
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              Longitudine : {longitude}
            </Text>
            <TouchableOpacity
              style={{
                position: "relative",
                backgroundColor: "#6200EE",
                paddingVertical: 10,
                width: 160,
                borderRadius: 100,
                marginTop: 30,
              }}
              onPress={doubleF}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Send my location
              </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  boldText: {
    fontSize: 25,
    color: "#1D80C4",
    marginVertical: 25,
    color: "#6200EE",
  }
});

export default locationScreen;
