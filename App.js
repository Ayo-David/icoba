import * as React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AuthContext } from "./src/components/context";

import DrawerContent from "./src/components/DrawerContent";

import MainScreen from "./src/pages/Main";
//import HomeScreen from "./src/pages/Home";
//import LoginScreen from './src/pages/Login';
//import SignupScreen from './src/pages/Signup';
//  import NavPageScreen from './src/pages/NavPage';
import RootStackScreen from "./src/pages/RootStackScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const App = () => {
  const initialLoginState = {
    isLoading: true,
    userEmail: null,
    userName: null,
    userToken: null,
    userData: null,
  };
  //const [fetchdata, setFetchdata] = React.useState({});

  //const userToken = null;
  //the reducer fxn - this is where the action takes place
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":

        return {
          ...prevState,
          userData: action.data,
          userToken: action.token,
          isLoading: false,
        };

      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      //console.log('loginToken:', userToken);
    }
  };

  //reducer takes in the reducer fxn and initial state and return new state
  //dispatch is what delivers our actions to the reducer
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: (userEmail, userPassword) => {

        // setUserToken('fgkj');
        // setIsLoading(false);
        // const userToken = String(foundUser[0].userToken);
        // const userName = foundUser[0].username;



        // try {
        //   await AsyncStorage.setItem("userToken", userToken);
        // } catch (e) {
        //   console.log(e);
        // }
        // // console.log('user token: ', userToken);



      },

      signOut: async () => {

        try {
          await AsyncStorage.removeItem("userToken");
          await AsyncStorage.removeItem("userEmail");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },


      signUp: () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },

    }),
    []
  );
  const readAsynData = async () => {
    try {
      userToken = await AsyncStorage.getItem('userToken');
      useremail = await AsyncStorage.getItem('userEmail');
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
    return userToken;
  }


  //works just like componentDIDmount
  React.useEffect(() => {

    setTimeout(async () => {
      let userToken = null, userid = '', userData = [];

      try {
        userToken = await AsyncStorage.getItem('userToken');
        userid = await AsyncStorage.getItem('userId');
      } catch (e) {
        console.log(e);
      }

      //fetch user data if asyndata is not null
      if (userToken !== null) {
        fetch("https://schoolshell.com/icoba_app/logins.php", {
          method: "post",
          header: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            id: userid,
          }),
        })
          .then((response) => response.json())
          .then((responseJson) => {

            userData = responseJson;

            if (responseJson == "Wrong Details") {
              alert("Please check your internet connectivity");
            } else {
              //alert("Successfully Login");
              //console.log(userData);
              dispatch({ type: "LOGIN", data: userData, token: userToken });
            }
          })
          .catch((error) => {
            console.error(error);
          });


      } else {
        dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
      }

    }, 1000);
  }, []);




  if (loginState.isLoading) {

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }




  function MyStack() {
    return (
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainScreen} />
      </Drawer.Navigator>
    );
  }





  //console.log('loginTokenlast: ', loginState.userToken);
  //we could have send out authcontext fxn to the AuthContext Provider, but rather we used loginState and dispatch
  return (
    <AuthContext.Provider value={{ loginState, authContext, dispatch }}>
      <NavigationContainer>
        {loginState.userToken !== null ? <MyStack /> : <RootStackScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
