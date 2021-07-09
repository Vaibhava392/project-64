import * as React from 'react';
import {View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import dictionary from './database';

export default class App extends React.Component{
  render(){
    return(
      <View>
      <AppContainer/>
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
    HomeScreen: HomeScreen
  })

var word = dictionary[text]["word"]
var lexicalCategory = dictionary[text]["lexicalCategory"]
var definition = dictionary[text]["definition"]

this.setState({
  "word": word,
  "lexicalCategory": lexicalCategory,
  "definition": definition
})

const AppContainer = createAppContainer();