import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {
  Container,
  ImageBackground,
  BackButton,
  TextButton,
  IconBrasil,
  ViewHeader,
  TextTotal,
  ViewGrafico,
  ViewDados,
  MainCard,
  TextGrafico,
  ViewCollumn,
  ViewTitleRegiao,
  TitleRegiao,
  TextHeader,
  Circle1,
  Circle2,
  Circle3,
  Circle4,
  Circle5,
  TextTitleCard,
  TextNumber,
} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {ViewInfo, InfoUpdate} from '../Home/styles';
const screenWidth = Dimensions.get('window').width;

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
      qtdReg1: 0,
      qtdReg2: 0,
      qtdReg3: 0,
      qtdReg4: 0,
      qtdReg5: 0,
    };
    this.loadStates = this.loadStates.bind(this);
  }

  componentDidMount() {
    //this.loadStates();
    this.getCasosReg();
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
        //console.log(json);
      });
  }

  static navigationOptions = {
    headerShown: false,
  };

  _onItemPressBack = item => {
    this.props.navigation.replace('Home');
  };

  async getCasosReg() {
    try {
      const qtdReg1 = (await AsyncStorage.getItem('qtdReg1')) || 'none';
      const qtdReg2 = (await AsyncStorage.getItem('qtdReg2')) || 'none';
      const qtdReg3 = (await AsyncStorage.getItem('qtdReg3')) || 'none';
      const qtdReg4 = (await AsyncStorage.getItem('qtdReg4')) || 'none';
      const qtdReg5 = (await AsyncStorage.getItem('qtdReg5')) || 'none';
      const updated_at = (await AsyncStorage.getItem('updated_at')) || 'none';
      console.log(updated_at);
      this.setState({
        qtdReg1: Number(qtdReg1),
        qtdReg2: Number(qtdReg2),
        qtdReg3: Number(qtdReg3),
        qtdReg4: Number(qtdReg4),
        qtdReg5: Number(qtdReg5),
        updated_at: updated_at,
      });
    } catch (error) {
      console.log('Error ao pegar os dados' + error);
    }
  }

  render() {
    const data = [
      {
        name: 'Norte',
        casos: this.state.qtdReg1,
        color: 'rgba(148, 222, 15)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Nordeste',
        casos: this.state.qtdReg2,
        color: 'rgb(255,149,8)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Centro-Oeste',
        casos: this.state.qtdReg3,
        color: 'rgba(255,206,58)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Sudeste',
        casos: this.state.qtdReg4,
        color: 'rgba(253,2,11)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Sul',
        casos: this.state.qtdReg5,
        color: 'rgb(87, 150, 255)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
    ];
    const chartConfig = {
      backgroundGradientFrom: '#faf9fe',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: '#faf9fe',
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => '#faf9fe',
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      borderRadius: 10,
    };
    return (
      <Container>
        <ScrollView>
          <ViewHeader>
            <TextHeader>Informações sobre as Regiões do Brasil</TextHeader>
            <IconBrasil source={require('../../../assets/iconBrasil.png')} />
          </ViewHeader>
          <MainCard>
            <ViewGrafico>
              <TextGrafico>Casos por Região</TextGrafico>
              <PieChart
                data={data}
                width={screenWidth - 40}
                height={170}
                chartConfig={chartConfig}
                accessor="casos"
                backgroundColor="#ffffff"
              />
            </ViewGrafico>
            <ViewTitleRegiao>
              <Circle1 />
              <TitleRegiao>Norte</TitleRegiao>
            </ViewTitleRegiao>
            <ViewDados>
              <ViewCollumn>
                <TextTitleCard>Casos</TextTitleCard>
                <TextNumber>0</TextNumber>
              </ViewCollumn>
              <ViewCollumn>
                <TextTitleCard>Confirmados</TextTitleCard>
                <TextNumber>{this.state.qtdReg1}</TextNumber>
              </ViewCollumn>
              <ViewCollumn>
                <TextTitleCard>Mortes</TextTitleCard>
                <TextNumber>2000</TextNumber>
              </ViewCollumn>
            </ViewDados>
            <ViewTitleRegiao>
              <Circle2 />
              <TitleRegiao>Nordeste</TitleRegiao>
            </ViewTitleRegiao>
            <ViewDados>
              <ViewCollumn>
                <TextTitleCard>Casos</TextTitleCard>
                <TextNumber>0</TextNumber>
              </ViewCollumn>
              <ViewCollumn>
                <TextTitleCard>Confirmados</TextTitleCard>
                <TextNumber>{this.state.qtdReg2}</TextNumber>
              </ViewCollumn>
              <ViewCollumn>
                <TextTitleCard>Mortes</TextTitleCard>
              </ViewCollumn>
            </ViewDados>
            <ViewTitleRegiao>
              <Circle3 />
              <TitleRegiao>Centro-Oeste</TitleRegiao>
            </ViewTitleRegiao>
            <ViewDados>
              <ViewCollumn>
                <TextTitleCard>Casos</TextTitleCard>
                <TextNumber>0</TextNumber>
              </ViewCollumn>
              <ViewCollumn>
                <TextTitleCard>Confirmados</TextTitleCard>
                <TextNumber>{this.state.qtdReg3}</TextNumber>
              </ViewCollumn>
              <ViewCollumn>
                <TextTitleCard>Mortes</TextTitleCard>
              </ViewCollumn>
            </ViewDados>
            <ViewTitleRegiao>
              <Circle4 />
              <TitleRegiao>Sudeste</TitleRegiao>
            </ViewTitleRegiao>
            <ViewDados>
              <ViewCollumn>
                <TextTitleCard>Casos</TextTitleCard>
                <TextNumber>0</TextNumber>
              </ViewCollumn>
              <ViewCollumn>
                <TextTitleCard>Confirmados</TextTitleCard>
                <TextNumber>{this.state.qtdReg4}</TextNumber>
              </ViewCollumn>
              <ViewCollumn>
                <TextTitleCard>Mortes</TextTitleCard>
              </ViewCollumn>
            </ViewDados>
            <ViewTitleRegiao>
              <Circle5 />
              <TitleRegiao>Sul</TitleRegiao>
            </ViewTitleRegiao>
            <ViewDados>
              <ViewCollumn>
                <TextTitleCard>Casos</TextTitleCard>
                <TextNumber>0</TextNumber>
              </ViewCollumn>
              <ViewCollumn>
                <TextTitleCard>Confirmados</TextTitleCard>
                <TextNumber>{this.state.qtdReg5}</TextNumber>
              </ViewCollumn>
              <ViewCollumn>
                <TextTitleCard>Mortes</TextTitleCard>
              </ViewCollumn>
            </ViewDados>
          </MainCard>
          <ViewInfo>
            <InfoUpdate>Atualizado em: {this.state.updated_at}</InfoUpdate>
          </ViewInfo>
        </ScrollView>
      </Container>
    );
  }
}
