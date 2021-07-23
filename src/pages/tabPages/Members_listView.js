import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ListView
} from 'react-native';

import Logo from '../../components/Logo'
//  import FormSignup from '/../components/FormSignup'


// const ds = new ListView.DataSource({
//       rowHasChanged: (r1, r2) => r1 !== r2
//     });


export default class Profile extends Component<{}>{

  constructor(props) {
    super(props)
    this.state = {
      myFirstname: this.props.navigation.state.params.firstname,
      myLastname: this.props.navigation.state.params.lastname,
      myEmail: this.props.navigation.state.params.email,
      myPhone: this.props.navigation.state.params.phone,
      myGrad: this.props.navigation.state.params.grad_year,
      mySchoolHouse: this.props.navigation.state.params.school_house,
      //dataSource: ds

      dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    }

  }

  // class LibraryList extends Component {
  //   componentWillMount() {
  //     const ds = new ListView.DataSource({
  //       rowHasChanged: (r1, r2) => r1 !== r2
  //     });

  //     this.dataSource = ds.cloneWithRows(this.props.libraries);
  //   }


  componentDidMount() {
    const { myGrad } = this.state;


    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows([
    //     {"id":"24982",
    //     "serial_num":"644",
    //     "std_num":"630",
    //     "surname":"Adediran",
    //     "other_names":"Joseph",
    //     "year_class":"1",
    //     "class_left":"1950",
    //     "obtd":"",
    //     "highlight":"1st XI Cricket, 1st XI Football, Prefect, Stage Manager",
    //     "entry_house":"Aggrey","status":"active",
    //     "year_entered":"1945","sets":""},

    //     {"id":"24983",
    //     "serial_num":"646",
    //     "std_num":"632",
    //     "surname":"Ajayi",
    //     "other_names":"Victor O.",
    //     "year_class":"6","class_left":"1950",
    //     "obtd":"",
    //     "highlight":"",
    //     "entry_house":"",
    //     "status":"active",
    //     "year_entered":"1945","sets":""},

    //     {"id":"24982",
    //     "serial_num":"644",
    //     "std_num":"630",
    //     "surname":"Adediran",
    //     "other_names":"Joseph",
    //     "year_class":"1",
    //     "class_left":"1950",
    //     "obtd":"",
    //     "highlight":"1st XI Cricket, 1st XI Football, Prefect, Stage Manager",
    //     "entry_house":"Aggrey","status":"active",
    //     "year_entered":"1945","sets":""},

    //     {"id":"24983",
    //     "serial_num":"646",
    //     "std_num":"632",
    //     "surname":"Ajayi",
    //     "other_names":"Victor O.",
    //     "year_class":"6","class_left":"1950",
    //     "obtd":"",
    //     "highlight":"",
    //     "entry_house":"",
    //     "status":"active",
    //     "year_entered":"1945","sets":""}

    //     ])
    // });




    fetch('https://schoolshell.com/icoba_app/members.php', {
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        // we will pass our input data to server
        entry: myGrad
      })

    })
      .then((response) => response.json())
      .then((responseJson) => {
        data = responseJson; // here we have all members data in a set
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data)
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _renderRow(rowData) {
    return (
      <View style={{ padding: 10, margin: 10 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{rowData.other_names} {rowData.surname}</Text>

        <Image
          source={require('../../images/boss.png')}
          style={{ width: 30, height: 50, padding: 20 }}
        />
        <Text>House: {rowData.entry_house}</Text>

      </View>
    );

  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    );
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
  pageName: {
    margin: 10, fontWeight: 'bold',
    color: '#000', textAlign: 'center'
  },
  topPane: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#1A237E',
    height: 200,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#f4c842'
  },
  topPanecontent1: {
    flexDirection: 'row',
    marginVertical: 30
  },
  topPanecontent2: {
    flexDirection: 'row',
  },
  midPane: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginVertical: 40

  },
  midPanecontent1: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-start'
  },
  midPanecontent2: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  titleText: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '500'
  },
  contentText: {
    color: 'black',
    fontSize: 16,
  },

  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500'
  },
  signupTextCont: {
    flexDirection: 'row',
    flexGrow: 1,
    marginVertical: 10,
    justifyContent: 'flex-end'
  },
  button: {
    width: 150,
    backgroundColor: '#ffeb3b',
    borderRadius: 15,
    marginVertical: 7,
    paddingVertical: 8,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center'
  }

});
