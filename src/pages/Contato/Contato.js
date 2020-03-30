import React, {Component} from 'react';
import {
  Container,
  ImageBackground,
  BackButton,
  TextButton,
  BackImage,
  LogoImage,
  TextCopyrigth,
  ViewCopyrigth,
  ViewInfo,
  TextInfo,
  TextLink,
  TextAuthors,
  TextContact,
  TextContact2,
  TextSquad,
  TextObs,
  ViewSubTexts,
  TextIntegrants,
  TitleDevs,
  TextSupport2,
  TextSupport,
  IconContact,
} from './styles';

import {Text, Linking} from 'react-native';

export default class Contato extends Component {
  render() {
    return (
      <Container>
        <ImageBackground
          source={require('../../../assets/BubblesContato.png')}
        />
        <ViewInfo>
          <TextInfo>• Dados retirados da API</TextInfo>
          <TextLink
            onPress={() =>
              Linking.openURL('https://covid19-brazil-api.now.sh/')
            }>
            COVID-19 Brazil API
          </TextLink>
          <TextObs>
            Obs: Os dados são extraídos diretamente do Ministério da Saúde
          </TextObs>
        </ViewInfo>

        <ViewInfo>
          <TextContact>
            • Dúvidas, sugestões ou críticas{' '}
            {/* <IconContact source={require('../../../assets/icon_duvidas.png')} /> */}
          </TextContact>

          <TextContact2
            onPress={() => Linking.openURL('mailto:checkcoronav@gmail.com')}
            title="Fale Conosco">
            equipecheckc@gmail.com
          </TextContact2>
        </ViewInfo>
        <ViewInfo>
          <TextSquad>• Equipe</TextSquad>
          <TitleDevs>Desenvolvedores: </TitleDevs>
          <TextIntegrants
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/in/daniel-matheus-785606129/',
              )
            }>
            - Daniel Matheus
          </TextIntegrants>
          <TextIntegrants
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/in/lucasouzasilva/')
            }>
            - Lucas Souza
          </TextIntegrants>
          <TextSupport>Apoio:</TextSupport>
          <TextSupport2
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/in/jonas-emanuel-076960b0/',
              )
            }>
            - Jonas Emanuel (Developer)
          </TextSupport2>
        </ViewInfo>

        <ViewCopyrigth>
          <TextCopyrigth>Todos direitos reservados a equipe</TextCopyrigth>
          <LogoImage source={require('../../../assets/logo_check.png')} />
          <Text
            onPress={() =>
              Linking.openURL(
                'https://github.com/lucassouza97/checkCoronaVirus',
              )
            }>
            {' '}
            v1.0{' '}
          </Text>
        </ViewCopyrigth>
      </Container>
    );
  }
}
