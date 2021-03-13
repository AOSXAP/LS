// Dependencies
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Screens
import HomeScreen from './screeens/Home';
import Help_Others from './screeens/Help_Others';
import Camerax from './screeens/camera';
import Botx from './screeens/bot';
import LSX from './screeens/locationScreen';
import Chat from './screeens/Chat';
import Weather from './screeens/Meteo';
import Map from './screeens/Map';
//Code
const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen  name="HelpOthers" component={Help_Others} />
        <Stack.Screen
          name="Camera"
          component={Camerax}
        />
        <Stack.Screen
          name="Chatbot"
          component={Botx}
        />
        <Stack.Screen
          name="Location"
          component={LSX}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
        />
        <Stack.Screen
          name="Weather"
          component={Weather}
        />
        <Stack.Screen
          name="Map"
          component={Map}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

