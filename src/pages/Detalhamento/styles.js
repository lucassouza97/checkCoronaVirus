import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ImageBackground = styled.ImageBackground`
  position: absolute;
  width: 501px;
  height: 824px;
  left: -59px;
  top: -42px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 11.73%;
  right: 74.4%;
  top: 2.71%;
  bottom: 94.33%;
  align-items: center;
  display: flex;
`;

export const TextButton = styled.Text`
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02px;
  color: #4643d3;
`;

export const BackImage = styled.Image`
  position: absolute;
  left: 5.33%;
  right: 90.4%;
  top: 3.2%;
  bottom: 94.88%;
`;

export const StateText = styled.Text`
  position: absolute;
  width: 118px;
  height: 20px;
  left: 236px;
  top: 24px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;
