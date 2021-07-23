import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';


export default class Login extends Component<{}>{

	render() {
		return (
			<View>
				<Image
					style={styles.imageStyle}
					source={require('../images/logo1.png')}
				/>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	imageStyle: {
		width: 80, height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		marginVertical: 10
	}
})