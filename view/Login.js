import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import * as Print from 'expo-print';

export default class App extends Component {
    async createPDF() {
        let filePath = await Print.printToFileAsync({
          html: "<h1>PDF TEST</h1>",
          width : 612,
          height : 792,
          base64 : false
    });
    }
  render() {
    return(
      <View>
        <TouchableHighlight onPress={this.createPDF}>
          <Text>Create PDF</Text>
        </TouchableHighlight>
      </View>
    )
  }
}