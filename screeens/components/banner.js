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
          label: 'START',
          onPress: () => navigation.navigate('Chatbot'),
        },
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
      
      Use our realtime chatbot when you are lost or in danger!
    </Banner>
  );
};

export default MyComponent;