import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

export default class Dados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      casos: '',
      suspeitos: '',
      mortes: '',
      recusa: '',
      updated_at: '',
      estado: '',
      uf: '',
    };
    this.loadStates = this.loadStates.bind(this);
  }

  componentDidMount() {
    this.loadStates();
  }

  loadStates() {
    this.setState({
      casos: '',
      suspeitos: '',
      mortes: '',
      recusa: '',
      estado: '',
      uf: '',
      updated_at: '',
      newState: '',
    });
    fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rj')
      .then(r => r.json())
      .then(json => {
        let s = this.state;
        s.casos = json.cases;
        s.suspeitos = json.suspects;
        s.mortes = json.deaths;
        s.recusa = json.refuses;
        s.estado = json.state;
        s.uf = json.uf;
        s.updated_at = format(
          parseISO(json.datetime),
          "'dia' dd 'de' MMMM', ás' H:mm'h'",
          {
            locale: pt,
          },
        );
        this.setState(s);
        console.log(json);
      });
  }

  static navigationOptions = {
    headerShown: false,
  };

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
          <Text> {this.state.estado} </Text>
          <Text> {this.state.uf} </Text>
          <Text> {this.state.mortes} </Text>
          <Text> {this.state.suspeitos} </Text>
          <Text> {this.state.casos} </Text>
          <Text> Atualizado em: {this.state.updated_at} </Text>
          <Text> VOLTAR </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
