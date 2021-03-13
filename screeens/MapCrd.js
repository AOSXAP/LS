import * as React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Map(){
 const navigation = useNavigation(); 
  return(
  <Card style={{borderRadius:15}}>
    <Card.Title title="Map" subtitle="Explore your surroundings!" />
    <Card.Content>
      <Paragraph>See your location on map!</Paragraph>
    </Card.Content>
    <Card.Cover source={require('./assets/nasa-_SFJhRPzJHs-unsplash.jpg')} />
    <Card.Actions>
      <Button onPress={()=>{navigation.navigate('Map')}}>Ok</Button>
    </Card.Actions>
  </Card>
  )
};
