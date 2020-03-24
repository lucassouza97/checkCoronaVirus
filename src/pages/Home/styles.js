import styled from 'styled-components/native';
import {Dimensions, Platform} from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;
export const ViewLogo = styled.View`
  padding-top: 8px;
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
  justify-content: center;
  width: 40%;
  background-color: #ff9800;
  border-radius: 8px;
  margin-right: 5px;
`;

export const Card2 = styled.View`
  width: 40%;
  background-color: #3f51b5;
  justify-content: center;
  border-radius: 8px;
  margin-left: 5px;
`;

export const Card3 = styled.View`
  width: 40%;
  background-color: #f44336;
  justify-content: center;
  border-radius: 8px;
  margin-right: 5px;
  margin-top: 7px;
`;

export const Card4 = styled.View`
  width: 40%;
  background-color: #4caf50;
  justify-content: center;
  border-radius: 8px;
  margin-left: 5px;
  margin-top: 7px;
`;

export const CardText = styled.Text`
  font-size: 28px;
  color: white;
  font-weight: bold;
  text-align: center;
  font-family: Roboto-Bold;
`;

export const ViewSelected = styled.View`
  margin: auto 30px;
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
  font-size: 16px;
  color: white;
  text-align: center;
  font-family: Roboto-Bold;
  margin: -10px 7px -10px 7px;
  width: auto;
`;

export const TextSelect = styled.Text`
  font-size: 14px;
  text-align: center;
  margin: 10px 5px;
  font-family: Roboto-Bold;
`;

export const TextSubTitle = styled.Text`
  font-size: 17px;
  text-align: center;
  margin: 1px 5px;
  font-family: Roboto-Bold;
`;

export const ImageLogo = styled.Image`
  width: 140px;
  height: 140px;
`;

export const ButtonSearch = styled.TouchableOpacity`
  background-color: #d3d3d3;
  border-radius: 20px;
  align-self: center;
  margin-top: ${Platform.OS === 'android'
    ? Dimensions.get('window').height / 50
    : Dimensions.get('window').height / 30}px;
  padding: 5px;
`;
/* background-color: #d3d3d3;
  border-radius: 20px;
  width: auto;
  /* border: 1px solid #2c3e50; */
/* margin: 12px 32px 12px 35px;  */

export const ButtonText = styled.Text`
  font-size: 14px;
  color: #3f3f3f;
  font-family: Roboto-Bold;
  font-weight: bold;
  margin: 8px 20px 8px 20px;
`;

export const DateText = styled.Text`
  font-size: 13px;
  color: #3f3f3f;
  font-family: Roboto-Bold;
  font-style: italic;
`;
