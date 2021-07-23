import React, { Component, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import Logo from '../../components/Logo'

import { AuthContext } from '../../components/context';


export default function Profile({ navigation }) {

  const { loginState } = useContext(AuthContext);

  // console.log(loginData.userToken);


  return (
    <View style={styles.container}>
      <View style={styles.topPane}>
        <View style={styles.topPanecontent1}>
          <Image
            source={require('../../images/logo.png')}
            style={{ width: 30, height: 36, padding: 20 }}>

          </Image>

          <Text style={styles.signupButton}>  ICOBA, International</Text>
        </View>
        <View style={styles.topPanecontent2}>
          <Text style={styles.signupButton}>Welcomes, {loginState.userData.firstname}</Text>
        </View>
      </View>

      <View style={styles.midPane}>
        <View style={styles.midPanecontent1}>
          <Image
            source={require('../../images/boss.png')}
            style={{ width: 80, height: 100, padding: 5 }}>

          </Image>

          <Text style={styles.signupButton}>  ICOBA, International</Text>
        </View>
        <View style={styles.midPanecontent2}>
          <Text style={styles.titleText}>Name  </Text>
          <Text style={styles.contentText}>{loginState.userData.firstname} {loginState.userData.lastname}</Text>
          <Text style={styles.titleText}>Set  </Text>
          <Text style={styles.contentText}>{loginState.userData.grad_year}</Text>
          <Text style={styles.titleText}>Email  </Text>
          <Text style={styles.contentText}>{loginState.userData.email}</Text>
          <Text style={styles.titleText}>Phone  </Text>
          <Text style={styles.contentText}>{loginState.userData.phone}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('ProfileEdit') }}>
              <Text style={styles.buttonText}>Update Profile</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white',
    alignContent: 'center'
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
    // padding: 10,
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
    width: '66%'
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
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center'
  }

});
