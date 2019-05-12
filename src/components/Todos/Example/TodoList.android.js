import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, StyleSheet, Platform,
} from 'react-native';

const Todo = props => (
  <View>
    <Text>{props.title}</Text>
    {Platform.OS === 'ios' ? (
      <Text style={styles.platform}>IOS</Text>
    ) : (
      <Text style={styles.platform}>Android</Text>
    )}
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
  platform: {
    ...Platform.select({
      ios: {
        color: '#ff0',
        fontSize: 20,
        fontWeight: 'bold',
      },
      android: {
        color: '#f00',
        fontSize: 20,
        fontWeight: 'bold',
      },
    }),
  },
});

export default Todo;
