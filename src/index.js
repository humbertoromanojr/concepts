import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import Todo from './components/Todo';

  <script src="http://192.168.2.106:8097" />;

export default class App extends Component {
  state = {
    user: 'Humberto Jr',
    todos: [{ id: 0, text: 'fazer café' }],
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.user}</Text>
        <Todo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
