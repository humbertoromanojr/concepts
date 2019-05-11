import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Todo from "./components/Todo";

export default class App extends Component {
  state = {
    todos: ["Fazer café", "Estudar o GoNative", "Estudar javascript"]
  };

  addTodo = () => {
    this.setState({ todos: ["Ser PLENO React Native"] });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.map(todo => (
          <Todo title={todo} />
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
