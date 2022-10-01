import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: '',
      valorPeso: '',
      valorAlt: ''
    }
    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    this.setState({
      resultado: this.state.valorPeso / (this.state.valorAlt * this.state.valorAlt)
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.mainTitle}> Calculado do IMC </Text>
        <View>
          <Image style={styles.img}
          source={require('./assets/tabela-imc.png')} />
          <View>
            <TextInput style={styles.inputs} placeholder='Seu peso' 
            onChangeText={ (texto) => this.setState({valorPeso: texto})} />
            <TextInput style={styles.inputs} placeholder='Sua altura' 
            onChangeText={ (texto) => this.setState({valorAlt: texto})} />
            <Button color='#5dc1b9' fontWeight='bold' borderRadius='8' title="Calcular" 
            onPress={this.calcular}> </Button>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    color: '#004846',
    fontSize: 20,
    fontWeight: 'bold',
  },
  img: {
    width: 350,
    height: 300,
    resizeMode: 'contain'
  },
  inputs: {
    height: 30,
    borderWidth: 0.6,
    borderRadius: 6,
    borderColor: '#222',
    margin: 10,
    fontSize: 17,
    padding: 5,
  },
  resultado: {
    marginTop: 17,
    color: '#239089',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
