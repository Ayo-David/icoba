import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Logo from '../components/Logo'
//import FormSignup from '../components/FormSignup'

import ProfileStackScreen from './tabPages/ProfileStack'
import MembersStackScreen from './tabPages/MemberStack'
import PaymentStackScreen from './tabPages/PaymentStack'
// import RollCall from './tabPages/RollCall'
import EventsStackScreen from './tabPages/EventStack'

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => (
  <Tab.Navigator
    initialRouteName="Profile"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#1A237E',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Members"
      component={MembersStackScreen}
      options={{
        tabBarLabel: 'Class Mates',
        tabBarColor: '#1A237E',
        tabBarIcon: ({ color }) => (
          <Icon name="people-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Payment"
      component={PaymentStackScreen}
      options={{
        tabBarLabel: 'Payment',
        tabBarColor: '#1A237E',
        tabBarIcon: ({ color }) => (
          <Icon name="card-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Events"
      component={EventsStackScreen}
      options={{
        tabBarLabel: 'Events',
        tabBarColor: '#1A237E',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

// const TabsNav = new createBottomTabNavigator({



//   Profile:{
//     screen:Profile,
//     navigationOptions: {
//             tabBarLabel: 'My',
//             tabBarIcon: ({tintColor}) => (
//                <Icon name='home' color={tintColor} size={24}/>
//             )
//         }
//   },
//   Members: {
//     screen:Members,
//     navigationOptions: {
//             tabBarLabel: 'Members',
//             tabBarIcon: ({tintColor}) => (
//                <Icon name='users' color={tintColor} size={24}/>
//             )
//         }
//   },
//   PaymentHome: {
//     screen:PaymentHome, 
//     navigationOptions: {
//             tabBarLabel: 'Payment',
//             tabBarIcon: ({tintColor}) => (
//                <Icon name='credit-card-alt' color={tintColor} size={24}/>
//             )
//         }
//   },
//   // RollCall: {
//   //   screen:RollCall,
//   //   navigationOptions: {
//   //           tabBarLabel: 'RollCall',
//   //           tabBarIcon: () => (
//   //               <Ionicons name="md-contact" size={24} />
//   //           )
//   //       }
//   // },
//   Events: {
//     screen:Events,
//     navigationOptions: {
//             tabBarLabel: 'Events',
//             tabBarIcon: ({tintColor}) => (
//                <Icon name='calendar' color={tintColor} size={24}/>
//             )
//     }
//   }
// }, 
//   {

//       tabBarPosition: 'bottom',
//       tabBarOptions: {
//         activeBackgroundColor: '#1a237e',
//         inactiveBackgroundColor: '#000033',
//         activeTintColor: 'white',
//         inactiveTintColor: 'white',
//       //   style: {
//       //   BackgroundColor: '#1a237e'                                                               `    
//       // }

//       },
//       animationEnabled: false,
//       swipeEnabled: false,


// })

export default MyTabs;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A237E',
    alignContent: 'center'
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 46,
    fontWeight: '500'
  },
});
