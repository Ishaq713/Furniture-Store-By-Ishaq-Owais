import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Pressable,
    Text,
    StyleSheet,
    View,  
    ImageBackground,
    Image
    
} from 'react-native';
import ChairSection from '../components/ChairSection'

import { globalStyles } from '../styles/global';
import data from '../data/ChairSection.json'

const ChairSectionScreen = () => {
   const menu = data.items[0].entries.items;
    return (
        <SafeAreaView>
             <ImageBackground
      source={require('../assets/ChairTable.jpeg')}
      style={{height:700}}
    >
        
            <Text style={globalStyles.screenHeader}>
                Chairs 
            </Text>
             <Image style={styles.img1}
                source={require('../assets/Chair.png')}
                          >               
            </Image>
            <ScrollView>
                {menu.map((section, i) => <MenuSection section={section} key={i} />)}
            </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
   
      img1:{
      marginTop:10,
      marginLeft:150,
      height:75,
      width:60,
      marginBottom:20

  },
})

export default ChairSectionScreen;