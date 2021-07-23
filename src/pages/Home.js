import * as React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TimerMixin from 'react-timer-mixin';
import Logo from '../components/Logo'
//import Form from '../components/Form'

import { AuthContext } from '../components/context';



////////////
// type Props = {
//   isAppReady: boolean,
//   initializeApp: () => void,
//   navigation: any
// };

////////////


const Home = ({ navigation }) => {

  const { signOut } = React.useContext(AuthContext);

  return (

    <View style={styles.container}>

      <ImageBackground source={require('../images/bacgr3.jpg')} style={styles.backgroundImage}>

        <View style={styles.icobaTextCont}>
          <Logo />
          <Text style={styles.icobaText}>ICOBA </Text>
          <Text style={styles.icobaInt}>INTERNATIONAL</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}><Text style={styles.signupButton}>SignUp</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { signOut() }}><Text style={styles.signupButton}>Sign Out</Text></TouchableOpacity>
      </ImageBackground>
    </View>
  );

};


//export default class Home extends Component<{mixins: [TimerMixin]}>{
export default Home;

//mixins: [TimerMixin], 

// state = {
//     timer: null,
//     counter: 0
//   };
// componentDidMount() {
//   this.timer = TimerMixin.setTimeout(() => {
//     this.props.navigation.navigate('LoginPage');
//   }, 3000);
//  //    this.interval = this.setInterval(() => {
//  //     //DO SOMETHING
//  //     this.props.navigation.navigate('LoginPage');
//  // }, 2000);
// }

// componentWillUnmount() {
//   TimerMixin.clearTimeout(this.timer);
// }

// componentDidMount () {
//   this.interval = setInterval(() => {
//     //DO SOMETHING
//     this.props.navigation.navigate('LoginPage');
// }, 2000);

// }

// componentWillUnmount() {
//     this.clearInterval(null);
//   }

// componentDidUpdate () {
//   this.setTimeout(
//       () => { this.props.navigation.navigate('LoginPage'); },
//       2000
//     );
// }






const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A237E',
    alignContent: 'center'
  },

  icobaText: {
    color: '#ffffff',
    fontSize: 42,
    fontWeight: '500'
  },
  icobaInt: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500'
  },
  icobaTextCont: {
    flexDirection: 'column',
    flexGrow: 1,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    backgroundColor: '#1A237E',
    alignSelf: 'stretch',
  }

});
