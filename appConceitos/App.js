import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking } from 'react-native';

class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.mainTitle}> Meu Perfil </Text>
    
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <Image
          source={require('./assets/leonardo.png')}
          style={styles.img} />
        
          <Text style={styles.title}> Dados Pessoais </Text>
          <Text style={styles.informations}> Leonardo Hidemitsu Yogui Yamashiro </Text>
          <Text style={styles.informations}> 21 anos </Text>
          <Text style={styles.informations}> 22/07/2001 </Text>
          <Text style={styles.linkedin} onPress={() => 
          Linking.openURL('https://www.linkedin.com/in/leonardo-hidemitsu-7b9310237')}> LinkedIn </Text>

          <Text style={styles.title}> Formação </Text>
          <Text style={styles.infoTitle}> Ensino Médio </Text>
          <Text style={styles.informations}> Formado na Escola Católica Liceu Santista localizada em Santos. {'\n'}Conclusão: Dezembro/2019 </Text>
          <Text style={styles.infoTitle}> Ensino Superior </Text>
          <Text style={styles.informations}> Tecnólogo em Sistemas para Internet na Faculdade de Tecnologia da 
          Baixada Santista (FATEC Rubens Lara). {'\n'}Conclusão: Dezembro/2022 </Text>

          <Text style={styles.title}> Experiência </Text>
          <Text style={styles.informations}> Ainda não possuo nenhuma experiência na área da tecnologia </Text>

          <Text style={styles.title}> Projetos </Text>
          <Text style={styles.infoTitle}> Projeto 1 - Artigo Científico </Text>
          <Text style={styles.informations}> Ainda em desenvolvimento 
          o nosso artigo será sobre 'Computadores Quânticos'.
          </Text>

          <Text>
            {'\n'}{'\n'}
          </Text>

          <Image 
          source={require('./assets/thaylla.jpg')}
          style={styles.img} />
        
          <Text style={styles.title}> Dados Pessoais </Text>
          <Text style={styles.informations}> Thaylla de Santana Bispo dos Santos </Text>
          <Text style={styles.informations}> 21 anos </Text>
          <Text style={styles.informations}> 06/06/2001 </Text>
          <Text style={styles.linkedin} onPress={() => 
            Linking.openURL('https://www.linkedin.com/in/thaylla-de-santana-894b42236')}> LinkedIn </Text>

          <Text style={styles.title}> Formação </Text>
          <Text style={styles.infoTitle}> Ensino Médio </Text>
          <Text style={styles.informations}> Formada na Escola Estadual Margarida Pinho Rodrigues localizada em seu bairro em São Vicente
          {'\n'}Conclusão: Dezembro/2019 </Text>
          <Text style={styles.infoTitle}> Ensino Superior </Text>
          <Text style={styles.informations}> Tecnólogo em Sistemas para Internet na Faculdade de Tecnologia da Baixada Santista 
          (FATEC Rubens Lara). {'\n'}Conclusão: Dezembro/2022  
          </Text>

          <Text style={styles.title}> Experiência </Text>
          <Text style={styles.infoTitle}> Desenvolvedora Mobile e Designer Gráfico </Text>
          <Text style={styles.informations}> No momento está atuando como Designer Gráfico 
          em uma Cooperativa de Uber, conhecida em São Vicente como Baixada Cooper 013 ou, somente, Cooper 013. </Text>

          <Text style={styles.title}> Projetos </Text>
          <Text style={styles.infoTitle}> Projeto 1 - Artigo Científico </Text>
          <Text style={styles.informations}> Ainda em desenvolvimento o nosso artigo será sobre 'Computadores Quânticos'.
          </Text>
        </ScrollView>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  mainTitle: {
    padding: 1,
    marginTop: 16,
    paddingVertical: 8,
    color: "#660d14",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold"
  },
  title: {
    marginTop: 16,
    marginLeft: 20,
    paddingVertical: 8,
    color: "#660d14",
    textAlign: 'left',
    fontSize: 20,
    fontWeight: "bold"
  }, 
  infoTitle: {
    color: '#000', 
    fontStyle: 'italic', 
    fontWeight: 'bold', 
    fontSize: 14, 
    marginLeft: 22, 
    textAlign: 'left'
  },
  img: {
    width: 400, 
    height: 220, 
    resizeMode: 'contain'
  },
  informations: {
    color: '#000',
    fontSize: 14, 
    marginLeft: 22, 
    textAlign: 'left'
  }, 
  linkedin: {
    color: '#2196f3', 
    textDecorationLine: 'underline', 
    fontSize: 14, 
    marginLeft: 22, 
    textAlign: 'left'
  }
});
