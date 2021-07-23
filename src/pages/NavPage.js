import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Logo from '../components/Logo'
import FormSignup from '../components/FormSignup'

//import {Actions} from 'react-native-router-flux';

export default class NavPage extends Component<{}>{

	// Login (){
	// 	Actions.login()

	// }

	render(){
		return(

			<View style={styles.container}>
				<Logo/>
				<FormSignup type='Signup'/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account? </Text>
					<TouchableOpacity onPress={this.Login}><Text style={styles.signupButton}>Login</Text></TouchableOpacity>
				</View>
			</View>
			)	
		
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A237E',
    alignContent: 'center'
  },

  signupText:{
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton:{
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
   signupTextCont:{
    flexDirection:'row',
    flexGrow:1,
    marginVertical:10,
    justifyContent:'flex-end'
  }
});
