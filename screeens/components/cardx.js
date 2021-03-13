import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

export default function MyComponent (){
    const navigation = useNavigation(); 
    return(<Card style={{borderRadius:13}}>
      <Card.Content>
        <Title titleStyle={{color:'6200dd'}}>Check out the Weather!</Title>
        <Paragraph>Check out the weather!</Paragraph>
      </Card.Content>
      <Card.Cover source={ require('../assets/jonathan-bowers-BqKdvJ8a5TI-unsplash.jpg')}/>
      <Card.Actions>
        <Button onPress={()=>{navigation.navigate('Weather')}}>Weather</Button>
      </Card.Actions>
    </Card>)
};