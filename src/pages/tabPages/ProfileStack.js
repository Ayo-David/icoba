import React, { Component, useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Profile from './Profile';
import ProfileEdit from './ProfileEdit';


const Stack = createStackNavigator();

export default function ProfileStack({ navigation }) {


    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#1A237E',
                borderBottomColor: '#1A237E'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
            <Stack.Screen name='Profile' component={Profile} options={{
                title: 'My Profile',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#1A237E" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            <Stack.Screen name='ProfileEdit' component={ProfileEdit} options={
                { title: "Edit Profile" }
            } />
        </Stack.Navigator>
    );
}





