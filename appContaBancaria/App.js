import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Switch, Button, } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '', idade: '',
      mostrarNome: '', mostrarIdade: '',
      mostrarSexo: '', mostrarEscolaridade: '',
      mostrarLimite: '', mostrarBrasileiro: '',
      valor: 0, status: false, sexo: 0,
      generos: [
        {nome: "Masculino"},
        {nome: "Feminino"},
      ],
      escolaridade: 0,
      niveis: [
        {nome: "Ensino Fundamental 1"},
        {nome: "Ensino Fundamental 2"},
        {nome: "Ensino Médio"},
        {nome: "Ensino Superior"},
      ]
    };
    this.mostrar = this.mostrar.bind(this);
  };

  mostrar() {
    this.setState({
      mostrarNome: this.state.nome,
      mostrarIdade: this.state.idade,
      mostrarSexo: this.state.generos[this.state.sexo].nome,
      mostrarEscolaridade: this.state.niveis[this.state.escolaridade].nome,
      mostrarLimite: this.state.valor,
      mostrarBrasileiro: (this.state.status) ? "Sim" : "Não",
    });
  }

  render () {
    let sexoItem = this.state.generos.map( (valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })

    let escolaridadeItem = this.state.niveis.map( (valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })

    return (
      <View style={styles.container}>
        <Text style={styles.title}> Abertura de Conta </Text>
        <View>
          <Text style={styles.h1}> Nome </Text>
          <TextInput style={styles.input}
            placeholder='Nome'
            onChangeText={(texto)=>this.setState({nome: texto})}
          />

          <Text style={styles.h1}> Idade </Text>
          <TextInput style={styles.input}
            placeholder='Idade'
            onChangeText={(texto)=>this.setState({idade: texto})}
          />

          <Text style={styles.h1}> Sexo </Text>
          <Picker 
          selectedValue={this.state.sexo}
          onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemValue})}>
            {sexoItem}
          </Picker>

          <Text style={styles.h1}> Escolaridade </Text>
          <Picker selectedValue={this.state.escolaridade}
          onValueChange={ (itemValue, itemIndex) => this.setState({escolaridade: itemValue})}>
            {escolaridadeItem}
          </Picker>

          <Text style={styles.h1}> Limite </Text>
          <Slider minimumValue={100} maximumValue={500}
            step={50} onValueChange={ (valorSlider) => this.setState({valor: valorSlider})}
            value={this.state.valor} />

          <Text style={{textAlign: 'center'}}> {this.state.valor} </Text>

          <Text style={styles.h1}> Brasileiro </Text>
          <Switch value={this.state.status}
            onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})} />

          <Button style={styles.button} title="Confirmar" onPress={this.mostrar}/>

          <View>
            <Text style={styles.title}> Dados Informados: </Text>
            <Text style={styles.resultado}> Nome: {this.state.mostrarNome}</Text>
            <Text style={styles.resultado}> Idade: {this.state.mostrarIdade}</Text>
            <Text style={styles.resultado}> Sexo: {this.state.mostrarSexo}</Text>
            <Text style={styles.resultado}> Escolaridade: {this.state.mostrarEscolaridade}</Text>
            <Text style={styles.resultado}> Limite: {this.state.mostrarLimite}</Text>
            <Text style={styles.resultado}> Brasileiro: {this.state.mostrarBrasileiro} </Text>
          </View>
        </View>
      </View>
    );
  }
}

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
  button: {
    margin: 10,
    color: '#84b6f4',
  }, 
  h1: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  resultado: {
    padding: '2%',
    fontSize: 14,
  }
});
