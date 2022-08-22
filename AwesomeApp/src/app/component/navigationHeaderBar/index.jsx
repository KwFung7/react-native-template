import React, {useState, useEffect} from 'react';
import { StatusBar, Platform, TouchableOpacity } from 'react-native';
import * as CONSTANT from '../../constant/index';

import { LeftBtnImage, NavSafeAreaView, NavBarView, TitleView, TitleText, HandleView } from './style';

export default function NavigationHeaderBar(props) {

  const statusBarHeight = StatusBar.currentHeight;

  const { backgroundColor = CONSTANT.COLORS.GENKI_YELLOW } = props;

  const StatusBarShape = {
    // 设置状态栏
    backgroundColor: backgroundColor, //string 设置状态栏的颜色
    barStyle: 'dark-content', //'default', 'light-content', 'dark-content' 状态栏样式，IOS默认为白底黑字，ANDROID默认黑底白字；
    hidden: false, //bool 状态栏是否隐藏；
    translucent: false, //bool 指定状态栏是否透明。true：应用会在状态栏之下绘制（沉浸式，被状态栏遮挡一部分）。常和带有半透明背景色的状态栏搭配使用。
  };

  const {
    title,
    navigation,
    MainNavigation,
    LeftButton, //element;
    RightButton, //element;
    color = CONSTANT.COLORS.BLACK,
    TopStatusBar = StatusBarShape,
    isShowleftButton = true,
    // isShowRightButton = false,
    leftButtonIcon,
    leftButtonIconType = 'Exit',
    onPress = () => navigation.goBack(),
  } = props;

  const [LeftBtnIcon] = useState();

  useEffect(() => {
    // if (leftButtonIconType === 'Exit') {
    //   setLeftBtnIcon(()=>LeftButonImgExit);
    // }
    // if (leftButtonIconType === 'Back') {
    //   setLeftBtnIcon(()=>LeftButonImgBack);
    // }
  }, [leftButtonIconType]);

  const LeftBtnView = () => {
    return (
      <TouchableOpacity onPress={() => onPress()}>
        <LeftBtnImage source={!!leftButtonIcon ? leftButtonIcon : LeftBtnIcon} />
      </TouchableOpacity>
    );
  };

  return (
    <NavSafeAreaView backgroundColor={backgroundColor}>
      <StatusBar {...TopStatusBar} />
      <NavBarView
        marginTop={StatusBarShape.translucent ? statusBarHeight : 0}
        backgroundColor={backgroundColor}
        height={
          Platform.OS.toLocaleLowerCase() === 'ios'
            ? CONSTANT.NAV_BAR_HEIGHT_IOS
            : CONSTANT.NAV_BAR_HEIGHT_ANDROID
        }>
        <TitleView>
          {!!MainNavigation ? MainNavigation : <TitleText color={color}>{title}</TitleText>}
        </TitleView>
        <HandleView>
          {!!isShowleftButton && (LeftButton ? LeftButton : <LeftBtnView />)}
          {!!RightButton && RightButton}
        </HandleView>
      </NavBarView>
    </NavSafeAreaView>
  );
}
