import React from 'react';
import {View,Dimensions,ScrollView,Linking} from 'react-native';
import { Tile,PricingCard,SocialIcon  } from 'react-native-elements';
import Cardx from './components/card';
import Bannerx from './components/banner'
import { Text,StyleSheet } from 'react-native';

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

        <Bannerx />

        <PricingCard
        onButtonPress={()=>{navigation.navigate('Camera')}}
        containerStyle={{borderRadius:13}}
            color='#6200EE'
            title='Protect the environment!'
            titleStyle={{fontSize:25}}
            price="Save a forest!"
            pricingStyle={{fontSize:20}}
            info={['Notify The Forest Protecters about polluted or dangerous areas']}
            button={{ title: 'GET STARTED'}}
        />


        <SocialIcon
        title='APP DOCS AND SUPPORT'
        button
        onPress={()=> Linking.openURL('https://github.com/AOSXAP/LifeSaver-Code') }
        type='github'
        style={{margin:13}}
        />

        <View style={Style.container}>
            <Text style={Style.textx}>Take care and have a good time hiking!</Text>
        </View>
        </ScrollView>

    );
}

const Style = StyleSheet.create({
    container:{backgroundColor:'black',height:75,flex: 1,justifyContent: 'center',alignItems: 'center'},
    textx:style={color:'#6200EE'}
})
