import React, {Component} from 'react';

import {View, Text} from 'react-native';

import Select2 from 'react-native-select-two';

import {Container} from './styles';

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
  render() {
    return (
      <Container>
        <Select2
          isSelectSingle
          style={{borderRadius: 5, textAlign: 'center'}}
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
      </Container>
    );
  }
}
