import ReactNativeBiometrics from 'react-native-biometrics';
import i18n from './i18n';
import { BIOMETRIC_AUTH_STATUS } from '../constant';

export default class BiometricAuthUtil {
  supportMode = async () => {
    try {
      let { available, biometryType } = await ReactNativeBiometrics.isSensorAvailable();
      if (available && biometryType === ReactNativeBiometrics.TouchID) {
        return BIOMETRIC_AUTH_STATUS.TOUCH_ID;
      } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
        return BIOMETRIC_AUTH_STATUS.FACE_ID;
      } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
        return BIOMETRIC_AUTH_STATUS.FACE_ID;
      } else {
        return BIOMETRIC_AUTH_STATUS.DISABLED;
      }
    } catch (err) {
      return BIOMETRIC_AUTH_STATUS.DISABLED;
    }
  };

  authenicate = async (message) => {

    let { success, error } = await ReactNativeBiometrics.simplePrompt({
      promptMessage: message,
      cancelButtonText: i18n.t('action_cancel'), // Android only
    });
    if (success) return true;
    return false;
  };
}