import React from 'react';
import { WebView } from 'react-native-webview';


export default function App(){
    return <WebView cacheEnabled={true}  scalesPageToFit={true} startInLoadingState={true} nativeConfig={true} automaticallyAdjustContentInsets={true} 
    source={{ uri: 'https://rnaosx.web.app' }} />;
}