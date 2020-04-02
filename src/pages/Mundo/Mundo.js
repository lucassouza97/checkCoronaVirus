import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
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
} from './styles';
export default class Mundo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      allCountries: [],
      loading: true,
      currentPage: 1,
    };
  }

  componentDidMount() {
    fetch('https://covid19-brazil-api.now.sh/api/report/v1/countries') //get data
      .then(r => r.json()) //transform in json
      .then(json => {
        //give me the result
        this.setState({
          allCountries: json.data.sort((currentElement, nextElement) => {
            return currentElement.country < nextElement.country
              ? -1
              : currentElement.country > nextElement.country
              ? 1
              : 0;
          }),
        });
        this.setState({
          countries: this.getPaginatedArray(this.state.allCountries, 1),
        });

        this.setState({loading: false});
      });
  }

  loadMoreCountries() {
    console.log('CURRENT PAGES', this.state.currentPage + 1);

    this.setState({
      countries: [
        ...this.state.countries,
        ...this.getPaginatedArray(
          this.state.allCountries,
          this.state.currentPage + 1,
        ),
      ],
      currentPage: this.state.currentPage + 1,
    });
  }

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
            <TextHeader>Informações sobre outros Países</TextHeader>
            <IconMundo source={require('../../../assets/iconMundo.png')} />
          </ViewHeader>
          <FlatList
            data={this.state.countries}
            renderItem={({item}) => <Country data={item} />}
            keyExtractor={(item, index) => index.toString()}
            refreshing={refreshing}
            onEndReachedThreshold={0.2}
            onEndReached={() => {
              this.loadMoreCountries();
            }}
          />
        </Container>
      );
    }
  }
}

class Country extends Component {
  render() {
    return (
      <MainCard>
        <ViewTitleCountrie>
          <TitleRegiao>{this.props.data.country}</TitleRegiao>
        </ViewTitleCountrie>
        <ViewDados>
          <ViewCollumn style={styles.shadow}>
            <TextTitleCard>Confirmados</TextTitleCard>
            <TextNumber>{this.props.data.cases}</TextNumber>
          </ViewCollumn>
          <ViewCollumn style={styles.shadow}>
            <TextTitleCard>Mortes</TextTitleCard>
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
