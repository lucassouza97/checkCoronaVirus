import styled from 'styled-components/native';
import {Dimensions, Platform} from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ViewHeader = styled.View`
  flex: 1;
  width: ${DEVICE_WIDTH}px;
  background-color: transparent;
`;
export const ViewInfo = styled.View`
  flex: 1;
`;

export const MainCard = styled.View`
  flex: 5;
  flex-direction: column;
  border-radius: 24px;
  width: ${DEVICE_WIDTH - 100}px;
`;

export const Card1 = styled.View`
  flex: 2;
  background: #ffffff;
  border-radius: 24px;
  margin-bottom: 20px;
`;
export const Card2 = styled.View`
  flex: 2;
  background: #ffffff;
  border-radius: 24px;
  margin-bottom: 20px;
`;
export const Card3 = styled.View`
  flex: 2;
  background: #ffffff;
  border-radius: 24px;
  margin-bottom: 20px;
`;
export const Card4 = styled.View`
  flex: 2;
  flex-direction: column;
  background: #ffffff;
  border-radius: 24px;
  margin-bottom: 20px;
`;

export const LogoTop = styled.Image`
  position: absolute;
  width: 35.41px;
  height: 34.66px;
  left: 20px;
  top: 24px;
`;

export const SearchIcon = styled.Image`
  position: absolute;
  left: 88.8%;
  right: 5.33%;
  top: 25%;
  bottom: 93.47%;
`;

export const InputState = styled.TextInput`
  position: absolute;
  font-size: 15px;
  text-align: right;
  width: 204px;
  height: 40px;
  left: 117px;
  top: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 40px;
`;

export const ViewLogo = styled.View`
  padding-top: 8px;
  flex-direction: row;

  justify-content: center;
  margin: auto;
`;

export const TextViewCase1 = styled.Text`
  position: absolute;
  /* height: 20px; */
  left: 13.87%;
  right: 40%;
  top: 15px;
  /* top: calc(50% - 34px / 2 - 237px); */
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  letter-spacing: 0.25px;
  color: #12121f;
`;

export const TextNumberCase1 = styled.Text`
  position: absolute;
  height: 34px;
  left: 13.87%;
  right: 80.8%;
  top: 45px;
  /* top: calc(50% - 34px / 2 - 237px); */
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.25px;
  color: #12121f;
`;

export const ShowMoreCase1 = styled.TouchableOpacity`
  position: absolute;
  height: 17px;
  left: 67.87%;
  right: 6.87%;
  /* top: calc(50% - 17px/2 - 275.5px); */
  top: 18px;
`;

export const PorcentCase1 = styled.Text`
  position: absolute;
  height: 20px;
  left: 23.47%;
  right: 63.73%;
  /* top: calc(50% - 20px/2 - 234px); */
  top: 50px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  letter-spacing: 0.25px;
  color: #fe805c;
`;

export const ImageUp1 = styled.Image`
  position: absolute;
  left: 36.98%;
  right: 59.82%;
  top: 22.04%;
  bottom: 76.64%;
`;
export const ImageDown1 = styled.Image`
  position: absolute;
  left: 36.98%;
  right: 59.82%;
  top: 22.04%;
  bottom: 76.64%;
`;
export const ShowMoreTextCase = styled.Text`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-decoration-line: underline;
  color: #4643d3;
`;

export const TextViewCase2 = styled.Text`
  position: absolute;
  height: 20px;
  left: 13.87%;
  right: 40%;
  /* top: calc(50% - 20px / 2 - 149px); */
  top: 60px;
  top: 15px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  letter-spacing: 0.25px;
  color: #12121f;
`;

export const TextNumberCase2 = styled.Text`
  position: absolute;
  height: 34px;
  left: 13.87%;
  right: 80.8%;
  /* top: calc(50% - 34px/2 - 110px); */
  top: 45px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.25px;
  color: #12121f;
`;

