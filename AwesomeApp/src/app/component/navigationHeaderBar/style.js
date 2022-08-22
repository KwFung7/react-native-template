import styled from 'styled-components';
import * as CONSTANT from '../../constant/index';

// const LeftButonImgExit = require('../../../assets/images/general/icon30X30Exit.png');
// const LeftButonImgBack = require('../../../assets/images/general/icon30X30Back.png');

const BoldTextFamily = styled.Text`
  //fontFamily: ${CONSTANT.FONT_FAMILY.MEDIUM},
`;

const LeftBtnImage = styled.Image`
  margin-left: 16;
`;

const FlexView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NavSafeAreaView = styled.SafeAreaView`
  background-color: ${props => props.backgroundColor};
`;

const NavBarView = styled.View`
  height: ${props => props.height};
  margin-top: ${props => props.marginTop};
  background-color: ${props => props.backgroundColor};
`;
const TitleView = styled(FlexView)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TitleText = styled(BoldTextFamily)`
  position: relative;
  font-size: 18;
  color: ${props => props.color};
`;

const HandleView = styled(FlexView)`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

module.exports = {
  // LeftButonImgExit,
  // LeftButonImgBack,
  LeftBtnImage,
  NavSafeAreaView,
  NavBarView,
  TitleView,
  TitleText,
  HandleView,
};
