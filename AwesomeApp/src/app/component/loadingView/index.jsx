import React, { } from 'react';
import { View, Animated } from 'react-native';
import { setLoadingAnimation } from '../../util/common';
import { styles } from './style';
import loadingIcon from '../../../assets/images/icon/iconTechnologyLoadingOverLight.png';
import normalize from '../../util/normalize';

export default function LoadingView(props) {
  const spin = setLoadingAnimation();

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{
          height: normalize(64),
          width: normalize(64),
          transform: [{ rotate: spin }]
        }}
        source={loadingIcon} />
    </View>
  );

}
