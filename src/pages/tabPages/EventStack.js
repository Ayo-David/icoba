import React, { Component, useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import EventsScreen from './Events';


const Stack = createStackNavigator();

export default function EventsStack({ navigation }) {


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
            <Stack.Screen name='Events' component={EventsScreen} options={{
                title: 'Events',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#1A237E" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />

        </Stack.Navigator>
    );
}





