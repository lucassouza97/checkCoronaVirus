import React, {Component} from 'react';
<<<<<<< HEAD
import {
  Container,
  ImageBackground,
  BackButton,
  TextButton,
  BackImage,
  LogoImage,
  TextCopyrigth,
} from './styles';
=======
import {Text, View} from 'react-native';
>>>>>>> parent of c1c027c... add features

export default class Contato extends Component {
  _onItemPressBack = item => {
    this.props.navigation.replace('home');
  };

  render() {
    return (
<<<<<<< HEAD
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
=======
      <View>
        <Text> textInComponent </Text>
      </View>
>>>>>>> parent of c1c027c... add features
    );
  }
}
