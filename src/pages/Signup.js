import * as React from 'react';;
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  StatusBar
} from 'react-native';

//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Logo from '../components/Logo'
import FormSignup from '../components/FormSignup'


//import {Actions} from 'react-native-router-flux';

//height is the dimension of the screen
// const { height } = Dimensions.get('window');

export default function Signup({ navigation }) {

  // const [screenHeight, setScreenHeight] = React.useState();
  // const [contentHeight, setContentHeight] = React.useState();


  // screenHeight = height;                                                      

  // onContentSizeChange = (contentWidth, contentHeight) => {
  //   setScreenHeight({ screenHeight: contentHeight });
  // };


  //scroll enables if screen content height is greater than windows height
  // const scrollEnabled = screenHeight > height;
  return (

    <SafeAreaView style={styles.container} behavior="padding">
      <StatusBar barStyle="light-content" />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollview}
      // scrollEnabled={scrollEnabled}
      // onContentSizeChange={onContentSizeChange}
      >

        <View style={styles.container}>
          <Logo />
          <FormSignup type='Signup' />
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}><Text style={styles.signupButton}>Login</Text></TouchableOpacity>
          </View>

          <View style={{ height: 30 }} />
        </View>
      </ScrollView>
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A237E',
    alignContent: 'center',
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
    flexDirection: 'row',
    flexGrow: 1,
    marginVertical: 10,
    justifyContent: 'flex-end'
  }
});
