import * as React from 'react';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(true);
  const navigation = useNavigation();
  return (
    <Banner
    style={{margin:13,borderRadius:13}}
      visible={visible}
      actions={[
        {
          label: 'chatbot',
          onPress: () => navigation.navigate('Chatbot'),
        },        {
          label: 'chat',
          onPress: () => navigation.navigate('Chat'),
        }
      ]}
      icon={({size}) => (
        <Image
          source={require('../images/lf.png')}
          style={{
            width: size,
            height: size,
          }}
        />
      )}>
      
      Use our chatbot in dangerous situations, or talk with others using our chat service.
    </Banner>
  );
};

export default MyComponent;