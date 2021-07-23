import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Drawer, } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { AuthContext } from './context';
import AsyncStorage from '@react-native-async-storage/async-storage';



const DrawerContent = (props) => {

    const { dispatch } = useContext(AuthContext);

    const signOut = async () => {



        try {
            await AsyncStorage.removeItem('userToken');
            await AsyncStorage.removeItem('userId');
        } catch (e) {
            console.log(e);
        }
        dispatch({ type: "LOGOUT" });
    };


    return (

        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => { props.navigation.navigate('Profile') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="account-group"
                                color={color}
                                size={size}
                            />
                        )}
                        label="My Class Mates"
                        onPress={() => { props.navigation.navigate('Members') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="credit-card-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Make Donations"
                        onPress={() => { props.navigation.navigate('Payment') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="calendar-multiple"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Our Events"
                        onPress={() => { props.navigation.navigate('Events') }}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { signOut() }}
                />
            </Drawer.Section>
        </View>
    );

}

export default DrawerContent;



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});