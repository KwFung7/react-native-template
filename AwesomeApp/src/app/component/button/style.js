import {StyleSheet} from 'react-native';
import * as CONSTANT from '../../constant/index';
import normalize from '../../util/normalize';

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: normalize(48),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CONSTANT.COLORS.AMBER,
    disabled: {
      backgroundColor: CONSTANT.COLORS.AMBER_DISABLED
    },
  },
  btnIcon: {
    // width: 20,
    // height: 20,
    marginRight: 11,
  },
  btnIconOnly: {
    width: normalize(22),
    height: normalize(22),
  },
  btnText: {
    // fontFamily: CONSTANT.FONT_FAMILY.MEDIUM,
    color: CONSTANT.COLORS.WHITE,
    fontSize: normalize(20),
    letterSpacing: 0.8,
    textAlign: 'center',
  },
  ghostBtn: {
    backgroundColor: CONSTANT.COLORS.TRANSPARENT,
    borderWidth: 2,
    borderColor: CONSTANT.COLORS.AMBER,
    text: {
      color: CONSTANT.COLORS.AMBER,
    },
    disabled: {
      backgroundColor: CONSTANT.COLORS.TRANSPARENT
    },
  },
});

module.exports = {styles};
