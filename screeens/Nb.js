/*import RNKommunicateChat from 'react-native-kommunicate-chat';


let conversationObject = {
    'appId' : '2e4fbea79f0d59cb04eac91bc562bfc8' 
   }
   RNKommunicateChat.buildConversation(conversationObject, (response, responseMessage) => {
    if(response == 'Success') {
    console.log('Conversation Successfully with id:' + responseMessage);
    }
});

*/

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
  }
}