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

import { Picker } from '@react-native-picker/picker';
import { Dialog } from 'react-native-paper';
import DropDownPicker from "react-native-dropdown-picker";


export default function Signup({ navigation }) {
    const [selectedLanguage, setSelectedLanguage] = React.useState();

    return (



        <View style={styles.container}>
            <DropDownPicker
                items={[
                    { label: 'UK', value: 'uk' },
                    { label: 'France', value: 'france' },
                    { label: 'Germany', value: 'germany' },
                ]}
                placeholder="Select a country"
                containerStyle={styles.selectBox}
                style={{ backgroundColor: '#ffffff' }}
                dropDownStyle={{ backgroundColor: 'white' }}
            />
        </View>


    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A237E',
        alignContent: 'center'
    },
    selectBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255,255,255)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
        height: 45,
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
