import React from 'react';
import { Button } from 'react-native';
import {Text, View} from 'react-native';

export default function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Details" onPress={() => {navigation.navigate('Details')}}></Button>
      </View>
    );
}
