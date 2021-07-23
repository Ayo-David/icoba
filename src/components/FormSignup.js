import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import DropDownPicker from "react-native-dropdown-picker";
import RNPicker from "rn-modal-picker";






export default function FormSignup() {

  // Login(){
  //   this.props.navigation.navigate('MainPage');


  // }
  const [data, setData] = React.useState({
    userEmail: "",
    userPassword: "",
    userVerifyPassword: '',
    userData: [],
    userFirstName: '',
    userLastName: '',
    userNameInSchool: '',
    userPhone: '',
    userEntryYear: '',
    userGradYear: '',
    userSchoolHouse: ''
  });

  const [pickerData, setPickerData] = useState({
    dataSource: [
      { id: 1934, name: '1934' },
      { id: 1935, name: '1935' },
      { id: 1936, name: '1936' },
      { id: 1937, name: '1937' },
      { id: 1938, name: '1938' },
      { id: 1939, name: '1939' },
      { id: 1940, name: '1940' },
      { id: 1941, name: '1941' },
      { id: 1942, name: '1942' },
      { id: 1943, name: '1943' },
      { id: 1944, name: '1944' },
      { id: 1945, name: '1945' },
      { id: 1946, name: '1946' },
      { id: 1947, name: '1947' },
      { id: 1948, name: '1948' },
      { id: 1949, name: '1949' },
      { id: 1950, name: '1950' },
      { id: 1951, name: '1951' },
      { id: 1952, name: '1952' },
      { id: 1953, name: '1953' },
      { id: 1954, name: '1954' },
      { id: 1955, name: '1955' },
      { id: 1956, name: '1956' },
      { id: 1957, name: '1957' },
      { id: 1958, name: '1958' },
      { id: 1959, name: '1959' },
      { id: 1960, name: '1960' },
      { id: 6163, name: '6163' },
      { id: 6264, name: '6264' },
      { id: 6365, name: '6365' },
      { id: 6466, name: '6466' },
      { id: 6567, name: '6567' },
      { id: 6668, name: '6668' },
      { id: 6769, name: '6769' },
      { id: 6870, name: '6870' },
      { id: 6971, name: '6971' },
      { id: 7072, name: '7072' },
      { id: 7173, name: '7173' },
      { id: 7274, name: '7274' },
      { id: 7375, name: '7375' },
      { id: 7476, name: '7476' },
      { id: 7577, name: '7577' },
      { id: 7678, name: '7678' },
      { id: 7779, name: '7779' },
      { id: 7880, name: '7880' },
      { id: 7981, name: '7981' },
      { id: 8082, name: '8082' },
      { id: 8183, name: '8183' },
      { id: 8284, name: '8284' },
      { id: 8385, name: '8385' },
      { id: 8486, name: '8486' },
      { id: 8587, name: '8587' },
      { id: 1986, name: '1986' },
      { id: 1987, name: '1987' },
      { id: 1988, name: '1988' },
      { id: 1989, name: '1989' },
      { id: 1991, name: '1991' },
      { id: 1992, name: '1992' },
      { id: 1993, name: '1993' },
      { id: 1994, name: '1994' },
      { id: 1995, name: '1995' },
      { id: 1996, name: '1996' },
      { id: 1997, name: '1997' },
      { id: 1998, name: '1998' },
      { id: 1999, name: '1999' },
      { id: 2000, name: '2000' },
      { id: 2001, name: '2001' },
      { id: 2002, name: '2002' },
      { id: 2003, name: '2003' },
      { id: 2004, name: '2004' },
      { id: 2005, name: '2005' },
      { id: 2006, name: '2006' },
      { id: 2007, name: '2007' },
      { id: 2008, name: '2008' },
      { id: 2009, name: '2009' },
      { id: 2010, name: '2010' },
      { id: 2011, name: '2011' }
    ],
    placeHolderText: "Select Graduation Year",
    userGradYear: '',
  });



  const textFirstNameChange = (val) => {
    setData({
      ...data,
      userFirstName: val,
    });
  };
  const textLastNameChange = (val) => {
    setData({
      ...data,
      userLastName: val
    })
  };
  const textNameinSchoolChange = (val) => {
    setData({
      ...data,
      userNameInSchool: val
    })
  };


  const textEmailChange = (val) => {
    setData({
      ...data,
      userEmail: val
    })
  };
  const textPasswordChange = (val) => {
    setData({
      ...data,
      userPassword: val
    })
  };
  const textVerifyPasswordChange = (val) => {
    setData({
      ...data,
      userVerifyPassword: val
    })
  };
  const textPhoneChange = (val) => {
    setData({
      ...data,
      userPhone: val
    })
  };
  const textEntryChange = (val) => {
    setData({
      ...data,
      userEntryYear: val
    })
  };
  const textGradYearChange = (val) => {
    setData({
      ...data,
      userGradYear: val
    })
  };

  const textSchoolHouseChange = (val) => {
    setData({
      ...data,
      userSchoolHouse: val
    })
  };

  const changeSelectedValue = (index, item) => {
    setPickerData({ ...pickerData, userGradYear: item.name })
    //console.log(pickerData.userGradYear);
  };







  const userRegister = () => {

    fetch('https://schoolshell.com/icoba_app/regmydata.php', {
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        firstname: data.userFirstName,
        lastname: data.userLastName,
        nameinschool: data.userNameInSchool,
        email: data.userEmail,
        phone: data.userPhone,
        password: data.userPassword,
        gradYear: pickerData.userGradYear,
        schoolHouse: data.userSchoolHouse

      })

    })
      .then((response) => response.json())
      .then((responseJson) => {

        alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });

  }



  return (
    <View style={styles.container}>


      {/* <Picker
        selectedValue={data.userGradYear}
        style={styles.selectBox}
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        onValueChange={(itemValue, itemIndex) => textGradYearChange(itemValue)}
      >
        <Picker.Item label="1934" value="1934" />
        <Picker.Item label="1935" value="1935" />
        <Picker.Item label="1936" value="1936" />
        <Picker.Item label="1937" value="1937" />
        <Picker.Item label="1938" value="1938" />
        <Picker.Item label="1939" value="1939" />
        <Picker.Item label="1940" value="1940" />
        <Picker.Item label="1941" value="1941" />
        <Picker.Item label="1942" value="1942" />
        <Picker.Item label="1943" value="1943" />
        <Picker.Item label="1944" value="1944" />
        <Picker.Item label="1945" value="1945" />
        <Picker.Item label="1946" value="1946" />
        <Picker.Item label="1947" value="1947" />
        <Picker.Item label="1948" value="1948" />
        <Picker.Item label="1949" value="1949" />
        <Picker.Item label="1950" value="1950" />
        <Picker.Item label="1951" value="1951" />
        <Picker.Item label="1952" value="1952" />
        <Picker.Item label="1953" value="1953" />
        <Picker.Item label="1954" value="1954" />
        <Picker.Item label="1955" value="1955" />
        <Picker.Item label="1956" value="1956" />
        <Picker.Item label="1957" value="1957" />
        <Picker.Item label="1958" value="1958" />
        <Picker.Item label="1959" value="1959" />
        <Picker.Item label="1960" value="1960" />
        <Picker.Item label="6163" value="6163" />
        <Picker.Item label="6264" value="6264" />
        <Picker.Item label="6365" value="6365" />
        <Picker.Item label="6466" value="6466" />
        <Picker.Item label="6567" value="6567" />
        <Picker.Item label="6668" value="6668" />
        <Picker.Item label="6769" value="6769" />
        <Picker.Item label="6870" value="6870" />
        <Picker.Item label="6971" value="6971" />
        <Picker.Item label="7072" value="7072" />
        <Picker.Item label="7173" value="7173" />
        <Picker.Item label="7274" value="7274" />
        <Picker.Item label="7375" value="7375" />
        <Picker.Item label="7476" value="7476" />
        <Picker.Item label="7577" value="7577" />
        <Picker.Item label="7678" value="7678" />
        <Picker.Item label="7779" value="7779" />
        <Picker.Item label="7880" value="7880" />
        <Picker.Item label="7981" value="7981" />
        <Picker.Item label="8082" value="8082" />
        <Picker.Item label="8183" value="8183" />
        <Picker.Item label="8284" value="8284" />
        <Picker.Item label="8385" value="8385" />
        <Picker.Item label="8486" value="8486" />
        <Picker.Item label="8587" value="8587" />
        <Picker.Item label="1986" value="1986" />
        <Picker.Item label="1987" value="1987" />
        <Picker.Item label="1988" value="1988" />
        <Picker.Item label="1989" value="1989" />
        <Picker.Item label="1991" value="1991" />
        <Picker.Item label="1992" value="1992" />
        <Picker.Item label="1993" value="1993" />
        <Picker.Item label="1994" value="1994" />
        <Picker.Item label="1995" value="1995" />
        <Picker.Item label="1996" value="1996" />
        <Picker.Item label="1997" value="1997" />
        <Picker.Item label="1998" value="1998" />
        <Picker.Item label="1999" value="1999" />
        <Picker.Item label="2000" value="2000" />
        <Picker.Item label="2001" value="2001" />
        <Picker.Item label="2002" value="2002" />
        <Picker.Item label="2003" value="2003" />
        <Picker.Item label="2004" value="2004" />
        <Picker.Item label="2005" value="2005" />
        <Picker.Item label="2006" value="2006" />
        <Picker.Item label="2007" value="2007" />
        <Picker.Item label="2008" value="2008" />
        <Picker.Item label="2009" value="2009" />
        <Picker.Item label="2010" value="2010" />
        <Picker.Item label="2011" value="2011" />

      </Picker> */}
      {/* <DropDownPicker
        items={[
          { label: '1934', value: '1934' },
          { label: '1935', value: '1935' },
          { label: '1936', value: '1936' },
          { label: '1937', value: '1937' },
          { label: '1938', value: '1938' },
          { label: '1939', value: '1939' },
          { label: '1940', value: '1940' },
          { label: '1941', value: '1941' },
          { label: '1942', value: '1942' },
          { label: '1943', value: '1943' },
          { label: '1944', value: '1944' },
          { label: '1945', value: '1945' },
          { label: '1946', value: '1946' },
          { label: '1947', value: '1947' },
          { label: '1948', value: '1948' },
          { label: '1949', value: '1949' },
          { label: '1950', value: '1950' },
          { label: '1951', value: '1951' },
          { label: '1952', value: '1952' },
          { label: '1953', value: '1953' },
          { label: '1954', value: '1954' },
          { label: '1955', value: '1955' },
          { label: '1956', value: '1956' },
          { label: '1957', value: '1957' },
          { label: '1958', value: '1958' },
          { label: '1959', value: '1959' },
          { label: '1960', value: '1960' },
          { label: '6163', value: '6163' },
          { label: '6264', value: '6264' },
          { label: '6365', value: '6365' },
          { label: '6466', value: '6466' },
          { label: '6567', value: '6567' },
          { label: '6668', value: '6668' },
          { label: '6769', value: '6769' },
          { label: '6870', value: '6870' },
          { label: '6971', value: '6971' },
          { label: '7072', value: '7072' },
          { label: '7173', value: '7173' },
          { label: '7274', value: '7274' },
          { label: '7375', value: '7375' },
          { label: '7476', value: '7476' },
          { label: '7577', value: '7577' },
          { label: '7678', value: '7678' },
          { label: '7779', value: '7779' },
          { label: '7880', value: '7880' },
          { label: '7981', value: '7981' },
          { label: '8082', value: '8082' },
          { label: '8183', value: '8183' },
          { label: '8284', value: '8284' },
          { label: '8385', value: '8385' },
          { label: '8486', value: '8486' },
          { label: '8587', value: '8587' },
          { label: '1986', value: '1986' },
          { label: '1987', value: '1987' },
          { label: '1988', value: '1988' },
          { label: '1989', value: '1989' },
          { label: '1991', value: '1991' },
          { label: '1992', value: '1992' },
          { label: '1993', value: '1993' },
          { label: '1994', value: '1994' },
          { label: '1995', value: '1995' },
          { label: '1996', value: '1996' },
          { label: '1997', value: '1997' },
          { label: '1998', value: '1998' },
          { label: '1999', value: '1999' },
          { label: '2000', value: '2000' },
          { label: '2001', value: '2001' },
          { label: '2002', value: '2002' },
          { label: '2003', value: '2003' },
          { label: '2004', value: '2004' },
          { label: '2005', value: '2005' },
          { label: '2006', value: '2006' },
          { label: '2007', value: '2007' },
          { label: '2008', value: '2008' },
          { label: '2009', value: '2009' },
          { label: '2010', value: '2010' },
          { label: '2011', value: '2011' },
        ]}
        placeholder="Graduation Year"
        containerStyle={styles.selectBox}
        style={{ backgroundColor: '#ffffff' }}
        dropDownStyle={{ backgroundColor: 'white', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        labelStyle={{
          fontSize: 15,
          textAlign: 'center',
          color: '#000'
        }}
        searchableStyle={{ backgroundColor: '#dfdfdf' }}
        onChangeItem={item => textGradYearChange(item.value)}
      /> */}

      <RNPicker
        dataSource={pickerData.dataSource}
        dummyDataSource={pickerData.dataSource}
        defaultValue={false}
        pickerTitle={"Graduation Year"}
        showSearchBar={true}
        disablePicker={false}
        changeAnimation={"none"}
        searchBarPlaceHolder={"Search....."}
        showPickerTitle={true}
        searchBarContainerStyle={styles.searchBarContainerStyle}
        pickerStyle={styles.pickerStyle}
        itemSeparatorStyle={styles.itemSeparatorStyle}
        pickerItemTextStyle={styles.listTextViewStyle}
        selectedValue={(index, item) => changeSelectedValue(index, item)}
        selectedLabel={pickerData.userGradYear}
        placeHolderLabel={pickerData.placeHolderText}
        selectLabelTextStyle={styles.selectLabelTextStyle}
        placeHolderTextStyle={styles.placeHolderTextStyle}
        dropDownImageStyle={styles.dropDownImageStyle}
      //dropDownImage={require("./res/ic_drop_down.png")}

      />

      <Text style={styles.infostyle} >Select the year you graduated after A'Level Exams or/and WAEC</Text>



      <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="First Name"
        placeholderTextColor="#ffffff"
        selectionColor="#fff"
        keyboardType="default"
        onChangeText={(val) => textFirstNameChange(val)}

      />

      <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Last Name"
        placeholderTextColor="#ffffff"
        selectionColor="#fff"
        keyboardType="default"
        onChangeText={(val) => textLastNameChange(val)}
      />


      <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Name while in School"
        placeholderTextColor="#ffffff"
        selectionColor="#fff"
        keyboardType="default"
        onChangeText={(val) => textNameinSchoolChange(val)}
      />
      <Text style={styles.infostyle} >Nickname is permissible</Text>



      <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Email"
        placeholderTextColor="#ffffff"
        selectionColor="#fff"
        keyboardType="email-address"
        onChangeText={(val) => textEmailChange(val)}
      />

      <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Phone"
        placeholderTextColor="#ffffff"
        selectionColor="#fff"
        keyboardType="phone-pad"
        onChangeText={(val) => textPhoneChange(val)}
      />
      <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#ffffff"
        // ref={(input) => this.password = input}
        onChangeText={(val) => textPasswordChange(val)}
      />
      <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Verify Password"
        secureTextEntry={true}
        placeholderTextColor="#ffffff"
        // ref={(input) => this.password = input}
        onChangeText={(val) => textVerifyPasswordChange(val)}
      />

      {/* <OptionList overlayStyles={styles.optionOverlay} itemsStyles={styles.itemOverlay} ref="OPTIONLIST" /> */}


      <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="School House"
        placeholderTextColor="#ffffff"
        // ref={(input) => this.password = input}
        onChangeText={(val) => textSchoolHouseChange(val)}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={userRegister}>Submit</Text>
      </TouchableOpacity>


    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
    // ...(Platform.OS !== 'android' && {
    //   zIndex: 10
    // })
  },

  inputBox: {
    width: 300,
    height: 35,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },
  selectBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,255)',
    // borderRadius: 25,
    borderTopLeftRadius: 10, borderTopRightRadius: 10,
    borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
    // paddingHorizontal: 6,exop
    marginVertical: 10,
    height: 45,
    zIndex: 20
  },
  optionOverlay: {
    width: 300,
    height: 200,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },
  itemOverlay: {
    width: 300,
    height: 250,

  },


  selectText: {
    fontSize: 16,
    color: '#000000',
  },
  infostyle: {
    color: '#ffffff',
    width: 300,
  },


  button: {
    width: 300,
    backgroundColor: '#000033',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },

  // RNPICKER

  itemSeparatorStyle: {
    height: 1,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#D3D3D3"
  },
  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: "row",
    height: 40,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    backgroundColor: "rgba(255, 255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 10,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10
  },

  selectLabelTextStyle: {
    color: "#fff",
    textAlign: "left",
    width: "99%",
    padding: 10,
    flexDirection: "row"
  },
  placeHolderTextStyle: {
    color: "#fff",
    padding: 10,
    textAlign: "left",
    width: "99%",
    flexDirection: "row"
  },
  dropDownImageStyle: {
    marginLeft: 10,
    width: 10,
    height: 10,
    alignSelf: "center"
  },
  listTextViewStyle: {
    color: "#000",
    marginVertical: 10,
    flex: 0.9,
    marginLeft: 20,
    marginHorizontal: 10,
    textAlign: "left"
  },
  pickerStyle: {
    marginLeft: 18,
    elevation: 3,
    paddingRight: 25,
    marginRight: 10,
    marginBottom: 2,
    // shadowOpacity: 1.0,
    // shadowOffset: {
    //   width: 1,
    //   height: 1
    // },
    // borderWidth: 1,
    // shadowRadius: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    //shadowColor: "#d3d3d3",
    borderRadius: 25,
    flexDirection: "row",
    width: 300,

  }


});