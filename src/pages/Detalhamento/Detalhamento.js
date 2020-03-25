import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  Container,
  ImageBackground,
  BackButton,
  TextButton,
  BackImage,
  StateText,
} from './styles';

export default class Detalhamento extends Component {
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

  _onItemPressBack = item => {
    this.props.navigation.replace('Home');
  };

  render() {
    return (
      <Container>
        <ImageBackground
          source={require('../../../assets/BubblesContato.png')}
        />
        <BackImage source={require('../../../assets/Arrow.png')} />
        <BackButton>
          <TextButton> Voltar </TextButton>
        </BackButton>
        <StateText>Rio de Janeiro</StateText>
      </Container>
    );
  }
}
