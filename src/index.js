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

  static getDerivedStateFromProps(nextProps, prevState) {
    /**
     * - Static, sem acesso a variável This;
     * - só consegue acessar via parametros (nextProps, prevState);
     * - executado antes ComponentDidMount e de cada atualização;
     * - unica responsabilidade, se tiver alguma variável no State que depende de algum valor em nossas propriedades;
     */

    /**
     * - Static, without access to variable This;
     * - can only access via parameters (nextProps, prevState);
     * - executed before ComponentDidMount and each update;
     * - only liability if you have any variable in the State that depends on some value in our properties;
     */

    return { inCall: nextProps.inCall };
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
