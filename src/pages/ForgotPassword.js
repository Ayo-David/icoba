import * as React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Logo from '../components/Logo'
import Form from '../components/FormPassword'


const Login = ({ navigation }) => {

    const [data, setData] = React.useState({
        myEmail: '',
    });

    //to store the email and keep track of it for other pages.
    const myparam = (Emailfromchild) => {
        setData({
            ...data,
            myEmail: Emailfromchild
        });
    }

    return (

        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#1A237E" />
            <View style={styles.header}>
                <Logo />
                <Text style={styles.logoText}>  ICOBA, International</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Form type='Login' paramfromLogin={myparam} />

                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Please provide your email address. You will receive the reset Password in your email.</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}><Text style={styles.signupButton}>Login Here</Text></TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );


}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#fff',
        alignContent: 'center'
    },

    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50,
        marginTop: 60,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    footer: {
        flex: 2,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: '#1A237E',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    logoText: {
        color: '#1A237E',
        fontSize: 22,
        fontWeight: '600'
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },
    signupTextCont: {
        // flexDirection: 'row',
        flexGrow: 1,
        // marginVertical: 4,
        // justifyContent: 'center',
        marginHorizontal: 20,
        width: 320,
    }
});
