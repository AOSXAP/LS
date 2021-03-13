import React,{useEffect,useState} from 'react';
import { Text, View, StyleSheet ,ScrollView} from 'react-native';
import * as firebase from 'firebase';
import 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { TextInput,Button } from 'react-native-paper';
import getOneTimeLocation from './components/getLocation';
import Clipboard from '@react-native-community/clipboard';

const userId = uuidv4();

const initialize = () => {
  var firebaseConfig = {
    apiKey: 'AIzaSyBRT55m8nz_sWQFNVk3KjsGrVzuFLcAP3E',
    authDomain: 'rnaosx.firebaseapp.com',
    databaseURL: 'https://rnaosx.firebaseio.com',
    projectId: 'rnaosx',
    storageBucket: 'rnaosx.appspot.com',
    messagingSenderId: '430779929325',
    appId: '1:430779929325:web:ff55021b129dc8c23df2e4',
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

initialize();

export default function App() {
  const [text, setText] = React.useState('');
  const [messages , setMessages] = useState([]);

  async function writeUserData(message){
    let type = "mess";
    if(message =='/loc'){
      let location = await getOneTimeLocation();
      message = `latitude : ${location.latitude} and longitude : ${location.longitude}.`;
    }else if(message == '/map'){
      let location = await getOneTimeLocation();
      message = `https://www.latlong.net/c/?lat=${location.latitude}&long=${location.longitude}`;
      type="link";
    }

    firebase.database().ref('messages/' + uuidv4()).set({
      message: message,
      username:userId,
      type,
      date:Date.now()
    });
    setText('');
  }

  useEffect(() => {
    firebase.database().ref('/messages').on('value', (snapshot) => {
      const data = snapshot.val();
      if (data != null){
      let sorted = Object.values(data).sort((a, b) => a.date - b.date);
      setMessages(sorted);
      }
    });
  },[])


  return(
  <>
    <ScrollView style={{marginBottom:110}}>
    {messages!= null? Object.values(messages).map((ob) => (
       <ChatMessage el={ob.username} message={ob.message} />
    ))
    : <Text>write a msg</Text>}
    </ScrollView>

  <View style={{position:'absolute',bottom:0,width:'100%'}}>
    <TextInput
      label="Text"
      value={text}
      onChangeText={text => setText(text)}
    />
      <Button style={{width:'103%', transform:[{translateX:-10}]}} mode="contained" onPress={() => writeUserData(text)}>
          Send !
      </Button>
  </View>

  
  </>
  )
}

function ChatMessage(props) {
  const { el, message } = props;
  const messageClass = el === userId ? stylex.sent : stylex.recived;
  const divStyle = el === userId ? stylex.divsent : stylex.divrecived;

  return (
    <>
      <View key={el} style={divStyle}>
        {props.type="mess"? <Text style={messageClass}>{message}</Text> : <Text style={messageClass}>{message}</Text>}
      </View>
    </>
  );
}


const stylex = StyleSheet.create({
    sent:{backgroundColor:'#6200dd', color:'white',padding:10,borderRadius:20},
    recived:{color:'white',backgroundColor:'#a6a6a6',padding:10,borderRadius:20},
    divsent:{marginTop:15,marginRight:5,width:'100%',borderRadius:20,alignItems: 'flex-end'},
    divrecived:{marginTop:15,marginLeft:5,width:'100%',borderRadius:20,alignItems:'flex-start'}
})
