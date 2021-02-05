import * as React from 'react';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Banner
    style={{margin:13,borderRadius:13}}
      visible={visible}
      actions={[
        {
          label: 'START',
          onPress: () => setVisible(false),
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