import React, { useState, useEffect } from 'react';
import { Text, View,Button} from 'react-native';
import { Camera } from 'expo-camera';
import * as firebase from "firebase";
import 'firebase/database';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions'
import "react-native-gesture-handler";

import initFirebase from './components/initFirebase';
initFirebase();

//functii

const randnum = () =>{
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  var x = '';
  for(var i = 0; i<7;i++){
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    const randomNum = Math.floor(Math.random() * 10);
    x = x + randomCharacter + randomNum;
  }
  return x;
}


export default function Camerax() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        ref={(ref) => {
          this.camera = ref;
        }}
        type={type}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "column",
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <Button
            color="#6200EE"
            title="Take Photo"
            onPress={async () => {
              const { status } = await Permissions.askAsync(
                Permissions.CAMERA_ROLL
              );
              if (status === "granted") {
                let photo = await this.camera.takePictureAsync({
                  quality: 0.5,
                  base64: true,
                });
                const response = await fetch(photo.uri);
                const blob = await response.blob();
                var randnum1 = randnum();
                var ref = firebase
                  .storage()
                  .ref(`${randnum1}/file.jpg`)
                  .child("photo");
                await ref.put(blob);

                await MediaLibrary.saveToLibraryAsync(photo.uri);
              } else {
                console.log("Uh oh! The user has not granted us permission.");
              }
            }}
          />
        </View>
      </Camera>
    </View>
  );
}