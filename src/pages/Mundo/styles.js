import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
  background-color: #faf9fe;
`;

export const TextHeader = styled.Text`
  font-family: VarelaRound-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #000;
`;

export const ViewHeader = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  width: ${DEVICE_WIDTH}px;
  background-color: transparent;
  align-items: center;
`;

export const IconMundo = styled.Image`
  height: 35px;
  width: 35px;
  margin-top: 5px;
`;

export const MainCard = styled.View`
  flex: 2;
  width: ${DEVICE_WIDTH}px;
  align-items: center;
  border-radius: 5px;
`;

export const ViewTitleCountrie = styled.View`
  background: #ffffff;
  flex-direction: column;
  background: transparent;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const TitleRegiao = styled.Text`
  font-family: VarelaRound-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  color: #000;
`;

export const TextMortalidade = styled.Text`
  font-family: VarelaRound-Regular;
  font-style: normal;
  font-size: 12px;
  color: #000;
`;

export const ViewDados = styled.View`
  flex: 1;
  flex-direction: row;
  background: #faf9fe;
  /* A */
  width: ${DEVICE_WIDTH - 30}px;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 20px;
`;

export const ViewCollumn = styled.View`
  background: #ffffff;
  flex-direction: column;
  flex: 1;
  /* A */
  border: 1px solid #e8e8e8;
  align-items: center;
  margin-top: 10px;
  border-radius: 20px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const TextTitleCard = styled.Text`
  font-family: VarelaRound-Regular;
  font-style: normal;
  font-size: 14px;
  color: #000;
  margin-top: 10px;
  align-items: center;
`;

export const TextValueObitosMundo = styled.Text`
  font-family: VarelaRound-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #fab822;
  margin-top: 10px;
  align-items: center;
  flex-direction: column;
`;
export const TextValueCasosMundo = styled.Text`
  font-family: VarelaRound-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #4643d3;
  margin-top: 10px;
  align-items: center;
  flex-direction: column;
`;

export const TextNumberConfirmados = styled.Text`
  font-family: VarelaRound-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #4643d3;
  margin-top: 10px;
  align-items: center;
  flex-direction: column;
`;
export const TextNumberoObitos = styled.Text`
  font-family: VarelaRound-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #fab822;
  margin-top: 10px;
  align-items: center;
  flex-direction: column;
`;

export const TextValueMortalidade = styled.Text`
  font-family: VarelaRound-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  color: #fb397a;
`;

export const ViewTaxaMortalidadeMundo = styled.View`
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const TextMortalidadeMundo = styled.Text`
  font-family: VarelaRound-Regular;
  font-style: normal;
  font-size: 16px;
  color: #000;
  margin-top: 10px;
  align-items: center;
  flex-direction: column;
`;

export const TextValueMortalidadeMundo = styled.Text`
  font-family: VarelaRound-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #fb397a;
`;

export const Countries = styled.FlatList`
  margin-top: 20px;
`;
