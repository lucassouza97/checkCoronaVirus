import styled from 'styled-components/native';

const shadowBox = {
  shadow: 'rgba(255, 255, 255, 0.71)',
  shadow2: '#ffffff',
};
export const Container = styled.View`
  flex: 1;
`;
export const ImageBackground = styled.ImageBackground`
  position: absolute;
  width: 560px;
  height: 1440px;
  left: 0px;
  top: 0px;
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

export const LogoImage = styled.Image`
  position: absolute;
  left: 31.73%;
  right: 26.62%;
  top: 76.6%;
  bottom: 19.07%;
`;

export const TextCopyrigth = styled.Text`
  position: absolute;
  height: 17px;
  left: 20.53%;
  right: 15.2%;
  /* top: calc(50% - 17px / 2 + 192.5px);  */

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
`;
