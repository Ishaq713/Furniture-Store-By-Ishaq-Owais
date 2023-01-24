/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */



import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView, ImageBackground, Image } from 'react-native';
import {
    globalStyles
} from '../app/styles/global';
export default function Home({ navigation }) {
    return (

        <SafeAreaView>

            <ImageBackground
                source={require('../assets/Chair.jpg')}
                style={{ height: 700 }}
            >
                <Image source={require('../assets/logo_GT.png')} style={styles.imgLogo} />
                <Text style={globalStyles.sectionIntroText}>
                    We provide best Quality furniture.                              By Ishaq And Owais</Text>
            </ImageBackground>


        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    imgLogo: {
        marginTop: 50,
        height: 160,
        width: 160,
        marginLeft: 120,


    },

    home: {
        color: '#fff',
        marginTop: 68,
        marginLeft: 145,
        fontSize: 25,
    },
    viewtreat: {
        marginTop: 40,
        marginLeft: 15,
        flexDirection: 'row',
    },
    view: {
        marginLeft: 47,
        marginTop: 8.5,
        color: '#69a4d5',
    },
    container: {
        height: 900,
        width: 300,
        margin: 25,
        marginTop: 40,
        borderRadius: 14,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    signup: {
        backgroundColor: '#0F172A',
        padding: 12,
        borderRadius: 25,
        marginTop: 200,
        width: 270,
        height: 47,
        alignItems: 'center',
        marginLeft: -135,
    },

});
