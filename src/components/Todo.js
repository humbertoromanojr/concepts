import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const Todo = props => (
  <View>
    <Text>{props.title}</Text>
  </View>
);

Todo.defaultProps = {
  title: 'Ser PLENO em React native',
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Todo;
