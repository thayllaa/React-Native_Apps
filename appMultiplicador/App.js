import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val1: '', val2: '', result: ''
    };
    this.multiplication = this.multiplication.bind(this);
  }

  multiplication() {
    this.setState({
      result: this.state.val1 * this.state.val2
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}> Multiplicador de Números </Text>
        <View>
          <TextInput style={styles.input} placeholder='Digite o 1º valor' 
          onChangeText={(texto)=>this.setState({val1: texto})} />
          <TextInput style={styles.input} placeholder='Digite o 2º valor' 
          onChangeText={(texto)=>this.setState({val2: texto})} />
          
          <Button style={styles.calc} title="Calcular" onPress={this.multiplication} />
          <Text style={styles.resultado}> Resultado: {this.state.result} </Text>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4fbfb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#7f00b2',
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    borderWidth: 0.6,
    borderRadius: 6,
    borderColor: '#222',
    margin: 10,
    fontSize: 17,
    padding: 10,
  },
  calc: {
    margin: 10,
    color: '#84b6f4',
  }, 
  resultado: {
    padding: '6%',
    fontSize: 20,
  }
});