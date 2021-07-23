import React, { Component, useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,

} from 'react-native';

import { TextInput } from 'react-native-paper';

import Logo from '../../components/Logo'

import { AuthContext } from '../../components/context';
import { ScrollView } from 'react-native-gesture-handler';


export default function Profile() {


  const { loginState, signOut } = useContext(AuthContext);

  const [data, setData] = React.useState({
    userEmail: loginState.userData.email,
    userFirstName: loginState.userData.firstname,
    userLastName: loginState.userData.lastname,
    userNameInSchool: loginState.userData.nameinschool,
    userPhone: loginState.userData.phone,
    userSchoolHouse: loginState.userData.school_house
  });

  const textFirstNameChange = (val) => {
    setData({
      ...data,
      userFirstName: val
    })

  };
  const textLastNameChange = (val) => {
    setData({
      ...data,
      userLastName: val
    })
  };
  const textNameinSchoolChange = (val) => {
    setData({
      ...data,
      userNameInSchool: val
    })
  };


  const textEmailChange = (val) => {
    setData({
      ...data,
      userEmail: val
    })
  };

  const textSchoolHouseChange = (val) => {
    setData({
      ...data,
      userSchoolHouse: val
    })
  };

  const textPhoneChange = (val) => {
    setData({
      ...data,
      user: val
    })
  };

  const updateProfile = () => {

    fetch('https://schoolshell.com/icoba_app/updateProfile.php', {
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        firstname: data.userFirstName,
        lastname: data.userLastName,
        nameinschool: data.userNameInSchool,
        email: data.userEmail,
        phone: data.userPhone,
        password: data.userPassword,
        oldEmail: loginState.userData.email,
        gradYear: data.userGradYear,
        schoolHouse: data.userSchoolHouse

      })

    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson);

      })
      .catch((error) => {
        console.error(error);
      });

  }


  return (
    <ScrollView
      style={{ flex: 1 }}
    >
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

          <View style={styles.midPanecontent2}>
            <TextInput style={styles.inputBox}
              label='First Name'
              defaultValue={loginState.userData.firstname}
              keyboardType="default"
              onChangeText={(val) => textFirstNameChange(val)}
              mode='outlined'
            />
            <TextInput style={styles.inputBox}
              label='Last Name'
              defaultValue={loginState.userData.lastname}
              keyboardType="default"
              onChangeText={(val) => textLastNameChange(val)}
              mode='outlined'
            />
            <TextInput style={styles.inputBox}
              label='Name in school'
              defaultValue={loginState.userData.nameinschool}
              keyboardType="default"
              onChangeText={(val) => textNameinSchoolChange(val)}
              mode='outlined'
            />


            <TextInput style={styles.inputBox}
              label='House'
              defaultValue={loginState.userData.school_house}
              keyboardType="default"
              onChangeText={(val) => textSchoolHouseChange(val)}
              mode='outlined'
            />

            <TextInput style={styles.inputBox}
              label='Email'
              defaultValue={loginState.userData.email}
              keyboardType="default"
              onChangeText={(val) => textEmailChange(val)}
              mode='outlined'
            />

            <TextInput style={styles.inputBox}
              label='Phone'
              defaultValue={loginState.userData.phone}
              keyboardType="default"
              onChangeText={(val) => textPhoneChange(val)}
              mode='outlined'
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => { updateProfile() }}>
                <Text style={styles.buttonText}>Update Profile</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>

      </View>
    </ScrollView>
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
    // borderBottomWidth: 2,
    // borderBottomColor: '#f4c842'
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
  inputBox: {
    width: 300,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderColor: '#000',
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#05375a",
    marginVertical: 10,
    // marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,

    // color: '#05375a',
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
