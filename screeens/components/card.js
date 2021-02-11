import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function MyComponent (){
    const navigation = useNavigation(); 
    return(<Card style={{borderRadius:13}}>
      <Card.Content>
        <Title>Are you lost?</Title>
        <Paragraph>Use the button below to get a rescue team!</Paragraph>
      </Card.Content>
      <Card.Cover source={ require('../images/warren-wong-fNUNt9w3m-Q-unsplash.jpg')}/>
      <Card.Actions>
        <Button onPress={()=>{navigation.navigate('Location')}}>SAVE ME!</Button>
      </Card.Actions>
    </Card>)
};