import styled from 'styled-components';

import * as CONSTANT from '../../constant/index';
import normalize from '../../util/normalize';

const ErrorAlertIcon = require('../../../assets/images/icon/iconMessageError.png');
const SuccessStrokeIcon = require('../../../assets/images/icon/iconMessageSuccess.png');
const EyeOnIcon = require('../../../assets/images/icon/iconFieldsEyeOn.png');
const EyeOffIcon = require('../../../assets/images/icon/iconFieldsEyeOff.png');

const NormalTextInputView = styled.View`
  width: ${props => props.width};
  height: ${props => props.height}px;
  margin-left: ${props => props.marginLeft}px;
  border-radius: ${props => props.bordetRadius};
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  /* isError */
  border: ${props => props.border};
`;

const NormalTextInput = styled.TextInput`
  //font-family: ${CONSTANT.FONT_FAMILY.REGULAR};
  font-size: ${props => props.fontSize}px;
  flex: 1;
  // font-family: ${CONSTANT.FONT_FAMILY.REGULAR};
  opacity: ${props => props.editable ? 1 : 0.3};
`;

const TouchableOpacityItem = styled.Pressable`
`;

const BottomTip = styled.View`
  position: absolute;
  top: ${normalize(-20)}px;
  right: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BottomTipText = styled.Text`
  // font-family: ${CONSTANT.FONT_FAMILY.REGULAR};
  font-size: ${normalize(17)}px;
  color: ${CONSTANT.COLORS.PEACHY_PINK};
  text-align: right;
  margin-left: 4px;
`;

module.exports = {
  ErrorAlertIcon,
  SuccessStrokeIcon,
  EyeOnIcon,
  EyeOffIcon,
  NormalTextInputView,
  NormalTextInput,
  TouchableOpacityItem,
  BottomTip,
  BottomTipText,
};
