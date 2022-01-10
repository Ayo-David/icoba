import React, { Component, useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import PaymentScreen from './PaymentHome';
import PaymentWebView from './PaymentWebView';


const Stack = createStackNavigator();

export default function PaymentStack({ navigation }) {


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
            <Stack.Screen name='Payment' component={PaymentScreen} options={{
                title: 'Dues & Donations',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#1A237E" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            <Stack.Screen
                name='PaymentWebView'
                component={PaymentWebView}
                options={{
                    title: 'Pay Dues & Donations ',
                    headerLeft: () => (
                        <Icon.Button
                            name="ios-menu"
                            size={25}
                            backgroundColor="#1A237E"
                            onPress={() => navigation.openDrawer()}>

                        </Icon.Button>
                    )
                }} />

        </Stack.Navigator>
    );
}





