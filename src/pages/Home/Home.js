import React, {Component} from 'react';
import {
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  View,
  Image,
  Text,
  Linking,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import BoxedShare from './BoxedShare';
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
  IconCheck,
  IconConfirmados,
  IconDeaths,
  ViewCardTitle,
  ViewTitleEstado,
  TitleEstado,
  IconBandeira,
  ViewBandeira,
  InfoMortalidade,
  ImageError,
  ViewError,
  TextError,
  InfoMortalidadeValor,
} from './styles';
import NetInfo from '@react-native-community/netinfo';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

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
      taxaM: '',
      netStatus: 0,

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
    this.getInfoEstadoGeral();
    const listener = NetInfo.addEventListener(state => {
      //console.log(state.isConnected);
      this.setState({netStatus: Number(state.isConnected)});
      //this.setInfoNet(this.state.netStatus);
    });
  }

  getInfoEstadoGeral() {
    fetch('https://covid19-brazil-api.now.sh/api/report/v1')
      .then(r => r.json())
      .then(json => {
        const updated_at = format(
          parseISO(json.data[0].datetime),
          "dd 'de' MMMM'",
          {
            locale: pt,
          },
        );

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
            datetime: x.datetime,
          }; //casos
        });

        const totalCasesBrasil = json.data.reduce((x, y) => {
          return {
            deaths: x.deaths + y.deaths, //Óbitos
            cases: x.cases + y.cases, //casos confirmados
          };
        });

        this.saveDados(
          JSON.stringify(totalNorte),
          JSON.stringify(totalNordeste),
          JSON.stringify(totalSudeste),
          JSON.stringify(totalCentroOeste),
          JSON.stringify(totalSul),
          JSON.stringify(totalCasesBrasil),
          updated_at,
        );
      })
      .catch(error => {});
  }

  async getCasosEstado(value) {
    if (value === 'BR') {
      this.getCasosPais();
    } else if (value === null) {
      this.setState({action: true});
    } else {
      this.setState({
        confirmados: '',
        mortes: '',
        updated_at: '',
        state: '',
        taxaM: '',
      });
      const url = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${value}`;

      fetch(url)
        .then(r => r.json())
        .then(json => {
          let s = this.state;
          s.confirmados = json.cases;
          s.mortes = json.deaths;
          s.updated_at = format(parseISO(json.datetime), "dd 'de' MMMM'", {
            locale: pt,
          });
          s.action = false;
          s.state = json.state;
          s.sigla = json.uf;

          s.uf = `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${value}.png`;

          const taxaM = (Number(json.deaths) / Number(json.cases)) * 100;
          s.taxaM = taxaM.toFixed(2) + '%';

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
      confirmados: '',
      mortes: '',
      updated_at: '',
      state: '',
      uf: '',
      taxaM: '',
    });

    fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil')
      .then(r => r.json())
      .then(json => {
        let s = this.state;
        s.confirmados = json.data.confirmed;
        s.mortes = json.data.deaths
          .toFixed(1)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        s.updated_at = format(parseISO(json.data.updated_at), "dd 'de' MMMM'", {
          locale: pt,
        });
        s.action = false;
        s.state = json.data.country;
        s.uf =
          'https://imagepng.org/wp-content/uploads/2017/04/bandeira-do-brasil-6.png';
        const taxaM = Number(json.data.deaths / json.data.cases) * 100;
        s.taxaM = taxaM.toFixed(2) + '%';
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
    totalCasesBrasil,
    updated_at,
  ) {
    try {
      await AsyncStorage.setItem('totalNorte', totalNorte);
      await AsyncStorage.setItem('totalNordeste', totalNordeste);
      await AsyncStorage.setItem('totalSudeste', totalSudeste);
      await AsyncStorage.setItem('totalCentroOeste', totalCentroOeste);
      await AsyncStorage.setItem('totalSul', totalSul);
      await AsyncStorage.setItem('totalCasesBrasil', totalCasesBrasil);
      await AsyncStorage.setItem('updated_at', updated_at);
    } catch (error) {
      console.log('Error saving data' + error);
    }
  }
  render() {
    const message = `Corona Virus Report: Neste momento o estado ${
      this.state.sigla
    } *(${this.state.state})* possui *${
      this.state.confirmados
    }* casos confirmado(s) e *${
      this.state.mortes
    }* óbito(s). ${'\n'}Informações atualizadas em *${
      this.state.updated_at
    }*.${'\n'}Dados extraídos do aplicativo _Check Corona Virus_. ${'\n'}Faça o download do app no link: bit.ly/ch3ckcoronav `;

    if (this.state.netStatus == false) {
      return (
        <DismissKeyboard>
          <Container>
            <StatusBar hidden />
            <ViewHeader>
              <LogoTop source={require('../../../assets/Icon.png')} />
              <RNPickerSelect
                placeholder={{
                  label: 'Selecione seu estado',
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
                    fontFamily: 'VarelaRound-Regular',
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
            <ViewError>
              <ImageError source={require('../../../assets/error1.png')} />
              <TextError>
                Ocorreu um erro.{'\n'}
                Verifique sua conexão e tente novamente.
              </TextError>
            </ViewError>
          </Container>
        </DismissKeyboard>
      );
    }
    if (this.state.action == true) {
      return (
        <DismissKeyboard>
          <Container>
            <StatusBar hidden />
            <ViewHeader>
              <LogoTop source={require('../../../assets/Icon.png')} />
              <RNPickerSelect
                placeholder={{
                  label: 'Selecione seu estado',
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
                    fontFamily: 'VarelaRound-Regular',
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
                  label: 'Selecione o Estado',
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
                    fontFamily: 'VarelaRound-Regular',
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
              <ViewCardTitle>
                <IconBandeira
                  source={this.state.uf ? {uri: this.state.uf} : null}
                />
              </ViewCardTitle>

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
                </ViewText>
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
                <TextViewCase3>Óbitos</TextViewCase3>
                <ViewText>
                  <TextNumberCase3>{this.state.mortes}</TextNumberCase3>
                </ViewText>
              </Card3>
            </MainCard>
            <ViewInfo>
              <InfoMortalidade>
                Taxa de mortalidade:{' '}
                <InfoMortalidadeValor>{this.state.taxaM}</InfoMortalidadeValor>
              </InfoMortalidade>
              <InfoUpdate>Atualizado: {this.state.updated_at}</InfoUpdate>
            </ViewInfo>
            <View style={styles.ViewStyle}>
              <BoxedShare
                WhatsappMessage="https://github.com/ugurrdemirel/ReactNativeSocialShareButtons"
                FacebookShareURL="https://github.com/ugurrdemirel/ReactNativeSocialShareButtons"
                FacebookShareMessage={message}
                TwitterShareURL="https://github.com/ugurrdemirel/ReactNativeSocialShareButtons"
                TwitterShareMessage={message}
                TwitterViaAccount="ugurr_demirel"
                NativeShareTitle="React Native Social Share Buttons"
                NativeShareMessage={message}
                NativeShareURL="https://github.com/ugurrdemirel/ReactNativeSocialShareButtons"
              />
            </View>
          </Container>
        </DismissKeyboard>
      );
    }
  }
}
const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -30,
  },
});
