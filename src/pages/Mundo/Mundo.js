import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  Container,
  TextHeader,
  ViewHeader,
  IconMundo,
  MainCard,
  ViewTitleCountrie,
  TitleRegiao,
  ViewDados,
  ViewCollumn,
  TextTitleCard,
  TextNumber,
  TextMortalidade,
} from './styles';
export default class Mundo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      allCountries: [],
      loading: true,
      currentPage: 1,
      totalCasesWorld: [],
    };
  }

  componentDidMount() {
    fetch('https://covid19-brazil-api.now.sh/api/report/v1/countries') //get data
      .then(r => r.json()) //transform in json
      .then(json => {
        //give me the result
        this.setState({
          allCountries: json.data.sort((currentElement, nextElement) => {
            return currentElement.confirmed > nextElement.confirmed
              ? -1
              : currentElement.confirmed < nextElement.confirmed
              ? 1
              : 0;
          }),
        });

        const totalCases = json.data.reduce((x, y) => {
          return {
            deaths: x.deaths + y.deaths, //Óbitos
            confirmed: x.confirmed + y.confirmed, //casos confirmados
          };
        });

        this.setState({totalCasesWorld: totalCases});

        this.setState({
          countries: this.getPaginatedArray(this.state.allCountries, 1),
        });

        this.setState({loading: false});
      });
  }
  //não utilizado no momento
  // loadMoreCountries() {
  //   console.log('CURRENT PAGES', this.state.currentPage + 1);

  //   this.setState({
  //     countries: [
  //       ...this.state.countries,
  //       ...this.getPaginatedArray(
  //         this.state.allCountries,
  //         this.state.currentPage + 1,
  //       ),
  //     ],
  //     currentPage: this.state.currentPage + 1,
  //   });
  // }

  getCountrybyName(name) {
    return this.state.countries.find(country => country.country === name);
  }

  getPaginatedArray(array, page, size = 10) {
    const startPosition = (page - 1) * size;
    return array.slice(startPosition, startPosition + size);
  }

  render() {
    const {refreshing} = this.state;

    if (this.state.loading) {
      return (
        <Container>
          <View style={[styles.container, styles.loading]}>
            <Text style={styles.loadingTxt}>Carregando...</Text>
          </View>
        </Container>
      );
    } else {
      return (
        <Container>
          <ViewHeader>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              Situação Mundial
            </Text>
            <IconMundo source={require('../../../assets/iconMundo.png')} />
            <View
              style={{
                flexDirection: 'row',
                margin: 5,
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginRight: 10,
                }}>
                Casos: {this.state.totalCasesWorld.confirmed}
              </Text>

              <Text
                style={{
                  color: 'red',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                Óbitos: {this.state.totalCasesWorld.deaths}
              </Text>
            </View>
            <TextHeader>Países mais afetados</TextHeader>
          </ViewHeader>
          <FlatList
            data={this.state.countries}
            renderItem={({item}) => <Country data={item} />}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </Container>
      );
    }
  }
}

class Country extends Component {
  render() {
    const taxaM =
      Number(this.props.data.deaths / this.props.data.confirmed) * 100;
    const result = taxaM.toFixed(2) + ' %';
    return (
      <MainCard>
        <ViewTitleCountrie>
          <TitleRegiao>{this.props.data.country}</TitleRegiao>
          <TextMortalidade>Taxa de Mortalidade: {result} </TextMortalidade>
          <Text style={{fontSize: 11, color: 'grey'}}>
            Atualizado:{' '}
            {format(parseISO(this.props.data.updated_at), "dd 'de' MMMM", {
              locale: pt,
            })}
          </Text>
        </ViewTitleCountrie>
        <ViewDados>
          <ViewCollumn style={styles.shadow}>
            <TextTitleCard>Confirmados</TextTitleCard>
            <TextNumber>{this.props.data.confirmed}</TextNumber>
          </ViewCollumn>
          <ViewCollumn style={styles.shadow}>
            <TextTitleCard>Óbitos</TextTitleCard>
            <TextNumber>{this.props.data.deaths}</TextNumber>
          </ViewCollumn>
        </ViewDados>
      </MainCard>
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

  container: {
    marginTop: 10,
    flex: 1,
  },
  containerFilme: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  capaFilme: {
    width: 80,
    height: 110,
  },
  filmeInfo: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
  nomeFilme: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingTxt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
