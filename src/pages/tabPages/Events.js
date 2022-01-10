import React, { useContext, useEffect, useReducer, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Alert, ActivityIndicator, Platform
} from 'react-native';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';




const OurEvents = () => {

  const initialstate = {
    isLoading: false,
    eventsData: [],
    hasError: false
  };

  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "FETCHING EVENTS REQUEST":
        return {
          ...state,
          isLoading: true,
          hasError: false
        };
      case "FETCHING EVENTS SUCCESS":
        return {
          ...state,
          isLoading: false,
          eventsData: action.data
        };
      case "FETCHING EVENTS FAIL":
        return {
          ...state,
          isLoading: false,
          hasError: true
        };
      default:
        return state;
    }
  };

  const LeftContent = props => <Avatar.Icon {...props} icon="calendar-multiple" />

  const [eventsState, dispatch] = useReducer(reducerFunction, initialstate);

  const fetchEvent = async () => {
    try {
      const response = await fetch('https://schoolshell.com/icoba_app/events.php')
      const events = await response.json()
      //console.log(events)
      dispatch({ type: "FETCHING EVENTS SUCCESS", data: events });

    } catch (error) {

    }

  }


  useEffect(() => {

    dispatch({ type: "FETCHING EVENTS REQUEST" });
    fetchEvent()

    // fetch('https://schoolshell.com/icoba_app/events.php', {
    //   method: 'post',
    //   header: {
    //     'Accept': 'application/json',
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     // we will pass our input data to server
    //     //gradYear: myGrad
    //   })

    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log('sucessful: ', responseJson);
    //     dispatch({ type: "FETCHING EVENTS SUCCESS", data: responseJson });

    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     console.log('unsucessful: ', eventsState);
    //     dispatch({ type: "FETCHING EVENTS FAIL", data: responseJson });
    //   });
  }, []);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>

          {eventsState.isLoading == true ? <ActivityIndicator style={styles.loading} size="large" /> : (

            eventsState.eventsData.map((ev, i) => (
              <Card key={i}>
                <Card.Title title={ev.title} subtitle={ev.subtTitle} left={LeftContent} />
                <Card.Cover source={{ uri: ev.image }} />
                <Card.Content>
                  {/* <Title>Card title</Title> */}
                  <Paragraph style={{ marginVertical: 10 }}>{ev.details}</Paragraph>
                </Card.Content>
              </Card>
            ))
          )}

        </View>
      </ScrollView>
    </SafeAreaView>

  );

}

export default OurEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white',
    alignContent: 'center'
  },
  loading: {
    marginTop: 70

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
