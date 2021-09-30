import * as React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import firebase from "firebase";
const { width } = Dimensions.get("screen");
import db from "../config";

import { Header, Icon, Badge } from "react-native-elements";

export default class MyForest extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          marginTop: -25,
          backgroundColor: "#1B2E0F",
        }}
      >
        <Header
          centerComponent={{
            text: "GreenPin",
            style: { color: "#90A5A9", fontSize: 20, fontWeight: "bold" },
          }}
          rightComponent={
            <Icon
              name="qrcode"
              type="font-awesome"
              color="black"
              onPress={() => {
                this.props.navigation.navigate("QRCode");
              }}
            />
          }
          backgroundColor="#eaf8fe"
        />
        <Text
          style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 300,
            fontSize: 23,
            backgroundColor: "#1B2E0F",
            color: "#73FA79",
          }}
        >
          Problem with React Native Maps.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -710,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
