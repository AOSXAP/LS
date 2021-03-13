import * as firebase from "firebase";
import "firebase/database";
import React, { useState } from "react";
import getOneTimeLocation from './components/getLocation';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
import * as SMS from 'expo-sms';
import initFirebase from './components/initFirebase';
initFirebase();


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

  const doubleF = async() => {
    setLocationStatus("Please Wait...");
  let datax = await getOneTimeLocation();
   await uud(datax.latitude, datax.longitude, datax.data, datax.time);
   setLatitude(datax.latitude);
   setLongitude(datax.longitude);
  setLocationStatus("Location sent");
  };

    const sendSMS = async() => {
    setLocationStatus("Please Wait...");
    let datax = await getOneTimeLocation();
    let m = datax;
      const isAvailable = await SMS.isAvailableAsync();
      if (isAvailable) {
        setLatitude(m.latitude);setLongitude(m.longitude);
        const string = `My latitude is : ${m.latitude} and longitude :${m.longitude}, I need help!`
          await SMS.sendSMSAsync(
              ['0772248796'],string
            );
            setLocationStatus("Message ready to send");
      } else {
        console.log('error');
      }
    }

  return (
    <ScrollView style={{ flex: 1,backgroundColor:'white'}}>
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
            height:300
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
          
          <TouchableOpacity
              style={{
                position: "relative",
                backgroundColor: "#6200EE",
                paddingVertical: 10,
                width: 160,
                borderRadius: 100,
                marginTop: 30,
              }}
              onPress={sendSMS}
            > 
              <Text style={{ color: "white", textAlign: "center" }}>
              Send location(SMS)
              </Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
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
