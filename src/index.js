import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import TodoList from '~/components/Todos/Example/TodoList';

export default class App extends Component {
  state = {
    user: 'Humberto Jr',
    todos: [{ id: 0, text: 'fazer café' }],
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.user}</Text>
        <TodoList />
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
