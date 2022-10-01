import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      numberHolder: ''
    }
  }

  gerarNumeroAleatorio = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    this.setState({
      numberHolder : randomNumber
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}> Jogo do Número Aleatório </Text>
        <View style={styles.game}>
          <Text style={styles.enunciado}> Pense em um número de 0 à 10 </Text>
          <Image style={styles.img} source={require('./assets/random-numbers.png')}/>
          <Text style={styles.resultado}> Resultado: {this.state.numberHolder} </Text>
          <TouchableOpacity style={styles.btn}
          onPress={this.gerarNumeroAleatorio}> 
            <Text> Descobrir </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f5f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    marginBottom: 12,
    color: '#79659a',
    fontSize: 24,
    fontWeight: '700',
  },
  game: {
    fontSize: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enunciado: {
    fontSize: 15,
    marginBottom: 8
  },
  img: {
    width: 300,
    height: 160,
    resizeMode: 'contain'
  },
  resultado: {
    marginTop: 15,
    marginBottom: 15,
    color: '#8f7193',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btn: {
    backgroundColor: '#d3bcf6',
    fontSize: 21,
    fontWeight: '700',
    padding: 5,
    alignItems: "center"
  },
  texto: {
    padding: 5,
    fontSize: 17,
    fontWeight: '700'
  }
});
