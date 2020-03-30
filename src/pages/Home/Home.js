import React, {Component} from 'react';
import {
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import {format, parseISO} from 'date-fns';
import RNPickerSelect from 'react-native-picker-select';
import pt from 'date-fns/locale/pt';
import {
  Container,
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
  ShowMoreCase1,
  ShowMoreTextCase,
  InfoUpdate,
  MainCard,
  ViewHeader,
  ViewInfo,
  ImageUp1,
  ImageDown1,
  ViewText,
  PorcentCaseUp,
  PorcentCaseDown,
  TextNumberCase,
  TextNumberCase3,
  TextViewLoading,
  ImageLoading,
} from './styles';

import AsyncStorage from '@react-native-community/async-storage';
const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

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
      updated_at: '',
      inputValue: '',
      action: true,

      items: [
        {value: 'BR', label: 'Brasil'},
        {value: 'AC', label: 'Acre'},
        {value: 'AL', label: 'Alagoas'},
        {value: 'AP', label: 'Amapá'},
        {value: 'AM', label: 'Amazonas'},
        {value: 'BA', label: 'Bahia'},
        {value: 'CE', label: 'Ceará'},
        {value: 'DF', label: 'Distrito Federal'},
        {value: 'ES', label: 'Espírito Santo'},
        {value: 'GO', label: 'Goiás'},
        {value: 'MA', label: 'Maranhão'},
        {value: 'MT', label: 'Mato Grosso'},
        {value: 'MS', label: 'Mato Grosso do Sul'},
        {value: 'MG', label: 'Minas Gerais'},
        {value: 'PA', label: 'Pará'},
        {value: 'PB', label: 'Paraíba'},
        {value: 'PR', label: 'Paraná'},
        {value: 'PE', label: 'Pernambuco'},
        {value: 'PI', label: 'Piauí'},
        {value: 'RJ', label: 'Rio de Janeiro'},
        {value: 'RN', label: 'Rio Grande do Norte'},
        {value: 'RS', label: 'Rio Grande do Sul'},
        {value: 'RO', label: 'Rondônia'},
        {value: 'RR', label: 'Roraima'},
        {value: 'SC', label: 'Santa Catarina'},
        {value: 'SP', label: 'São Paulo'},
        {value: 'SE', label: 'Sergipe'},
        {value: 'TO', label: 'Tocantins'},
      ],
    };
    this.getCasosPais = this.getCasosPais.bind(this);
    this.getCasosEstado = this.getCasosEstado.bind(this);
    this.getInfoEstadoGeral = this.getInfoEstadoGeral.bind(this);
  }

  //Primeira Tela = 1: Listar estado com maior numero de casos
  // todos os estados do brasil =>  https://covid19-brazil-api.now.sh/api/report/v1
  // todos os casos do país => https://covid19-brazil-api.now.sh//api/report/v1/brazil
  // lista de casos por estado => https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rj
  // lista de casos no brasil por data https://covid19-brazil-api.now.sh/api/report/v1/brazil/api/report/v1/brazil/20200318

  componentDidMount() {
    //this.getCasosRegiao();
    this.getInfoEstadoGeral();
  }

  getInfoEstadoGeral() {
    fetch('https://covid19-brazil-api.now.sh/api/report/v1')
      .then(r => r.json())
      .then(json => {
        const norte = json.data.filter(state => {
          if (
            state.uf == 'AC' ||
            state.uf == 'AP' ||
            state.uf == 'AM' ||
            state.uf == 'PA' ||
            state.uf == 'RO' ||
            state.uf == 'RR' ||
            state.uf == 'TO'
          ) {
            return state;
          }
        });
        const totalNorte = norte.reduce((x, y) => {
          return {
            deaths: x.deaths + y.deaths, //mortes
            cases: x.cases + y.cases, //casos confirmados
            suspects: x.suspects + y.suspects,
            datetime: x.datetime,
          };
        });

        const nordeste = json.data.filter(state => {
          if (
            state.uf == 'AL' ||
            state.uf == 'BA' ||
            state.uf == 'CE' ||
            state.uf == 'MA' ||
            state.uf == 'PB' ||
            state.uf == 'PI' ||
            state.uf == 'PE' ||
            state.uf == 'RN' ||
            state.uf == 'SE'
          ) {
            return state;
          }
        });
        const totalNordeste = nordeste.reduce((x, y) => {
          return {
            deaths: x.deaths + y.deaths, //mortes
            cases: x.cases + y.cases, //casos confirmados
            suspects: x.suspects + y.suspects,
            datetime: x.datetime,
          }; //casos
        });

        const centroOeste = json.data.filter(state => {
          if (
            state.uf == 'DF' ||
            state.uf == 'GO' ||
            state.uf == 'MT' ||
            state.uf == 'MS'
          ) {
            return state;
          }
        });
        const totalCentroOeste = centroOeste.reduce((x, y) => {
          return {
            deaths: x.deaths + y.deaths, //mortes
            cases: x.cases + y.cases, //casos confirmados
            suspects: x.suspects + y.suspects,
            datetime: x.datetime,
          }; //casos
        });

        const sudeste = json.data.filter(state => {
          if (
            state.uf == 'ES' ||
            state.uf == 'MG' ||
            state.uf == 'RJ' ||
            state.uf == 'SP'
          ) {
            return state;
          }
        });
        const totalSudeste = sudeste.reduce((x, y) => {
          return {
            deaths: x.deaths + y.deaths, //mortes
            cases: x.cases + y.cases, //casos confirmados
            suspects: x.suspects + y.suspects,
            datetime: x.datetime,
          }; //casos
        });

        const sul = json.data.filter(state => {
          if (state.uf == 'SC' || state.uf == 'PR' || state.uf == 'RS') {
            return state;
          }
        });
        const totalSul = sul.reduce((x, y) => {
          return {
            deaths: x.deaths + y.deaths, //mortes
            cases: x.cases + y.cases, //casos confirmados
            suspects: x.suspects + y.suspects,
            datetime: x.datetime,
          }; //casos
        });

        this.saveDados(
          JSON.stringify(totalNorte),
          JSON.stringify(totalNordeste),
          JSON.stringify(totalSudeste),
          JSON.stringify(totalCentroOeste),
          JSON.stringify(totalSul),
        );
      })
      .catch(error => {});
  }

  async getCasosEstado(value) {
    if (value === 'BR') {
      await AsyncStorage.clear();
      this.getCasosPais();
    } else if (value === null) {
      this.setState({action: true});
    } else {
      this.setState({
        casos: '',
        confirmados: '',
        mortes: '',
        recuperados: '',
        updated_at: '',
      });
      const url = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${value}`;

      fetch(url)
        .then(r => r.json())
        .then(json => {
          let s = this.state;
          s.casos = json.suspects;
          s.confirmados = json.cases;
          s.mortes = json.deaths;
          s.updated_at = format(parseISO(json.datetime), "dd 'de' MMMM'", {
            locale: pt,
          });
          s.action = false;
          this.setState(s);
        })
        .catch(error => {
          this.setState({
            error: true,
            loading: false,
          });
        });

      Keyboard.dismiss();
    }
  }

  getCasosPais() {
    this.setState({
      casos: '',
      confirmados: '',
      mortes: '',
      updated_at: '',
    });

    fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil')
      .then(r => r.json())
      .then(json => {
        let s = this.state;
        s.casos = json.data.cases;
        s.confirmados = json.data.confirmed;
        s.mortes = json.data.deaths;
        s.updated_at = format(parseISO(json.data.updated_at), "dd 'de' MMMM'", {
          locale: pt,
        });
        s.action = false;
        this.setState(s);
      })
      .catch(error => {
        this.setState({
          error: true,
          loading: false,
        });
      });
  }
  async saveDados(
    totalNorte,
    totalNordeste,
    totalSudeste,
    totalCentroOeste,
    totalSul,
  ) {
    try {
      await AsyncStorage.setItem('totalNorte', totalNorte);
      await AsyncStorage.setItem('totalNordeste', totalNordeste);
      await AsyncStorage.setItem('totalSudeste', totalSudeste);
      await AsyncStorage.setItem('totalCentroOeste', totalCentroOeste);
      await AsyncStorage.setItem('totalSul', totalSul);
    } catch (error) {
      console.log('Error saving data' + error);
    }
  }
  render() {
    if (this.state.action == true) {
      return (
        <DismissKeyboard>
          <Container>
            <StatusBar hidden />
            <ViewHeader>
              <LogoTop source={require('../../../assets/Icon.png')} />
              <RNPickerSelect
                placeholder={{
                  label: 'Verifique por estado',
                  value: null,
                }}
                onValueChange={value => this.getCasosEstado(value)}
                items={this.state.items}
                style={{
                  inputAndroid: {
                    backgroundColor: 'transparent',
                    fontSize: 18,
                    color: 'black',
                    marginTop: 20,
                    marginLeft: '25%',
                    width: 204,
                    height: 40,
                    fontFamily: 'Montserrat',
                    lineHeight: 20,
                    textAlign: 'right',
                    fontWeight: '700',
                  },
                  placeholder: {
                    color: 'black',
                    fontSize: 18,
                    fontWeight: 'bold',
                  },
                }}
                value={this.state.favSport3}
                useNativeAndroidPickerStyle={false}
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
                <TextViewLoading>Aguardando a seleção...</TextViewLoading>
                <ImageLoading
                  source={require('../../../assets/gif_loading.gif')}
                />
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
                <TextViewLoading>Aguardando a seleção...</TextViewLoading>
                <ImageLoading
                  source={require('../../../assets/gif_loading.gif')}
                />
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
                <TextViewLoading>Aguardando a seleção...</TextViewLoading>
                <ImageLoading
                  source={require('../../../assets/gif_loading.gif')}
                />
              </Card3>
            </MainCard>
            <ViewInfo>
              <InfoUpdate>Copyright: Check Corona Virus</InfoUpdate>
            </ViewInfo>
          </Container>
        </DismissKeyboard>
      );
    } else {
      return (
        <DismissKeyboard>
          <Container>
            <StatusBar hidden />
            <ViewHeader>
              <LogoTop source={require('../../../assets/Icon.png')} />
              <RNPickerSelect
                placeholder={{
                  label: 'Verifique por estado',
                  value: null,
                }}
                onValueChange={value => this.getCasosEstado(value)}
                items={this.state.items}
                style={{
                  inputAndroid: {
                    backgroundColor: 'transparent',
                    fontSize: 18,
                    color: 'black',
                    marginTop: 17,
                    marginLeft: '25%',
                    width: 204,
                    height: 45,
                    fontFamily: 'Montserrat',
                    lineHeight: 20,
                    textAlign: 'right',
                    fontWeight: '700',
                  },
                  placeholder: {
                    color: 'black',
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginLeft: 30,
                  },
                }}
                value={this.state.favSport3}
                useNativeAndroidPickerStyle={false}
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
                <ViewText>
                  <TextNumberCase>{this.state.casos}</TextNumberCase>
                  <PorcentCaseUp>+15.5%</PorcentCaseUp>
                  <ImageUp1 source={require('../../../assets/imageUp.png')} />
                </ViewText>
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
                <ViewText>
                  <TextNumberCase>{this.state.confirmados}</TextNumberCase>
                  <PorcentCaseUp>+30.7%</PorcentCaseUp>
                  <ImageUp1 source={require('../../../assets/imageUp.png')} />
                </ViewText>
                <ShowMoreCase1>
                  <ShowMoreTextCase>Ver mais</ShowMoreTextCase>
                </ShowMoreCase1>
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
                <ViewText>
                  <TextNumberCase3>{this.state.mortes}</TextNumberCase3>
                  <PorcentCaseUp>+22.4%</PorcentCaseUp>
                  <ImageUp1 source={require('../../../assets/imageUp.png')} />
                </ViewText>
                <ShowMoreCase1>
                  <ShowMoreTextCase>Ver mais</ShowMoreTextCase>
                </ShowMoreCase1>
              </Card3>
            </MainCard>
            <ViewInfo>
              <InfoUpdate>Atualizado em: {this.state.updated_at}</InfoUpdate>
            </ViewInfo>
          </Container>
        </DismissKeyboard>
      );
    }
  }
}