export const ShowMoreCase2 = styled.TouchableOpacity`
  position: absolute;
  height: 17px;
  left: 67.87%;
  right: 6.87%;
  /* top: calc(50% - 17px/2 - 148.5px); */
  top: 18px;
`;

export const PorcentCase2 = styled.Text`
  position: absolute;
  height: 20px;
  left: 23.47%;
  right: 63.73%;
  /* top: calc(50% - 20px/2 - 234px); */
  top: 50px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  letter-spacing: 0.25px;
  color: #4eb13e;
`;
export const ImageUp2 = styled.Image`
  position: absolute;
  left: 36.98%;
  right: 59.82%;
  top: 22.04%;
  bottom: 76.64%;
`;
export const ImageDown2 = styled.Image`
  position: absolute;
  left: 36.98%;
  right: 59.82%;
  top: 22.04%;
  bottom: 76.64%;
`;

export const TextViewCase3 = styled.Text`
  position: absolute;
  height: 20px;
  left: 13.87%;
  right: 40%;
  /* top: calc(50% - 20px / 2 - 22px); */
  top: 15px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  line-height: 20px;
  /* identical to box height */
  letter-spacing: 0.25px;
  color: #12121f;
`;

export const TextNumberCase3 = styled.Text`
  position: absolute;
  height: 34px;
  left: 13.87%;
  right: 80.8%;
  /* top: calc(50% - 34px / 2 + 17px); */
  top: 45px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.25px;
  color: #12121f;
`;

export const ShowMoreCase3 = styled.TouchableOpacity`
  position: absolute;
  height: 17px;
  left: 67.87%;
  right: 6.87%;
  /* top: calc(50% - 17px/2 - 21.5px); */
  top: 18px;
`;
export const PorcentCase3 = styled.Text`
  position: absolute;
  height: 20px;
  left: 23.47%;
  right: 63.73%;
  /* top: calc(50% - 20px/2 - 234px); */
  top: 50px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  letter-spacing: 0.25px;
  color: #fe805c;
`;
export const ImageUp3 = styled.Image`
  position: absolute;
  left: 36.98%;
  right: 59.82%;
  top: 22.04%;
  bottom: 76.64%;
`;
export const ImageDown3 = styled.Image`
  position: absolute;
  left: 36.98%;
  right: 59.82%;
  top: 22.04%;
  bottom: 76.64%;
`;

export const TextViewCase4 = styled.Text`
  position: absolute;
  /* height: 20px; */
  left: 13.87%;
  right: 50.4%;
  top: 15px;
  /* top: calc(50% - 34px / 2 - 237px); */
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  letter-spacing: 0.25px;
  color: #12121f;
`;

export const TextNumberCase4 = styled.Text`
  position: absolute;
  height: 34px;
  left: 13.87%;
  right: 80.8%;
  /* top: calc(50% - 34px / 2 + 144px); */
  top: 45px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.25px;

  color: #12121f;
`;

export const ShowMoreCase4 = styled.TouchableOpacity`
  position: absolute;
  height: 17px;
  left: 67.87%;
  right: 6.87%;
  top: 18px;
`;

export const PorcentCase4 = styled.Text`
  position: absolute;
  height: 20px;
  left: 23.47%;
  right: 63.73%;
  /* top: calc(50% - 20px/2 - 234px); */
  top: 50px;
  letter-spacing: 0.25px;
  color: #fe805c;
`;
export const ImageUp4 = styled.Image`
  position: absolute;
  left: 36.98%;
  right: 59.82%;
  top: 22.04%;
  bottom: 76.64%;
`;
export const ImageDown4 = styled.Image`
  position: absolute;
  left: 36.98%;
  right: 59.82%;
  top: 22.04%;
  bottom: 76.64%;
`;

export const InfoUpdate = styled.Text`
  flex: 1;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #8c8c96;
  border-radius: 24px;
`;
