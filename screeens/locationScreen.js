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

var database = firebase.database();

const locationScreen = ({ navigation }) => {
  var [latitude, setLatitude] = useState(null);
  var [longitude, setLongitude] = useState(null);
  var [data, setData] = useState(null);
  var [time, setTime] = useState(null);
  var [locationStatus, setLocationStatus] = useState("Find Location");
  const xd = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  const uud = (a, b, c, d) => {
    firebase
      .database()
      .ref("locations/" + xd())
      .set({
        latitudine: a,
        longitudine: b,
        data: c,
        timp: d,
      });
  };
  var today = new Date();
  const getOneTimeLocation = async (uud) => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setLocationStatus("Permission to access location was denied");
    }
    var today = new Date();
    data =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    setTime(time);
    setData(data);
    let location = await Location.getCurrentPositionAsync({});
    const latitude = JSON.stringify(location.coords.latitude);
    const longitude = JSON.stringify(location.coords.longitude);
    setLatitude(latitude);
    setLongitude(longitude);
  };

  const doubleF = () => {
    getOneTimeLocation();
    uud(latitude, longitude, data, time);
    setLocationStatus("Location sent");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header style={{ justifyContent: "center" }}>
        <Appbar.Content
          style={{ justifyContent: "center" }}
          title="LifeSaver"
        />
      </Appbar.Header>
      <View
        style={{
          width: "100%",
          display: "flex",
          marginTop: 45,
          justifyContent: "center",
          textAlign: "center",
          flex: 1,
        }}
      >
        <Image
          style={{
            height: 250,
            width: 300,
            width: "100%",
            display: "flex",
            marginTop: 45,
            flex: 1,
          }}
          source={require("./assets/undraw_Navigation_re_wxx4.png")}
        />
      </View>
      <View style={styles.container}>
        <View>
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
              marginTop: 10,
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
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <TouchableOpacity
          style={{
            position: "relative",
            backgroundColor: "#6200EE",
            paddingVertical: 20,
            width: 160,
            marginTop: 10,
            marginTop: 30,
            width: "100%",
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Back to Home
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
    flex: 1,
  },

  boldText: {
    fontSize: 25,
    color: "#1D80C4",
    marginVertical: 23,
    color: "#6200EE",
  },
});

export default locationScreen;
