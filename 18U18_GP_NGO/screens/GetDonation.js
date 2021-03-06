import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import firebase from "firebase";
import db from "../config";
import { Header, Icon, Avatar } from "react-native-elements";
export default class NGOeventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ngoId: firebase.auth().currentUser.email,
      eventId: this.props.navigation.getParam("eventDetails")["eventId"],
      eventDetails:
        this.props.navigation.getParam("eventDetails")["eventDetails"],
      eventName: this.props.navigation.getParam("eventDetails")["eventName"],
      eventImage: this.props.navigation.getParam("eventDetails")["eventImage"],
      eventMinimumAmount:
        this.props.navigation.getParam("eventDetails")["minimumDonationAmount"],
      preferedPlants: "",
    };
  }

  componentDidMount() {}

  donate = () => {
    db.collection("donations").add({
      ngoId: this.state.ngoId,
      eventId: this.state.eventId,
      eventName: this.state.eventName,
      eventDetails: this.state.eventDetails,
      preferedPlant: this.state.preferedPlants,
      eventMinimumAmount: this.state.eventMinimumAmount,
    });

    alert("Plant donated to the event");
    this.props.navigation.goBack();
    Alert.alert("Plant donated to the event");
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          borderRadius: 0,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1B2E0F",
          marginTop: -30,
        }}
      >
        <Header
          centerComponent={{
            text: "GreenPin",
            style: { color: "#90A5A9", fontSize: 20, fontWeight: "bold" },
          }}
          leftComponent={
            <Icon
              name="arrow-left"
              type="font-awesome"
              color="#696969"
              onPress={() => {
                this.props.navigation.navigate("Donation");
              }}
            />
          }
          backgroundColor="#eaf8fe"
        />

        <View style={styles.modalContainer}>
          <Text
            style={{
              justifyContent: "center",
              alignSelf: "center",
              fontSize: 30,
              color: "#73FA79",
              margin: 20,
            }}
          >
            Plant A Tree
          </Text>
          <TextInput
            style={styles.formTextInput}
            placeholder="NGO"
            placeholderTextColor="white"
            value={this.state.ngoId}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="EventId"
            placeholderTextColor="white"
            value={this.state.eventId}
          />

          <TextInput
            style={styles.formTextInput}
            placeholder="Event Name"
            placeholderTextColor="white"
            value={this.state.eventName}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Event Description"
            placeholderTextColor="white"
            multiline={true}
            value={this.state.eventDetails}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder={"Prefered Plant"}
            placeholderTextColor="white"
            onChangeText={(text) => {
              this.setState({
                preferedPlants: text,
              });
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder={this.state.eventMinimumAmount}
            placeholderTextColor="white"
            onChangeText={(value) => {
              this.setState({
                eventMinimumAmount: value,
              });
            }}
          />

          <TouchableOpacity
            style={styles.donation2Button}
            onPress={() => {
              this.donate();
            }}
          >
            <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
              donate
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: "center",
    borderColor: "#ffab91",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    fontWeight: "300",
    // fontFamily:'AvenirNext-Heavy',
    color: "green",
  },
  loginBox: {
    width: 300,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor: "#73FA79",
    fontSize: 20,
    marginBottom: 20,
    marginTop: 5,
  },
  button: {
    width: "75%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "blue",
    elevation: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },

  modalContainer: {
    flex: 5,
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B2E0F",
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 35,
    marginTop: 10,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: "center",
    borderColor: "white",
    color: "white",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 30,
    marginBottom: 2,
    padding: 10,
  },
  registerButton: {
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    borderColor: "#73FA79",
  },
  registerButtonText: {
    color: "#73FA79",
    fontSize: 15,
    fontWeight: "bold",
  },
  cancelButton: {
    width: 200,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  text: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20,
    marginTop: 10,
    marginRight: 30,
    marginLeft: 60,
  },
  donation1Button: {
    width: "95%",
    height: "8%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#375C1E",
    elevation: 10,
    marginTop: "10%",
  },
  donation2Button: {
    width: "60%",
    height: "5.5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#0b7a07",
    elevation: 20,
    marginTop: "15%",
  },
});
