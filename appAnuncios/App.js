import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}> Anúncios </Text>
        <ScrollView horizontal={true} 
        showsHorizontalScrollIndicator={false}>
          <View style={styles.ad}>
            <Image source={ require('./assets/livros-pub.png')} 
            style={{ margin: 11, width: 195, height: 190, 
            resizeMode: 'contain', borderRadius: 7 }} />
            <Text style={styles.details}> Quer conhecer sobre o ramo de
            Publicidade? Venha conhecer os melhores livros. 
            </Text>
          </View>
          <View style={styles.ad}>
            <Image source={ require('./assets/perfume.jpg')} 
            style={{ margin: 11, width: 195, height: 190,
            resizeMode: 'contain', borderRadius: 7 }} />
            <Text style={styles.details}> Não tem ideia de como presentear 
            alguém? Aqui temos o que precisa e com promoção!
            </Text>
          </View>
          <View style={styles.ad}>
            <Image source={ require('./assets/clothes.png')} 
            style={{ margin: 11, width: 195, height: 190, 
            resizeMode: 'contain', borderRadius: 7 }} />
            <Text style={styles.details}> Você acompanha as tendências e 
            ama andar na moda? Aqui é o seu lugar
            </Text>
          </View>
          <View style={styles.ad}>
            <Image source={ require('./assets/running-shoes.jpg')} 
            style={{ margin: 11, width: 195, height: 190, 
            resizeMode: 'contain', borderRadius: 7 }} />
            <Text style={styles.details}> Cansado de gastar dinheiro em 
            falsas promessas de conforto? Conheça nossa loja   
            </Text>
          </View>
          <View style={styles.ad}>
            <Image source={ require('./assets/jewels.jpg')} 
            style={{ margin: 11, width: 195, height: 190,
            resizeMode: 'contain', borderRadius: 7 }} />
            <Text style={styles.details}> Se você é um grande fã de jóias,
            está no lugar certo. Temos de tudo e com preço acessível.
            </Text>
          </View>
          <View style={styles.ad}>
            <Image source={ require('./assets/pets-acessories.jpeg')} 
            style={{ margin: 11, width: 195, height: 190, 
            resizeMode: 'contain', borderRadius: 7 }} />
            <Text style={styles.details}> Nada melhor do que um mimar o pet. 
            Aqui pode-se encontrar desde acessórios até roupas. 
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: 'purple',
    padding: 24,
    textAlign: 'center',
  },
  ad: {
    height: 285,
    width: 221,
    backgroundColor:'#e0e3ea',
  },
  details: {
    fontSize: 13,
    marginLeft: 8,
    padding: 4
  }
});

export default App;
