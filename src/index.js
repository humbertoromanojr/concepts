import "./config/ReactotronConfig";

import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box}>
          <Text style={styles.textWhite}>Pleno React Native</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    // default - flexDirection: 'column',
    flexDirection: "row",
    // include elements below
    flexWrap: "wrap",
    // dafault - justifyContent: 'flex-start',
    justifyContent: "center",
    // dafault - alignItems: 'flex-start',
    // funciona em uma linha - it works one line
    alignItems: "center"
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: "#f00",
    margin: 10,
    padding: 10
  },
  textWhite: {
    color: "#fff"
  }
});
