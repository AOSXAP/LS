import React from 'react';
import * as Location from "expo-location";

const getOneTimeLocation = async () => {
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

export default getOneTimeLocation;