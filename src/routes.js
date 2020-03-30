import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import IconHome from '../assets/icons-menu/Home/Home.png';
import IconEarth from '../assets/icons-menu/Detalhamento/Detalhamento.png';
import IconContato from '../assets/icons-menu/Contato/Contato.png';
import Home from '../src/pages/Home/Home';
import Detalhamento from '../src/pages/Detalhamento/Detalhamento';
import Contato from '../src/pages/Contato/Contato';

const positionTop = '91.16%';
const positionBottom = '0.62%';

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'home', icon: IconHome},
      {key: 'detalhamento', icon: IconEarth},
      {key: 'contato', icon: IconContato},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    home: Home,
    detalhamento: Detalhamento,
    contato: Contato,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        barStyle={{
          backgroundColor: '#FFFFFF',
          boxShadow: '0px -0.5px 0px rgba(0, 0, 0, 0.3)',
          borderTopWidth: 1,
          borderTopColor: '#535c68',
        }}
      />
    );
  }
}
