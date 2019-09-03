import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Image
} from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      randomColor: null,
      btnRandomColor: null
    };
  }

  getRandomColor = () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
    );
  };

  changeButtonColor = () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
    );
  };
  myButtonPressed = () => {
    this.setState({ randomColor: this.getRandomColor() });
    this.setState({ btnRandomColor: this.changeButtonColor() });
  };

  render() {
    return (
      <View
        style={[styles.container, { backgroundColor: this.state.randomColor }]}
      >
        <TouchableOpacity onPress={this.myButtonPressed}>
          <Text
            style={[
              styles.text,
              { backgroundColor: this.state.btnRandomColor }
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 30,
    paddingVertical: 12,
    paddingHorizontal: 40,
    color: "white",
    borderRadius: 10,
    borderColor: "#FFFFFF",
    borderWidth: 2
  }
});
