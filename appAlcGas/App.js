import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: '',
      valorAlc: '',
      valorGas: ''
    };

    this.verificar = this.verificar.bind(this);
  }

  verificar() {
    this.setState({
      resultado: this.state.valorAlc / this.state.valorGas
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.mainTitle}> Álcool ou Gasolina </Text>
        <View>
          <Image style={styles.img}
          source={require('./assets/gas-alc.jpeg')} />
          <View>
            <TextInput style={styles.inputs} placeholder='Valor do álcool' 
            onChangeText={ (texto) => this.setState({valorAlc: texto})} />
            <TextInput style={styles.inputs} placeholder='Valor da gasolina' 
            onChangeText={ (texto) => this.setState({valorGas: texto})} />
            <Button style={styles.btn} title="Verificar" onPress={this.verificar}> </Button>
          </View>
          <View>
            <Text style={styles.resultado}>
              Resultado: {this.state.resultado}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  img: {
    width: 300,
    height: 160,
    resizeMode: 'contain'
  },
  inputs: {
    height: 30,
    borderWidth: 0.6,
    borderRadius: 6,
    borderColor: '#222',
    margin: 10,
    fontSize: 17,
    paddingLeft: 10,
  },
  resultado: {
    marginTop: 12,
    color: '#f9a59a',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
