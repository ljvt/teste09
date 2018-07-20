/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Ola {this.props.name}</Text>
    );
  }
}

export default class App extends Component {
  render() {
    let imagem = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' };
    return (
      <View>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <View>
          <Text style={{ fontSize: 25, color: 'red', marginLeft: 20 }}>Ola Mundo</Text>
          <TouchableHighlight onPress={() => alert('')} style={{ marginLeft: 10, backgroundColor: "#ccc" }}><Text>Confirmar</Text></TouchableHighlight>
          <Image source={imagem} style={{ width: 300, height: 300 }} />
          <Greeting name="Lazaro" />
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
