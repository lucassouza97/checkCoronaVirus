import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Select2 from 'react-native-select-two';
import {
  Container,
  ViewTitle,
  ViewCard,
  CardText,
  Card1,
  Card2,
  Card3,
  Card4,
  CardTitle,
  ButtonText,
  ViewSelected,
  ViewButtonSearch,
  ViewCard2,
  TextTitle,
  TextSelect,
  ImageLogo,
  ViewLogo,
  TextSubTitle,
  ButtonSearch,
  DateText,
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

  static navigationOptions = {
    headerShown: false,
    tabBarLabel: 'Main',
  };

  _error = item => {
    this.props.navigation.replace('Dados');
  };

  render() {
    return (
      <Container>
        <StatusBar hidden />
        <ViewLogo>
          <ImageLogo source={require('../../../assets/corona.png')} />
        </ViewLogo>
        <ViewTitle>
          <TextTitle>COVID-19</TextTitle>
          <TextSubTitle>
            Status atual da contaminação do vírus no Brasil{' '}
          </TextSubTitle>
        </ViewTitle>

        <ViewCard>
          <Card1>
            <CardText>{this.state.casos}</CardText>
            <CardTitle>CASOS</CardTitle>
          </Card1>
          <Card2>
            <CardText>{this.state.confirmados}</CardText>
            <CardTitle>CONFIRMADOS</CardTitle>
          </Card2>
        </ViewCard>
        <ViewCard2>
          <Card3>
            <CardText>{this.state.mortes}</CardText>
            <CardTitle>MORTES</CardTitle>
          </Card3>
          <Card4>
            <CardText>{this.state.recuperados}</CardText>
            <CardTitle>CURADOS</CardTitle>
          </Card4>
        </ViewCard2>

        <ViewSelected>
          <TextSelect> Selecione um Estado </TextSelect>
          <Select2
            isSelectSingle
            style={{borderRadius: 5}}
            colorTheme={'blue'}
            popupTitle="Estados"
            title="Selecione seu Estado"
            data={mockData}
            onSelect={data => {
              this.setState({data});
            }}
            onRemoveItem={data => {
              this.setState({data});
            }}
          />
        </ViewSelected>
        <ViewButtonSearch>
          <ButtonSearch onPress={() => this._error()}>
            <ButtonText> PESQUISAR </ButtonText>
          </ButtonSearch>
        </ViewButtonSearch>
        <DateText>Atualizado {this.state.updated_at}</DateText>
      </Container>
    );
  }
}
