/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image, SafeAreaView, ImageBackground
} from 'react-native';
import { globalStyles } from '../app/styles/global';
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const SettingsScreen = ({ navigation }) => {
  const [blogs, setBlogs] = useState([])
  const fetchBlogs = async () => {
    const response = firestore().collection('Orders');
    const data = await response.get();
    data.docs.forEach(item => {
      setBlogs(item.data)
    })
  }
  useEffect(() => {
    fetchBlogs();
  }, [])
  const clearList = () => {
    clearOrderedItems();
  }

  return (
    <SafeAreaView
      style={styles.container}
    >
      <ImageBackground
      source={require('../app/assets/ChairTable.jpeg')}
      style={{height:700}}
    >
      <Text style={globalStyles.screenHeader}>
        YOUR ORDER
      </Text>
      {
        blogs && blogs.map(blog => {
          return (
            <div className="blog-container">
              <h4 style={styles.nameO}>{blog.name}</h4>
              <p>{blog.price}</p>
            </div>
          )
        })
      }
      </ImageBackground>
    </SafeAreaView>
  )
};

export default SettingsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    height: 1000,
  },
  nameO: {
    color: '#000'
  },
  userContainer: {
    flexDirection: 'row',
  },
  userProf: {
    height: 120,
    width: 120,
    backgroundColor: 'blue',
    borderRadius: 100,
    borderWidth: 1,
    borderBottomColor: 'green',
    marginVertical: 10,
  },
  userName: {
    color: '#000',
    fontSize: 22,
    marginLeft: 85,
    marginBottom: 20,
  },
  star: {
    color: '#000',
    marginBottom: 15,
    fontSize: 16,
  },
  doMore: {
    color: 'grey',
    paddingVertical: 6,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  moneyDriving: {
    color: '#000',
    paddingVertical: 6,
  },
  buttonText: {
    color: 'white',
  },
  signup: {
    backgroundColor: '#0F172A',
    padding: 12,
    borderRadius: 13,
    marginTop: 20,
    width: 290,
    height: 47,
    alignItems: 'center',
    marginLeft: 6,
  },
  image: {
    width: 160,
    height: 160,
    marginLeft: 75,
  },
});
