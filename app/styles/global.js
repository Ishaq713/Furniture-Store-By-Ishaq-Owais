import {
    StyleSheet
} from 'react-native';

export const globalStyles = StyleSheet.create({
    btn: {
        color: 'white',
        backgroundColor: '#36454F',
        
        marginHorizontal: '5%',
        padding: 5,
        marginTop: 10,
         borderRadius: 10,
    },
    btnText: {
        fontFamily: 'fugaz-one',
        fontSize: 25,
        paddingHorizontal: 5,
        color: 'white'
    },
    container: {
        flex: 1
    },
    headingText: {
        fontFamily: 'fugaz-one',
        color: '#FAF9F6',
    },
    screenHeader: {
       marginTop: '10%',
        fontFamily: 'fugaz-one',
        color: 'black',
        fontSize: 45,
        textAlign: 'center',
        fontStyle: 'italic'
        
    },
    sectionIntroText: {
        fontStyle: 'italic',
        marginTop: 40,
        fontWeight: 'bold',
        marginHorizontal: '10%',
        fontFamily: 'fugaz-one',         
        color: 'white',
        fontSize: 27,
        textAlign: 'center'
    },
})