import styled from 'styled-components/native';
import {Dimensions, Platform} from 'react-native';
const DEVICE_HEIGHT = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
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
  top: 3.82%;
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
  margin: 10px auto auto auto;
`;
export const ViewTitle = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;

export const Card1 = styled.View`
  position: absolute;
  left: 5.33%;
  right: 5.33%;
  top: 12.32%;
  bottom: 74.51%;
  background: #ffffff;
  box-shadow: 30px 35px 22px rgba(70, 67, 211, 0.13);
  border-radius: 24px;
`;

export const TextViewCase1 = styled.Text`
  position: absolute;
  /* height: 20px; */
  left: 13.87%;
  right: 50.4%;
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
  left: 69.87%;
  right: 13.87%;
  /* top: calc(50% - 17px/2 - 275.5px); */
  top: 10px;
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

export const Card2 = styled.View`
  position: absolute;
  left: 5.33%;
  right: 5.33%;
  top: 27.96%;
  bottom: 58.87%;
  background: #ffffff;
  border-radius: 24px;
`;

export const TextViewCase2 = styled.Text`
  position: absolute;
  height: 20px;
  left: 13.87%;
  right: 56.8%;
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
  left: 69.87%;
  right: 13.87%;
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

export const Card3 = styled.View`
  position: absolute;
  left: 5.33%;
  right: 5.33%;
  top: 43.6%;
  bottom: 43.23%;
  background: #ffffff;
  border-radius: 24px;
`;

export const TextViewCase3 = styled.Text`
  position: absolute;
  height: 20px;
  left: 13.87%;
  right: 70.4%;
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
  left: 69.87%;
  right: 13.87%;
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

export const Card4 = styled.View`
  position: absolute;
  left: 5.33%;
  right: 5.33%;
  top: 59.24%;
  bottom: 27.59%;

  background: #ffffff;
  /* box-shadow: 30px 35px 22px rgba(70, 67, 211, 0.13),
    10px 15px 15px rgba(70, 67, 211, 0.06), 0px 0px 5px rgba(70, 67, 211, 0.15); */
  border-radius: 24px;
`;

export const TextViewCase4 = styled.Text`
  position: absolute;
  height: 20px;
  left: 13.87%;
  right: 70.4%;
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
  left: 69.87%;
  right: 13.87%;
  /* top: calc(50% - 17px / 2 + 105.5px); */
  top: 18px;
`;

export const PorcentCase4 = styled.Text`
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

export const InfoUpdate = styled.Text`
  position: absolute;
  height: 17px;
  left: 13.87%;
  right: 58.13%;
  top: ${DEVICE_HEIGHT - 160};

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #8c8c96;
`;
