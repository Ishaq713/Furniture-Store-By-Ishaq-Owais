/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ImageBackground,
  StatusBar
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { Divider, Tab } from 'react-native-elements';

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const login = async () => {
    try {
      const doLogin = await auth().signInWithEmailAndPassword(email, password);
      if (doLogin.user) {
        navigation.replace('drawer');
      }
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  return (

    <View >
      <ImageBackground
        source={require('../assets/Chair.jpg')}
      >
        <Image source={require('../assets/logo_GT.png')} style={styles.imgLogo} />
        <View style={styles.footer}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../assets/email_icon.png')}
              style={styles.email_icon} />
            <TextInput
              style={styles.emailinput}
              placeholder="Your Email"
              value={email}
              onChangeText={setEmail} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../assets/password_icon.png')}
              style={styles.password_icon} />

            <TextInput
              style={styles.emailinput}
              placeholder="Your Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword} />
          </View>

          <Text style={styles.forgotpassword}> Forgot Password ?</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => login(email, password)}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Divider style={{ backgroundColor: 'black', width: 130, height: 1, marginTop: 20, marginRight: 10 }} />
            <Text style={{ marginTop: 18, }} > or </Text>
            <Divider style={{ backgroundColor: 'black', width: 130, height: 1, marginLeft: 10, marginTop: 20, marginRight: 10 }} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              Don't have an Account?
            </Text>
            <Text
              style={styles.signupTextStyle}
              onPress={() => navigation.navigate('Sign')}>
              Sign Up
            </Text>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  registerTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 14,
    alignSelf: 'center',
    marginLeft: 45,
    marginTop: 4,

  },
  signupTextStyle: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 15,
    marginTop: 4,

  },
  imgLogo: {
    marginTop: 50,
    height: 180,
    width: 250,
    marginLeft: 50,


  },
  text: {
    color: 'white',
    fontSize: 24,
    marginTop: 130,
    marginBottom: 30,
    paddingHorizontal: 30,
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
  footer: {
    paddingTop: 30,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 60,
    marginTop: 90,
  },
  email: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottomn: 20,
  },
  emailinput: {
    marginTop: 10,
    marginLeft: 1,
    paddingLeft: 10,
    borderWidth: 2,
    height: 40,
    width: 270,
    borderRadius: 8,
  },
  email_icon: {
    height: 20,
    width: 25,
    marginTop: 19,
    marginRight: 10,
    marginBottom: 10,
  },
  password_icon: {
    height: 24,
    width: 24,
    marginTop: 17,
    marginRight: 10,
    marginBottom: 10,
  },
  forgotpassword: {
    fontSize: 13,
    fontWeight: 'light',
    color: 'black',
    marginLeft: 185,
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0F172A',
    padding: 12,
    borderRadius: 25,
    marginTop: 30,
    width: 300,
    height: 47,
    alignItems: 'center',

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
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
