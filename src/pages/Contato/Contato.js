import React, {Component} from 'react';
import {
  Container,
  ImageBackground,
  BackButton,
  TextButton,
  BackImage,
  LogoImage,
  TextCopyrigth,
} from './styles';

export default class Contato extends Component {
  _onItemPressBack = item => {
    this.props.navigation.replace('home');
  };

  render() {
    return (
      <Container>
        <ImageBackground
          source={require('../../../assets/BubblesContato.png')}
        />
        <BackImage source={require('../../../assets/Arrow.png')} />
        <BackButton onPress={this._onItemPressBack}>
          <TextButton> Voltar </TextButton>
        </BackButton>
        {/* <TextCopyrigth>Todos direitos reservados a equipe</TextCopyrigth> */}
        <LogoImage source={require('../../../assets/check.png')} />
      </Container>
    );
  }
}
