import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default function App() {
  const [ counter, setCounter ] = useState(0);
    return(
      <View style={styles.container}>
        <Text style={styles.mainTitle}> Contador de Pessoas </Text>
        <View style={styles.body}>
          <Text style={styles.counterOutput}> {counter} </Text>
          <View style={styles.buttonsContainer}>
            <Button color='#009929' title='+' fontWeight='bold' onPress={() => setCounter( counter + 1 )} />
            <Button color='#ff0000' title='-' fontWeight='bold' onPress={() => setCounter( counter - 1 )} />
          </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#ffe4e1',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainTitle: {
    padding: 10,
    marginTop: 32,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5c0010',
  },
  counterOutput: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    width: '70%',
    height: 80,
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', 
  }
});