import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";

export default class Todo extends Component {
  render() {
    return (
      <View>
        <Text>Estudar React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
