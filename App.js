

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import List from './src/components/list'
import Slide from './src/components/slider'



export default class App extends Component {
  render() {
    return (
      <View style={[{flex: 1}, styles.container]}>
          <Slide/>
          <List/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
    
  },
  
  
});

