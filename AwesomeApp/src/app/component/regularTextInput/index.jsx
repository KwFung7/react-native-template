import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

import * as CONSTANT from '../../constant/index';
import {
  SuccessStrokeIcon,
  NormalTextInputView,
  NormalTextInput,
  TouchableOpacityItem,
  BottomTip,
  BottomTipText,
  ErrorAlertIcon,
} from './style';
import normalize from '../../util/normalize';

export default function RegularTextInput(props) {
  const {
    placeholder, //占位符文本;
    editable = true, //是否可编辑, 为 false 表示不可编辑;
    password, //为 true，表示密码输入框。文本可见;
    secureTextEntry = false, //true: 像密码框一样隐藏输入内容;
    defaultValue, //定义 TextInput 组件中的字符串默认值;
    maxLength, //能够输入的最长字符数
    placeholderTextColor = CONSTANT.COLORS.SYSTEM_GRAY, //占位符文本的颜色;
    width = '100%',
    height = normalize(48),
    marginLeft = 0,
    backgroundColor = CONSTANT.COLORS.WHITE,
    bordetRadius = 28,
    fontSize = normalize(19),
    paddingLeft = normalize(16),
    paddingRight = normalize(16),
    iconArr = [],
    borderColor,
    isShowTypeIcon = false,
    errorTip,
    type = 'none', // none / success / error;
    // onChange, //当文本发生变化时，调用该函数。接收一个 event 参数，通过 event.nativeEvent.text 可以获取用户输入的字符串。event=>console.log(event.nativeEvent.text);
    onChangeText, //当文本发生变化时，调用该函数。直接可以接收用户输入的字符串。text=>console.log(text);
    onEndEditing, //当结束编辑时，调用该函数。接收一个 event 参数。
    onBlur, //失去焦点时触发（在 onEndEditing 之后）。接收一个 event 参数。
    onFocus, //获得焦点时触发。接收一个 event 参数。
    // onSubmitEditing, //当结束编辑后，点击键盘的提交按钮触发该事件。接收一个 event 参数。
    // onSelectionChange, //当用户在文本输入框中选择的字符串发生改变时触发。接收一个 event 参数。event.nativeEvent.selection.start 和 event.nativeEvent.selection.end；
    // onKeyPress, //（iOS 专有）；当 TextInput 组件获得焦点后，一个按键被按下时，这个回调函数将被调用并被传入按下键的键值。这个函数会在 onChange 回调函数之前被调用。
    // onContentSizeChange, //当 TextInput 组件的字符行数变化时触发该事件。因此这个回调函数只对多行 TextInput 组件有效，它的参数是一个对象，我们可以从中得到当前 TextInput 组件的新的宽与高。nativeEvent: {contentSize: {width: number, height: number}};
    // onScroll, //在 TextInput 组件滚动时会被调用。它的参数是一个对象，我们可以从中得到组件当前滚动的位置。nativeEvent: {contentOffset: {x: number, y: number}};
    keyboardType, // default / number-pad / decimal-pad / numeric / email-address / phone-pad
    textContentType // Only supported in IOS
  } = props;

  const [ShowTypeTip, setShowTypeTip] = useState(isShowTypeIcon);
  const [Border, setBorder] = useState(borderColor);

  // useEffect(() => {
  //   setShowTypeTip(()=>isShowTypeIcon);
  // }, [isShowTypeIcon]);

  useEffect(() => {
    if (type === 'none') {
      setShowTypeTip(() => false);
    } else {
      setShowTypeTip(() => isShowTypeIcon);
    }
  }, [isShowTypeIcon, type]);

  useEffect(() => {
    if (type === 'error') {
      setBorder(() => `1px solid ${CONSTANT.COLORS.PEACHY_PINK}`);
    } else if (!!borderColor) {
      setBorder(() => `1px solid ${borderColor}`);
    } else {
      setBorder(() => 'none');
    }
  }, [borderColor, type]);

  function handleFocus(e) {
    if (type !== 'error') {
      setBorder(() => `1px solid ${CONSTANT.COLORS.AMBER}`);
    }
    !!onFocus && onFocus(e);
  }

  function handleBlur(e) {
    if (type !== 'error') {
      setBorder(() => 'none');
    }
    !!onBlur && onBlur(e);
  }

  function handleEndEditing(e) {
    !!onEndEditing && onEndEditing(e);
  }

  return (
    <>
      {type === 'error' && !!errorTip && (
        <BottomTip>
          <Image style={{ height: normalize(16), width: normalize(16) }} source={ErrorAlertIcon} />
          <BottomTipText>{errorTip}</BottomTipText>
        </BottomTip>
      )}
      <NormalTextInputView
        width={width}
        height={height}
        border={Border}
        marginLeft={marginLeft}
        iconArrLen={iconArr.length}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        backgroundColor={backgroundColor}
        bordetRadius={bordetRadius}>
        <NormalTextInput
          placeholder={placeholder}
          editable={editable}
          password={password}
          secureTextEntry={secureTextEntry}
          defaultValue={defaultValue}
          maxLength={maxLength}
          placeholderTextColor={placeholderTextColor}
          fontSize={fontSize}
          keyboardType={keyboardType}
          textContentType={textContentType}
          onEndEditing={e => handleEndEditing(e)}
          onChangeText={e => onChangeText(e)}
          isShowTypeTip={!!ShowTypeTip && type === 'error'}
          onFocus={e => handleFocus(e)}
          onBlur={e => handleBlur(e)}
        />
        {type === 'success' && (
          <TouchableOpacityItem>
            <Image source={SuccessStrokeIcon} style={{ width: normalize(32), height: normalize(32) }} />
          </TouchableOpacityItem>
        )}
        {!!iconArr.length &&
          iconArr.map((item, index) => (
            <TouchableOpacityItem
              key={index}
              onPress={() => !!item.onPress && item.onPress()}>
              <Image source={item.icon} />
            </TouchableOpacityItem>
          ))}
      </NormalTextInputView>
    </>
  );
}
