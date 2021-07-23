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


    const { loginState, dispatch } = React.useContext(AuthContext);

    //const [fetchdata, setFetchdata] = React.useState({});

    const textInputChange = (val) => {
        setData({
            ...data,
            userEmail: val,
            // check_textInputChange: true,
        });
    };



    const forgotPassword = (useremail) => {
        let userToken = null, userData = [], userid = '';


        fetch("https://schoolshell.com/icoba_app/forgotpassword.php", {
            method: "post",
            header: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                // we will pass our input data to server
                email: useremail,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //setData({ ...data, userData: responseJson });
                //setFetchdata(responseJson);
                //userData = responseJson;

                // if (responseJson == "No user") {
                //     alert("No user is registered with this email address!");
                // }

                if (responseJson == "Sent") {
                    alert("Password recovery successfully sent to your email, please check your email.");

                } else {
                    alert("No user is registered with this email address!");
                    //dispatch({ type: "LOGIN", data: userData, token: userToken });
                }
            })
            .catch((error) => {
                console.error(error);
            });

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

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    forgotPassword(data.userEmail);
                }}
            >
                <Text style={styles.buttonText}>Submit</Text>
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
        // marginVertical: 10,
        paddingVertical: 13,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#ffffff",
        textAlign: "center",
    },
});
