import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Todo from "./components/Todo";

export default class App extends Component {
  state = {
    user: "Humberto Jr",
    inCall: "",
    todos: [
      { id: 0, text: "Fazer café" },
      { id: 1, text: "Estudar o GoNative" },
      { id: 2, text: "Estudar javascript" }
    ]
  };

  componentDidMount() {
    // executado na hora o component for renderizado na tela
    // executed on time the component is rendered on the screen

    setTimeout(() => {
      this.setState({ inCall: "Hello World, serei PLENO em React Native" });
    }, 3000);
  }

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
        <Text>{this.state.inCall}</Text>
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
