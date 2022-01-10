import React, { useContext } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    Image

} from 'react-native';

import { WebView } from 'react-native-webview';
import { AuthContext } from '../../components/context';

// import { Icon, Header, Left, Right } from 'native-base';




//this function will load the activityinspector before loading webview
export default MyWeb = ({ navigation }) => {


    const { loginState } = useContext(AuthContext)
    const ActivityIndicatorLoadingView = () => {

        return (

            <ActivityIndicator
                color='#C0C0C0'
                size='large'
                style={styles.ActivityIndicatorStyle}
            />
        );
    }




    return (
        //to use webview in a view ensure that the style FLEX of the view and the webview is set to 1
        <View style={{ flex: 1 }}>
            <View style={styles.topPane}>
                <View style={styles.topPanecontent1}>
                    <Image
                        source={require('../../images/logo.png')}
                        style={{ width: 30, height: 36, padding: 20 }}>

                    </Image>

                    <Text style={styles.signupButton}>  ICOBA, International</Text>
                </View>
                <View style={styles.topPanecontent2}>
                    <Text style={styles.signupButton}>Welcomes {loginState.userData.firstname}</Text>
                </View>
            </View>

            {/* <Header iosBarStyle={"light-content"} style={styles.header_container}>
                <Left>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name='menu' style={{ fontSize: 20, color: 'white' }} />
                    </TouchableOpacity>
                </Left>
                <Right><Text style={styles.signupText}>Make Payment</Text></Right>
            </Header> */}


            <WebView
                source={{ uri: 'https://schoolshell.com/icoba_app/icoba_pay/' }}
                style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                renderLoading={ActivityIndicatorLoadingView}
                startInLoadingState={true}
            />

        </View>
    );

}


const styles = StyleSheet.create({
    header_container: {
        marginTop: '4%',
        backgroundColor: '#126635',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'white',
        alignContent: 'center'
    },

    ActivityIndicatorStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'

    },

    topPane: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#1A237E',
        height: 200,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#f4c842'
    },
    topPanecontent1: {
        flexDirection: 'row',
        marginVertical: 30
    },
    topPanecontent2: {
        flexDirection: 'row',
    },
    midPane: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        marginVertical: 40

    },
    midPanecontent1: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'flex-start'
    },
    midPanecontent2: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    titleText: {
        color: 'gray',
        fontSize: 16,
        fontWeight: '500'
    },
    contentText: {
        color: 'black',
        fontSize: 16,
    },

    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '500'
    },
    signupTextCont: {
        flexDirection: 'row',
        flexGrow: 1,
        marginVertical: 10,
        justifyContent: 'flex-end'
    },
    button: {
        width: 150,
        backgroundColor: '#ffeb3b',
        borderRadius: 15,
        marginVertical: 7,
        paddingVertical: 8,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center'
    }

});
