import React from 'react';
import { View, TouchableOpacity, Image, Text, Animated } from 'react-native';
import { styles } from './style';
import * as CONSTANT from '../../constant';
import { setLoadingAnimation } from '../../util/common';

const CommonButton = props => {
  const { button, onPress } = props;
  const spin = setLoadingAnimation();

  // set button and button text style for CTAButton and Ghost Button
  let btnStyle;
  let btnTextStyle;
  if (button.isGhostBtn) {
    btnStyle = [
      styles.ghostBtn,
      button.style ? button.style : '', //to adapt zh & en; created by bryanna;
      button.color ? {borderColor: button.color} : '',
      button.backgroundColor ? {backgroundColor: button.backgroundColor} : '',
      button.disabled ? styles.ghostBtn.disabled : '',
    ];
    btnTextStyle = [
      button.textColor ? {color: button.textColor} : '',
      button.disabled ? styles.ghostBtn.disabled.text : button.textColor ? {color: button.textColor} : styles.ghostBtn.text,
      button.fontSize ? {fontSize: button.fontSize} : '',
      button.fontFamily ? {fontFamily: button.fontFamily} : '',
    ];
  } else {
    btnStyle = [
      button.style ? button.style : '', //to adapt zh & en; created by bryanna;
      button.color ? { backgroundColor: button.color } : '',
      button.disabled ? styles.btnStyle.disabled : '',
      button.withShadow ? {
        shadowColor: CONSTANT.COLORS.BLACK,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
      } : '',
    ];
    btnTextStyle = [button.textColor ? {color: button.textColor} : '',
      button.fontSize ? {fontSize: button.fontSize} : ''];
  }

  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity
        style={[
          styles.btnStyle,
          btnStyle,
          {
            width: button.width || 48,
            height: button.height || 48,
          },
        ]}
        activeOpacity={0.8}
        onPress={onPress}
        disabled={button.isDisable}>
        {button.icon && !button.isLoading && (
          <Image
            style={button.iconStyle ? button.iconStyle : button.text ? styles.btnIcon : styles.btnIconOnly}
            source={button.icon}
          />
        )}
        {button.icon && button.isLoading && (
          <Animated.Image
            style={{ ...button.iconStyle, transform: [{rotate: spin}] }}
            source={button.icon}
          />
        )}
        {button.text && (
          <Text style={[styles.btnText, btnTextStyle]}>{button.text}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

CommonButton.propTypes = {};
CommonButton.defaultProps = {};

export default CommonButton;
