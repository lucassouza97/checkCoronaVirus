import React, {Component} from 'react';
import {StatusBar, Text, Image, View} from 'react-native';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  Container,
  InputState,
  SearchIcon,
  LogoTop,
  Card1,
  Card2,
  Card3,
  Card4,
  TextViewCase1,
  TextViewCase2,
  TextViewCase3,
  TextViewCase4,
  TextNumberCase1,
  TextNumberCase2,
  TextNumberCase3,
  TextNumberCase4,
  ShowMoreCase1,
  ShowMoreCase2,
  ShowMoreCase3,
  ShowMoreCase4,
  ShowMoreTextCase,
  PorcentCase1,
  PorcentCase2,
  PorcentCase3,
  PorcentCase4,
  InfoUpdate,
  MainCard,
  ViewHeader,
  ViewInfo,
  ImageUp1,
  ImageDown1,
  ImageUp2,
  ImageDown2,
  ImageUp3,
  ImageDown3,
  ImageUp4,
  ImageDown4,
} from './styles';

const mockData = [
  {id: 1, name: 'Acre'},
  {id: 2, name: 'Alagoas'},
  {id: 3, name: 'Amapá'},
  {id: 4, name: 'Amazonas'},
  {id: 5, name: 'Bahia'},
  {id: 6, name: 'Ceará'},
  {id: 7, name: 'Distrito Federal'},
  {id: 8, name: 'Espírito Santo'},
  {id: 9, name: 'Goiás'},
  {id: 10, name: 'Maranhão'},
  {id: 11, name: 'Mato Grosso'},
  {id: 12, name: 'Mato Grosso do Sul'},
  {id: 13, name: 'Minas Gerais'},
  {id: 14, name: 'Pará'},
  {id: 15, name: 'Paraíba'},
  {id: 16, name: 'Paraná'},
  {id: 17, name: 'Pernambuco'},
  {id: 18, name: 'Piauí'},
  {id: 19, name: 'Rio de Janeiro'},
  {id: 20, name: 'Rio Grande do Norte'},
  {id: 21, name: 'Rio Grande do Sul'},
  {id: 22, name: 'Rondônia'},
  {id: 23, name: 'Roraima'},
  {id: 24, name: 'Santa Catarina'},
  {id: 25, name: 'São Paulo'},
  {id: 26, name: 'Sergipe'},
  {id: 27, name: 'Tocantins'},
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      uid: '',
      uf: '',
      state: '',
      casos: '',
      mortes: '',
      confirmados: '',
      recuperados: '',
      suspeitas: '',
      qtdTestesNeg: '',
      updated_at: '',
    };
    this.getCasosPais = this.getCasosPais.bind(this);
  }
  //Primeira Tela = 1: Listar estado com maior numero de casos
  // todos os estados do brasil =>  https://covid19-brazil-api.now.sh/api/report/v1
  // todos os casos do país => https://covid19-brazil-api.now.sh//api/report/v1/brazil
  // lista de casos por estado => https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rj
  // lista de casos no brasil por data https://covid19-brazil-api.now.sh/api/report/v1/brazil/api/report/v1/brazil/20200318

  componentDidMount() {
    this.getCasosPais();
  }

  getCasosPais() {
    this.setState({
      casos: '',
      confirmados: '',
      mortes: '',
      recuperados: '',
      updated_at: '',
    });
    fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil')
      .then(r => r.json())
      .then(json => {
        let s = this.state;
        s.casos = json.data.cases;
        s.confirmados = json.data.confirmed;
        s.mortes = json.data.deaths;
        s.recuperados = json.data.recovered;
        s.updated_at = format(
          parseISO(json.data.updated_at),
          "'dia' dd 'de' MMMM', ás' H:mm'h'",
          {
            locale: pt,
          },
        );
        this.setState(s);
        console.log(json);
      })
      .catch(error => {
        this.setState({
          error: true,
          loading: false,
        });
      });
  }

  render() {
    return (
      <Container>
        <StatusBar hidden />
        <ViewHeader>
          <LogoTop source={require('../../../assets/Icon.png')} />
          <InputState
            placeholder="Verifique por estado"
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
          />
          <SearchIcon source={require('../../../assets/Searchicon.png')} />
        </ViewHeader>
        <MainCard>
          <Card1
            style={{
              shadowColor: '#4643D3',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}>
            <TextViewCase1>Casos suspeitos</TextViewCase1>
            <TextNumberCase1>4</TextNumberCase1>
            <PorcentCase1>+8.5%</PorcentCase1>
            <ImageUp1 source={require('../../../assets/imageUp.png')} />
            <ShowMoreCase1>
              <ShowMoreTextCase>Ver mais</ShowMoreTextCase>
            </ShowMoreCase1>
          </Card1>
          <Card2
            style={{
              shadowColor: '#4643D3',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}>
            <TextViewCase2>Confirmados</TextViewCase2>
            <TextNumberCase2>4</TextNumberCase2>
            <PorcentCase2>+8.5%</PorcentCase2>
            <ImageUp2 source={require('../../../assets/imageUp.png')} />
            <ShowMoreCase2>
              <ShowMoreTextCase>Ver mais</ShowMoreTextCase>
            </ShowMoreCase2>
          </Card2>
          <Card3
            style={{
              shadowColor: '#4643D3',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}>
            <TextViewCase3>Mortes</TextViewCase3>
            <TextNumberCase3>4</TextNumberCase3>
            <PorcentCase3>+8.5%</PorcentCase3>
            <ImageUp3 source={require('../../../assets/imageUp.png')} />
            <ShowMoreCase3>
              <ShowMoreTextCase>Ver mais</ShowMoreTextCase>
            </ShowMoreCase3>
          </Card3>
          <Card4
            style={{
              shadowColor: '#4643D3',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}>
            <TextViewCase4>Curados</TextViewCase4>
            <TextNumberCase4>4</TextNumberCase4>
            <PorcentCase4>+8.5%</PorcentCase4>
            <ImageDown4 source={require('../../../assets/imageDown.png')} />
            <ShowMoreCase4>
              <ShowMoreTextCase>Ver mais</ShowMoreTextCase>
            </ShowMoreCase4>
          </Card4>
        </MainCard>
        <ViewInfo>
          <InfoUpdate>Atualizado em: 22/03/2020</InfoUpdate>
        </ViewInfo>
      </Container>
    );
  }
}
