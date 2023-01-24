import React, {
    useState
} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable
} from 'react-native'

import firestore from '@react-native-firebase/firestore';

const MenuSection = ({ section }) => {
    const [sectionVisible, setSectionVisible] = useState(false);
    const addData = (name, price) => {
        firestore()
            .collection('Orders')
            .add({
                name: name,
                price: price,
            })
            .then(() => {
                alert("Added successfully");
            });

    }
    return (
        <View style={sectionVisible && styles.containerbackground}>
            <Text
                style={!sectionVisible ? styles.sectionHeading : { ...styles.sectionHeading, color: 'black' }}
            >
                {section.name}
                <Pressable
                    onPress={() => setSectionVisible(!sectionVisible)}
                >
                    <Text
                        style={!sectionVisible ? styles.expandBtn : { ...styles.expandBtn, color: 'black' }}
                    >
                        {!sectionVisible ?'  Chairs' : '- hide'}
                    </Text>
                </Pressable>
            </Text>
            {sectionVisible &&
                <View
                    style={styles.dishBackground}
                >
                    
                    <View style={styles.dishContainer}>
                    <Image source={require('D:\\MAD-FA19-BSE-101\\assets\\chair1.jpg')} style={styles.images} />

                        <Text >1. Chair 1</Text>
                        <View>
                            <Text>Price: 1200</Text>
                            <Pressable onPress={() => {
                                addData('Chair 1', 1200);
                            }}>
                                <Text style={styles.add_btn}>
                                    Add
                                </Text>
                            </Pressable>
                        </View>
                        
                    </View>
                    <View style={styles.dishContainer}>
                    <Image source={require('D:\\MAD-FA19-BSE-101\\assets\\chairTable.jpg')} style={styles.images} />
                    <Text >
                            2. Chair 2
                        </Text>
                        <View>
                            <Text>Rs 1250</Text>
                            <Pressable onPress={() => {
                                addData('2. Chair 2', 1250);
                            }}>
                                <Text style={styles.add_btn}>
                                    Add
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.dishContainer}>
                    <Image source={require('D:\\Azaab\\azaab\\MAD-SP19-BSE-023\\assets\\chair3.jpg')} style={styles.images} />

                        <Text >3. Chair 3</Text>
                        <View>
                            <Text>Rs 850</Text>
                            <Pressable onPress={() => {
                                addData('3. Chair 3', 850);
                            }}>
                                <Text style={styles.add_btn}>
                                    Add
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.dishContainer}>
                    <Image source={require('D:\\Azaab\\azaab\\MAD-SP19-BSE-023\\assets\\chair4.jpg')} style={styles.images} />

                        <Text >4. Chair 4</Text>
                        <View>
                            <Text>Rs 1050</Text>
                            <Pressable onPress={() => {
                                addData('4. Chair 4', 1050);
                            }}>
                                <Text style={styles.add_btn}>
                                    Add
                                </Text>
                            </Pressable>
                        </View>
                    </View>
            
                </View>
}
                          
</View>
    )

            };









            
    





























const styles = StyleSheet.create({
    add_button_view: {
        paddingTop: 5,
        paddingLeft: 20,
    },
    add_btn: {
        marginRight: -20,
        fontSize: 18,
        color: 'black',
        fontFamily: 'Courier',
        fontWeight: 'bold'
    },
    sectionHeading: {
        fontFamily: 'fugaz-one',
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        
        fontWeight: 'bold'
    },
    dishContainer: {
        marginBottom: 10,
        backgroundColor: 'white',
        padding: '3%',
        borderRadius: 10,
        display: 'flex',

        color: 'black'



    },
    expandBtn: {
        fontFamily: 'fugaz-one',
        color: 'black',
        marginLeft: 5,

        fontWeight: 'bold',
        fontSize: 23,
    },
    dishBackground: {
        padding: '3%',
    },
    images: {
        width: 280 ,
        height: 280,
        marginLeft: 0,
    },
    containerbackground: {
        backgroundColor: 'grey',
        opacity: 0.8,
        marginHorizontal: '10%',
        borderRadius: 10
    }
})

export default TabelSection; 
