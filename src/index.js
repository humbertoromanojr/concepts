import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    // default
    // flexDirection: 'column',
    flexDirection: "row"
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: "#f00",
    margin: 20
  }
});
