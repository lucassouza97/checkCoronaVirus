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
import {Text} from 'react-native';

export default class Contato extends Component {
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
        {/* <TextCopyrigth>Todos direitos reservados a equipe</TextCopyrigth> */}
        <LogoImage source={require('../../../assets/check.png')} />
      </Container>
    );
  }
}
