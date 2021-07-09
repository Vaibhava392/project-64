import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component{
    constructor() {
        super();
        this.state = {
            text: '',
            isSearchedPressed: '',
            word: '',
            lexicalCategory: '',
            examples: '',
            defination: '',
        }
    }
    render() {
        return(
            <View style={styles.container}>
    <TextInput
     style={StyleSheet.inputBox}
     onChangeText={text => {
         this.setState({
             text: text,
             isSearchedPressed: false,
             word: "Loading...",
             lexicalCategory: '',
             examples: [],
             defination: ""
         });
     }}
     value={this.state.text}
    />

    <TouchableOpacity
    style={styles.searchButton}
    onPress={() => {
        this.setState({isSearchedPressed: true});
        this.getWord(this.state.text)
    }}><Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
    </View>
        )
    }
}