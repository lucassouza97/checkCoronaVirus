import styled from 'styled-components/native';
import {Dimensions, Platform} from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
  background-color: #faf9fe;
`;
export const ImageBackground = styled.ImageBackground`
  position: absolute;
  flex: 1;
`;
export const ViewHeader = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  width: ${DEVICE_WIDTH}px;
  background-color: transparent;
  align-items: center;
`;
export const BackButton = styled.TouchableOpacity`
  top: 10%;
`;
export const TextButton = styled.Text`
  left: 11.73%;
  right: 74.4%;
  top: 3.2%;
  bottom: 94.33%;
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02px;
  color: #4643d3;
`;

export const IconBrasil = styled.Image`
  height: 35px;
  width: 35px;
  margin-top: 5px;
`;

export const StateText = styled.Text`
  position: absolute;
  width: 118px;
  height: 20px;
  left: ${DEVICE_WIDTH - 120};
  top: 12%;
  bottom: 95.88%;
  font-family: Red-Hat-Display;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #120e21;
`;
export const TextTotal = styled.Text`
  width: auto;
  height: 20px;
  left: ${DEVICE_WIDTH - 390};
  top: 78px;
  font-family: Red-Hat-Display;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #000;
`;

export const MainCard = styled.View`
  flex: 2;
  width: ${DEVICE_WIDTH}px;
  align-items: center;
  border-radius: 5px;
`;
export const ViewGrafico = styled.View`
  background: #ffffff;
  /* A */
  width: ${DEVICE_WIDTH - 30}px;
  border: 1px solid #e8e8e8;
  border-radius: 20px;
  margin-bottom: 20px;
  background: black;
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
export const TextGrafico = styled.Text`
  margin: 10px;
  font-family: Red-Hat-Display;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  color: #000;
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
export const ViewTitleRegiao = styled.View`
  background: #ffffff;
  flex-direction: row;
  background: transparent;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 10px;
`;
export const TitleRegiao = styled.Text`
  font-family: Red-Hat-Display;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  color: #000;
`;
export const TextHeader = styled.Text`
  font-family: Red-Hat-Display;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  color: #000;
`;
export const TextTitleCard = styled.Text`
  font-family: Red-Hat-Display;
  font-style: normal;
  font-size: 14px;
  color: #000;
  margin-top: 10px;
  align-items: center;
`;
export const TextNumber = styled.Text`
  font-family: Red-Hat-Display;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  color: #000;
  margin-top: 10px;
  align-items: center;
  flex-direction: column;
`;

export const Circle1 = styled.View`
  height: 15px;
  width: 15px;
  background-color: rgb(148, 222, 15);
  border-radius: 50px;
  margin-right: 5px;
  margin-bottom: 3px;
`;
export const Circle2 = styled.View`
  height: 15px;
  width: 15px;
  background-color: rgb(255, 149, 8);
  border-radius: 50px;
  margin-right: 5px;
  margin-bottom: 3px;
`;
export const Circle3 = styled.View`
  height: 15px;
  width: 15px;
  background-color: rgb(255, 206, 58);
  border-radius: 50px;
  margin-right: 5px;
  margin-bottom: 3px;
`;
export const Circle4 = styled.View`
  height: 15px;
  width: 15px;
  background-color: rgb(253, 2, 11);
  border-radius: 50px;
  margin-right: 5px;
  margin-bottom: 3px;
`;
export const Circle5 = styled.View`
  height: 15px;
  width: 15px;
  background-color: rgb(87, 150, 255);
  border-radius: 50px;
  margin-right: 5px;
  margin-bottom: 3px;
`;
