import styled from 'styled-components/native';
import {Dimensions, Platform} from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: transparent;
`;
export const ViewHeader = styled.View`
  flex: 1;
  width: ${DEVICE_WIDTH}px;
  background-color: transparent;
  justify-content: space-between;
`;
export const ViewInfo = styled.View`
  flex: 1;
  margin-top: 10px;
  margin-bottom: 20px;
  align-items: center;
`;

export const ViewText = styled.View`
  top: 12%;
  width: 70%;
  height: 50%;
  flex-direction: row;
`;
export const MainCard = styled.View`
  flex: 5;
  flex-direction: column;
  border-radius: 24px;
  width: ${DEVICE_WIDTH - 60 + 'px'};
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

export const ImageLoading = styled.Image`
  position: absolute;
  width: 40.41px;
  height: 34.66px;
  left: 42%;
  top: 30%;
`;

export const SearchIcon = styled.Image`
  position: absolute;
  left: 88.8%;
  right: 5.33%;
  top: 31%;
`;
export const IconCheck = styled.Image`
  width: 40px;
  height: 40px;
`;
export const IconConfirmados = styled.Image`
  width: 40px;
  height: 40px;
`;
export const IconDeaths = styled.Image`
  width: 40px;
  height: 40px;
`;
export const IconZap = styled.Image`
  width: 40px;
  height: 40px;
`;
export const InputState = styled.TextInput`
  position: absolute;
  font-size: 15px;
  text-align: right;
  width: 204px;
  height: 40px;
  left: 150px;
  top: 25px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
`;

export const ViewLogo = styled.View`
  padding-top: 8px;
  flex-direction: row;

  justify-content: center;
  margin: auto;
`;

export const TextViewLoading = styled.Text`
  /* height: 20px; */
  text-align: center;
  top: 70%;
  /* top: calc(50% - 34px / 2 - 237px); */
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  letter-spacing: 0.25px;
  color: grey;
`;

export const TextViewCase1 = styled.Text`
  position: absolute;
  /* height: 20px; */
  left: 10%;
  right: 40%;
  top: 15px;
  /* top: calc(50% - 34px / 2 - 237px); */
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  letter-spacing: 0.25px;
  color: #000;
`;

export const TextNumberCase = styled.Text`
  height: 34px;
  width: auto;
  left: 68.87%;
  /* mudei e removi o absolute */
  top: 15px;
  /* top: calc(50% - 34px / 2 - 237px); */
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.25px;
  color: #000;
`;

export const ShowMoreCase1 = styled.TouchableOpacity`
  position: absolute;
  height: 17px;
  left: 67.87%;
  right: 6.87%;
  /* top: calc(50% - 17px/2 - 275.5px); */
  top: 30px;
`;

export const PorcentCaseUp = styled.Text`
  height: 20px;
  left: 80.47%;
  right: 23.73%;
  /* top: calc(50% - 20px/2 - 234px); */
  top: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  letter-spacing: 0.25px;
  color: #fe805c;
`;

export const PorcentCaseDown = styled.Text`
  height: 20px;
  left: 80.47%;
  right: 23.73%;
  /* top: calc(50% - 20px/2 - 234px); */
  top: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  letter-spacing: 0.25px;
  color: #4eb13e;
`;

export const ImageUp1 = styled.Image`
  right: 59.82%;
  left: 85%;
  top: 10%;
  bottom: 76.64%;
`;
export const ImageDown1 = styled.Image`
  right: 59.82%;
  left: 85%;
  top: 10%;
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
  left: 10%;
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
  color: #000;
`;

export const TextNumberCase2 = styled.Text`
  height: 34px;
  width: auto;
  left: 55.87%;
  /* mudei e removi o absolute */
  top: 10px;
  /* top: calc(50% - 34px/2 - 110px); */
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.25px;
  color: #000;
`;

export const ShowMoreCase2 = styled.TouchableOpacity`
  position: absolute;
  height: 17px;
  left: 67.87%;
  right: 6.87%;
  /* top: calc(50% - 17px/2 - 148.5px); */
  top: 18px;
`;

export const TextViewCase3 = styled.Text`
  position: absolute;
  height: 20px;
  width: 25%;
  left: 10%;
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
  color: #000;
`;

export const TextNumberCase3 = styled.Text`
  height: 34px;
  width: auto;
  left: 68.87%;
  /* mudei e removi o absolute */
  top: 15px;
  /* top: calc(50% - 34px / 2 - 237px); */
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.25px;
  color: #000;
`;

export const ShowMoreCase3 = styled.TouchableOpacity`
  position: absolute;
  height: 17px;
  left: 67.87%;
  right: 6.87%;
  /* top: calc(50% - 17px/2 - 21.5px); */
  top: 18px;
`;

export const TextViewCase4 = styled.Text`
  position: absolute;
  /* height: 20px; */
  left: 10%;
  width: 25%;
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
  color: #000;
`;

export const TextNumberCase4 = styled.Text`
  height: 34px;
  left: 55.87%;
  right: 80.8%;
  width: auto;
  /* top: calc(50% - 34px / 2 + 17px); */
  top: 10px;
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

export const InfoUpdate = styled.Text`
  flex: 1;
  width: ${DEVICE_WIDTH + 'px'};
  text-align:center
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #8c8c96;
  border-radius: 24px;
`;
