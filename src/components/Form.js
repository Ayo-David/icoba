import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Keyboard,
} from "react-native";
import { AuthContext } from "./context";
// import { AsyncStorage } from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-community/async-storage';





const Form = () => {
  const [data, setData] = React.useState({
    userEmail: "",
    userPassword: "",
    userData: [],
  });

  const saveAsyncData = async (userToken, userId) => {
    try {
      await AsyncStorage.setItem('userToken', userToken);
      await AsyncStorage.setItem('userId', userId);
      //alert('Data successfully saved')
    } catch (e) {
      //alert('Failed to save the data to the storage')
    }
  }

  const { loginState, dispatch } = React.useContext(AuthContext);

  //const [fetchdata, setFetchdata] = React.useState({});

  const textInputChange = (val) => {
    setData({
      ...data,
      userEmail: val,
      // check_textInputChange: true,
    });
  };

  const textPasswordChange = (val) => {
    setData({
      ...data,
      userPassword: val,
      // check_textInputChange: true,
    });
  };

  const login = (useremail, userpassword) => {
    let userToken = null, userData = [], userid = '';

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (useremail == "") {
      alert("Please enter Email address");

    } else if (reg.test(useremail) === false) {
      alert("Email is Not Correct");

    } else if (userpassword == "") {
      alert("Please enter password");

    } else {

      fetch("https://schoolshell.com/icoba_app/login.php", {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          // we will pass our input data to server
          email: useremail,
          password: userpassword,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          //setData({ ...data, userData: responseJson });
          //setFetchdata(responseJson);
          userData = responseJson;

          if (responseJson == "Wrong Details") {
            alert("Wrong Login Details");
          } else {
            //alert("Successfully Login");
            //getting date from child-parent


            userToken = 'abcd';
            userid = userData.id;
            saveAsyncData(userToken, userid);

            //console.log('userdata:', userData.id);
            //alert("it works" + " " + fetchdata["phone"]);
            dispatch({ type: "LOGIN", data: userData, token: userToken });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Email"
        placeholderTextColor="#ffffff"
        selectionColor="#fff"
        keyboardType="email-address"
        // onSubmitEditing={()=> this.password.focus()}
        // onChangeText={userEmail => this.setState({userEmail})}
        onChangeText={(val) => textInputChange(val)}
      />
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#ffffff"
        // ref={(input) => this.password = input}
        // onChangeText={userPassword => this.setState({userPassword})}
        onChangeText={(val) => textPasswordChange(val)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          login(data.userEmail, data.userPassword);
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputBox: {
    width: 300,
    height: 40,
    backgroundColor: "rgba(255, 255,255,0.2)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: "#000033",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },
});
