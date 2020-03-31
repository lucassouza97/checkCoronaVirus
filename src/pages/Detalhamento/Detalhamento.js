import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {format, parseISO, parse} from 'date-fns';
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
      updated_at: '',
      norte: {cases: 0, datetime: '', deaths: 0},
      nordeste: {cases: 0, datetime: '', deaths: 0},
      centroOeste: {cases: 0, datetime: '', deaths: 0},
      sudeste: {cases: 0, datetime: '', deaths: 0},
      sul: {cases: 0, datetime: '', deaths: 0},
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
      mortes: '',
      updated_at: '',
      newState: '',
    });
    fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rj')
      .then(r => r.json())
      .then(json => {
        let s = this.state;
        s.casos = json.cases;
        s.mortes = json.deaths;
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
      const totalNorte = (await AsyncStorage.getItem('totalNorte')) || 'none';
      const totalNordeste =
        (await AsyncStorage.getItem('totalNordeste')) || 'none';
      const totalCentroOeste =
        (await AsyncStorage.getItem('totalCentroOeste')) || 'none';
      const totalSudeste =
        (await AsyncStorage.getItem('totalSudeste')) || 'none';
      const totalSul = (await AsyncStorage.getItem('totalSul')) || 'none';
      const updated_at = (await AsyncStorage.getItem('updated_at')) || 'none';
      this.setState({
        norte: JSON.parse(totalNorte),
        nordeste: JSON.parse(totalNordeste),
        centroOeste: JSON.parse(totalCentroOeste),
        sudeste: JSON.parse(totalSudeste),
        sul: JSON.parse(totalSul),
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
        casos: this.state.norte.cases,
        color: 'rgba(148, 222, 15)',
        legendFontColor: '#000',
        legendFontSize: 15,
      },
      {
        name: 'Nordeste',
        casos: this.state.nordeste.cases,
        color: 'rgb(255,149,8)',
        legendFontColor: '#000',
        legendFontSize: 15,
      },
      {
        name: 'Centro-Oeste',
        casos: this.state.centroOeste.cases,
        color: 'rgba(255,206,58)',
        legendFontColor: '#000',
        legendFontSize: 15,
      },
      {
        name: 'Sudeste',
        casos: this.state.sudeste.cases,
        color: 'rgba(253,2,11)',
        legendFontColor: '#000',
        legendFontSize: 15,
      },
      {
        name: 'Sul',
        casos: this.state.sul.cases,
        color: 'rgb(87, 150, 255)',
        legendFontColor: '#000',
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
            {/* <ViewGrafico style={styles.shadow}> */}
            <TextGrafico>Casos por Região</TextGrafico>
            <PieChart
              data={data}
              width={screenWidth - 40}
              height={170}
              chartConfig={chartConfig}
              accessor="casos"
              backgroundColor="#faf9fe"
            />
            {/* </ViewGrafico> */}
            <ViewTitleRegiao>
              <Circle1 />
              <TitleRegiao>Norte</TitleRegiao>
            </ViewTitleRegiao>
            <ViewDados>
              <ViewCollumn style={styles.shadow}>
                <TextTitleCard>Confirmados</TextTitleCard>
                <TextNumber>{this.state.norte.cases}</TextNumber>
              </ViewCollumn>
              <ViewCollumn style={styles.shadow}>
                <TextTitleCard>Mortes</TextTitleCard>
                <TextNumber>{this.state.norte.deaths}</TextNumber>
              </ViewCollumn>
            </ViewDados>
            <ViewTitleRegiao>
              <Circle2 />
              <TitleRegiao>Nordeste</TitleRegiao>
            </ViewTitleRegiao>
            <ViewDados>
              <ViewCollumn style={styles.shadow}>
                <TextTitleCard>Confirmados</TextTitleCard>
                <TextNumber>{this.state.nordeste.cases}</TextNumber>
              </ViewCollumn>
              <ViewCollumn style={styles.shadow}>
                <TextTitleCard>Mortes</TextTitleCard>
                <TextNumber>{this.state.nordeste.deaths}</TextNumber>
              </ViewCollumn>
            </ViewDados>
            <ViewTitleRegiao>
              <Circle3 />
              <TitleRegiao>Centro-Oeste</TitleRegiao>
            </ViewTitleRegiao>
            <ViewDados>
              <ViewCollumn style={styles.shadow}>
                <TextTitleCard>Confirmados</TextTitleCard>
                <TextNumber>{this.state.centroOeste.cases}</TextNumber>
              </ViewCollumn>
              <ViewCollumn style={styles.shadow}>
                <TextTitleCard>Mortes</TextTitleCard>
                <TextNumber>{this.state.centroOeste.deaths}</TextNumber>
              </ViewCollumn>
            </ViewDados>
            <ViewTitleRegiao>
              <Circle4 />
              <TitleRegiao>Sudeste</TitleRegiao>
            </ViewTitleRegiao>
            <ViewDados>
              <ViewCollumn style={styles.shadow}>
                <TextTitleCard>Confirmados</TextTitleCard>
                <TextNumber>{this.state.sudeste.cases}</TextNumber>
              </ViewCollumn>
              <ViewCollumn style={styles.shadow}>
                <TextTitleCard>Mortes</TextTitleCard>
                <TextNumber>{this.state.sudeste.deaths}</TextNumber>
              </ViewCollumn>
            </ViewDados>
            <ViewTitleRegiao>
              <Circle5 />
              <TitleRegiao>Sul</TitleRegiao>
            </ViewTitleRegiao>
            <ViewDados>
              <ViewCollumn style={styles.shadow}>
                <TextTitleCard>Confirmados</TextTitleCard>
                <TextNumber>{this.state.sul.cases}</TextNumber>
              </ViewCollumn>
              <ViewCollumn style={styles.shadow}>
                <TextTitleCard>Mortes</TextTitleCard>
                <TextNumber>{this.state.sul.deaths}</TextNumber>
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

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#4643D3',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
