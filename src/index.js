import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Todo from "./components/Todo";

export default class App extends Component {
  state = {
    user: "Humberto Jr",
    todos: [
      { id: 0, text: "Fazer café" },
      { id: 1, text: "Estudar o GoNative" },
      { id: 2, text: "Estudar javascript" }
    ]
  };

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Math.random(), text: "Ser Pleno este ano" }
      ]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.user}</Text>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}

        <Button title="Add Todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
