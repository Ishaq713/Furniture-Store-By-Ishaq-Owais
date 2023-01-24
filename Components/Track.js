/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import MenuSection from '../app/components/MenuSection'

import { globalStyles } from '../app/styles/global';
import data from '../app/data/menu.json'
export default function Track({ navigation }) {
  const menu = data.items[0].entries.items;

  return (

    <ImageBackground
      source={require('../assets/Menu_BG.jpeg')}
      style={styles.background1}
    >
      <Text
        style={globalStyles.screenHeader}
      >
        Couches
      </Text>
      <Image style={styles.img}
        source={require('../assets/Menu_Screen_icon.png')}
      >
      </Image>

      <ScrollView>
        {menu.map((section, i) => <MenuSection section={section} key={i} />)}
      </ScrollView>
    </ImageBackground>


  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 8,
  },
  image: {
    height: 40,
    width: 40,
    marginLeft: 90,
    marginTop: 66,
  },
  img:{
    marginTop:5,
    marginLeft:140,
    height:100,
    width:100,
    marginBottom:30

},
  home: {
    color: '#fff',
    marginTop: 68,
    marginLeft: 145,
    fontSize: 25,
  },
  viewtreat: {
    marginTop: 30,
    marginLeft: 15,
    flexDirection: 'row',
  },
  view: {
    marginLeft: 47,
    marginTop: 8.5,
    color: '#69a4d5',
  },
  container: {
    backgroundColor: '#69a4d5',
    height: 40,
    width: 40,
    paddingHorizontal: 155,
    paddingVertical: 240,
    margin: 25,
    borderRadius: 14,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  signup: {
    backgroundColor: '#0F172A',
    padding: 13,
    borderRadius: 13,
    marginTop: 190,
    width: 230,
    height: 47,
    alignItems: 'center',
    marginLeft: -115,
  },
});
