import React from 'react';
import {View,Dimensions,ScrollView,Linking} from 'react-native';
import { Tile,PricingCard,SocialIcon  } from 'react-native-elements';
import Cardx from './components/card';
import Bannerx from './components/banner'

export default function HomeScreen({navigation}) {
    const windowWidth = Dimensions.get('window').width;
    return (
        <ScrollView>
        <Tile
            height={250}
            imageSrc={require('./images/nasa-Q1p7bh3SHj8-unsplash.jpg')}
            title="Explore the World"
            featured
            caption="Help others!"
            style={{alignSelf:"stretch"}}
            onPress={()=>{navigation.navigate('Help Others')}}
        />
        <View style={{margin:15}}>
         <Cardx />
        </View>


        <PricingCard
        containerStyle={{borderRadius:13}}
            color='#6200EE'
            title='Protect the environment!'
            titleStyle={{fontSize:25}}
            price="Save a forest!"
            pricingStyle={{fontSize:20}}
            info={['Notify The Forest Protecters about polluted or dangerous areas']}
            button={{ title: 'GET STARTED'}}
        />

        <Bannerx />

        <SocialIcon
        title='APP DOCS AND SUPPORT'
        button
        onPress={()=> Linking.openURL('https://github.com/AOSXAP/LifeSaver-Code') }
        type='github'
        style={{margin:13}}
        />


        </ScrollView>
    );
}
