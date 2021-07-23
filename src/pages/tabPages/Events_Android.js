import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  WebView,
  Platform, ActivityIndicator

} from 'react-native';

import Logo from '../../components/Logo';


//  import FormSignup from '/../components/FormSignup'

//this function will load the activityinspector before loading webview


export default class MyWeb extends Component {

  ActivityIndicatorLoadingView() {
    
    return (

      <ActivityIndicator
        color='#C0C0C0'
        size='large'
        style={styles.ActivityIndicatorStyle}
      />
    );
  }



  render() {
    return (
      <WebView
        source={{uri: 'https://pathfindercollegeibadan.com/icoba_pay/'}}
        style={{flex: 1, justifyContent: 'center', backgroundColor: 'white' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={this.ActivityIndicatorLoadingView} 
        startInLoadingState={true}
      />
    );
  }
}



class Profile extends Component<{}>{

  constructor(props){
    super(props)
    this.state = {
      myFirstname: this.props.navigation.state.params.firstname,
      myLastname: this.props.navigation.state.params.lastname,
      myEmail: this.props.navigation.state.params.email,
      myPhone: this.props.navigation.state.params.phone,
      myEntry: this.props.navigation.state.params.entry_year,
      mySchoolHouse: this.props.navigation.state.params.school_house
    }

  }


  render(){
    return(
      <View style={styles.container}>
          <View style={styles.topPane}>
            <View style={styles.topPanecontent1}>
              <Image 
                  source={require('../../images/logo.png')}
                  style = {{width:30, height:36, padding:20}}>

              </Image>

              <Text style={styles.signupButton}>  ICOBA, International</Text>
            </View>
            <View style={styles.topPanecontent2}>
                 <Text style={styles.signupButton}>Welcomes, {this.state.myFirstname}</Text>
            </View>
          </View>

          <View style={styles.midPane}>
              
          </View>
            
      </View>
      ) 
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white',
    alignContent: 'center'
  },

  ActivityIndicatorStyle:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  
},

  topPane:{
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#1A237E',
    height: 200,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#f4c842'
  },
  topPanecontent1:{
    flexDirection: 'row',
    marginVertical:30
  },
  topPanecontent2:{
    flexDirection: 'row',
  },
  midPane:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding:40,
    marginVertical:40

  },
  midPanecontent1:{
    justifyContent:'center',
    alignItems: 'center',
    alignContent: 'flex-start'
  },
  midPanecontent2:{
    justifyContent:'center',
    flexDirection: 'column',
  },
  titleText:{
    color:'gray',
    fontSize:16,
    fontWeight:'500'
  },
  contentText:{
    color:'black',
    fontSize:16,    
  },

  signupText:{
    color:'rgba(255,255,255,0.6)',
    fontSize:16
  },
  signupButton:{
    color:'#ffffff',
    fontSize:20,
    fontWeight:'500'
  },
   signupTextCont:{
    flexDirection:'row',
    flexGrow:1,
    marginVertical:10,
    justifyContent:'flex-end'
  },
  button: {
    width:150,
    backgroundColor:'#ffeb3b',
     borderRadius: 15,
      marginVertical: 7,
      paddingVertical: 8,
  },
  buttonContainer:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginTop:10
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#000000',
    textAlign:'center'
  }

});
