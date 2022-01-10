import React, { useContext, useEffect, useReducer, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ListView,
  FlatList,
  SafeAreaView,
  Alert, ActivityIndicator, Platform
} from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import { Switch } from 'react-native-gesture-handler';
import { AuthContext } from '../../components/context';
import Logo from '../../components/Logo';



//  import FormSignup from '/../components/FormSignup'


// const ds = new ListView.DataSource({
//       rowHasChanged: (r1, r2) => r1 !== r2
//     });


const ClassMates = () => {

  const initialstate = {
    isLoading: false,
    matesData: [],
    hasError: false
  };

  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "FETCHING MATES REQUEST":
        return {
          ...state,
          isLoading: true,
          hasError: false
        };
      case "FETCHING MATES SUCCESS":
        return {
          ...state,
          isLoading: false,
          matesData: action.data
        };
      case "FETCHING MATES FAIL":
        return {
          ...state,
          isLoading: false,
          hasError: true
        };
      default:
        return state;

    }

  };

  const [membersState, dispatch] = useReducer(reducerFunction, initialstate);

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [membersData, setMasterDataSource] = useState([]);

  const { loginState } = useContext(AuthContext);

  useEffect(() => {
    let myGrad;
    myGrad = loginState.userData.grad_year;

    //console.log('Year: ', myGrad);

    dispatch({ type: "FETCHING MATES REQUEST" });

    fetch('https://schoolshell.com/icoba_app/members.php', {
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        // we will pass our input data to server
        gradYear: myGrad

      })

    })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log('sucessful: ', responseJson);
        //console.log(myGrad)
        setMasterDataSource(responseJson);
        setFilteredDataSource(responseJson);
        dispatch({ type: "FETCHING MATES SUCCESS", data: responseJson });

      })
      .catch((error) => {
        console.error(error);
        //console.log('unsucessful: ', membersState);
        dispatch({ type: "FETCHING MATES FAIL", data: responseJson });
      });
  }, []);


  // const renderSeparator = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 1,
  //         width: "86%",
  //         backgroundColor: "#CED0CE",
  //         marginLeft: "14%"
  //       }}
  //     />
  //   );
  // };

  // const renderHeader = () => {
  //   return <SearchBar placeholder="Search members Here..." lightTheme round />;
  // };

  // const renderFooter = () => {
  //   if (!membersState.isLoading) return null;

  //   return (
  //     <View
  //       style={{
  //         paddingVertical: 20,
  //         borderTopWidth: 1,
  //         borderColor: "#CED0CE"
  //       }}
  //     >
  //       <ActivityIndicator animating size="large" />
  //     </View>
  //   );
  // };
  // return (

  //   <View style={styles.container}>

  //     <View style={styles.signupTextCont}>
  //       <Text style={styles.signupText}>New Member? </Text>
  //     </View>
  //   </View>
  // );


  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the membersState
      // Update FilteredDataSource
      const newData = membersState.matesData.filter(function (item) {
        const itemData = item.surname
          ? item.surname.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with membersState
      setFilteredDataSource(membersState);
      setSearch(text);
    }
  };
  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text
        style={styles.FlatListItemStyle}
        onPress={() => getItem(item)}>
        {'  '}
        <Icon name={'person-circle-outline'} color='#1A237E' size={30} />
        {'  '}
        {item.other_names.toUpperCase()}
        {' '}
        {item.surname.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert(' Name : ' + item.other_names + ' Phone: ' + item.phone);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBar
          round
          lightTheme={true}
          searchIcon={{ size: 18 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Search for your class mate..."
          value={search}

        />
        {membersState.isLoading == true ? <ActivityIndicator size="large" /> : (
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}

          />
        )}
      </View>
    </SafeAreaView>
  );


  // return (
  //   <View style={styles.container}>
  //     <SearchBar
  //       placeholder="Search for your class mate..."
  //       onChangeText={ }
  //       value={search}
  //     />
  //     {
  //       membersState.isLoading == true ? <ActivityIndicator size="large" /> : (

  //         membersState.matesData.map((l, i) => (

  //           <ListItem key={i} bottomDivider>
  //             <Icon name='person-circle-outline' type="ionicon" color='#1A237E' size={40} />
  //             <ListItem.Content>
  //               <ListItem.Title>{l.surname} {l.other_names}</ListItem.Title>
  //               <ListItem.Subtitle>{l.phone}</ListItem.Subtitle>
  //             </ListItem.Content>
  //           </ListItem>
  //         )
  //         ))
  //     }
  //   </View>
  // )
  // return (
  //   <View style={styles.container}>
  //     <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
  //       <FlatList
  //         data={membersState.data}
  //         renderItem={({ item }) => (
  //           <ListItem
  //             roundAvatar
  //             title={`${item.other_names} ${item.surname}`}
  //             subtitle={<Text style={{ paddingLeft: 10 }}>House: {item.entry_house}</Text>}
  //             avatar={<Icon name={'user-circle'} type='Ionicons' color='#1A237E' size={40} />}
  //             containerStyle={{ borderBottomWidth: 0 }}
  //           />
  //         )}
  //         keyExtractor={(item, index) => index.toString()}
  //         //keyExtractor={item => item.email}
  //         // ItemSeparatorComponent={renderSeparator}
  //         // ListHeaderComponent={renderHeader}
  //         // ListFooterComponent={renderFooter}
  //         onEndReachedThreshold={50}
  //       />
  //     </List>
  //   </View>
  // );

}

export default ClassMates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white',
    alignContent: 'center'
  },
  FlatListItemStyle: {
    padding: 8,
    fontSize: 16,
    height: 54,
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
