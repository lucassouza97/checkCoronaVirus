import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e9e9e9;
`;
export const ViewLogo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin: 10px auto auto auto;
`;
export const ViewTitle = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;
export const ViewCard = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const ViewCard2 = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const Card1 = styled.View`
  width: 30%;
  height: 70%;
  background-color: #5bc0de;
  border-radius: 8px;
  margin: auto 10px;
`;

export const Card2 = styled.View`
  width: 30%;
  height: 70%;
  background-color: #f0ad4e;
  border-radius: 8px;
  margin: auto;
`;

export const Card3 = styled.View`
  width: 30%;
  height: 70%;
  background-color: #d9534f;
  border-radius: 8px;
  margin: auto 10px;
`;

export const Card4 = styled.View`
  width: 30%;
  height: 70%;
  background-color: #5cb85c;
  border-radius: 8px;
  margin: auto;
`;

export const CardText = styled.Text`
  font-size: 28px;
  color: white;
  font-weight: bold;
  text-align: center;
  margin: 5px;
  font-family: Roboto-Bold;
`;

export const ViewSelected = styled.View`
  flex: 1;
  margin: auto 15px;
`;
export const ViewButtonSearch = styled.View`
  flex: 1;
  margin-top: 10px;
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: red;
  text-align: center;
  font-family: Roboto-Bold;
`;

export const CardTitle = styled.Text`
  font-size: 14px;
  color: white;
  text-align: center;
  font-family: Roboto-Bold;
  margin: -8px 5px 10px 5px;
`;

export const TextSelect = styled.Text`
  font-size: 14px;
  text-align: center;
  margin: 10px 5px;
  font-family: Roboto-Bold;
`;

export const TextSubTitle = styled.Text`
  font-size: 15px;
  text-align: center;
  margin: 1px 5px;
  font-family: Roboto-Bold;
`;

export const ImageLogo = styled.Image`
  width: 120px;
  height: 120px;
`;

export const ButtonSearch = styled.TouchableOpacity`
  background-color: #d3d3d3;
  border-radius: 20px;
  width: auto;
  /* border: 1px solid #2c3e50; */
  margin: 12px 32px 12px 35px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #3f3f3f;
  font-family: Roboto-Bold;
  font-weight: bold;
  margin: 8px 20px 8px 20px;
`;

export const DateText = styled.Text`
  font-size: 12px;
  color: #3f3f3f;
  font-family: Roboto-Bold;
  font-style: italic;
`;
