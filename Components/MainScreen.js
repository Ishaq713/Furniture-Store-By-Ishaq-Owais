/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, ImageBackground } from 'react-native';


export default function MainScreen({ navigation }) {
    return (

        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/Chair.jpg')}

            >

                <View>
                    <View style={styles.header}>
                        <Image source={require('../assets/logo_GT.png')} style={styles.imgLogo} />
                    </View>

                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerhead}> Stay connected!</Text>
                    <Text style={styles.footerSignin}> Sign in with your account</Text>

                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Login'); }}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({

    imgLogo: {


        height: 180,
        width: 250,


    },
    container: {
        backgroundColor: '#0F172A',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        marginBottom: 140,
    },
    text: {
        color: 'white',
        fontSize: 26,
        marginTop: 3,
        marginBottom: 140,
        justifyContent: 'center',
        textAlign: 'center',
    },
    footer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 80,
    },
    footerhead: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0F172A',
        marginTop: -20,
    },
    footerSignin: {
        fontSize: 12.5,
        fontWeight: 'normal',
        color: 'black',
        marginLeft: 3,
    },
    button: {
        backgroundColor: '#0F172A',
        padding: 15,
        borderRadius: 13,
        marginTop: 50,
        width: '55%',
        height: 50,
        alignItems: 'center',
        marginLeft: 135,
    },
    buttonText: {
        color: 'white',
    },
    image: {
        width: 70,
        height: 65,
    },
});
