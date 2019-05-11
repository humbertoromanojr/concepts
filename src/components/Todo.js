import React from "react";
import PropTypes from "prop-types";

import { View, Text, StyleSheet } from "react-native";

// desestructuring ES6 -> props.title
const Todo = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

Todo.defaultProps = {
  title: "Ser PLENO em React native"
};

Todo.propTypes = {
  title: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Todo;
