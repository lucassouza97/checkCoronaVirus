import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Dados extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  _onItemPressBack = item => {
    this.props.navigation.replace('Home');
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this._onItemPressBack()}>
          <Text> VOLTAR </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
