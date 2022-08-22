// import { Platform, NativeModules } from 'react-native';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from './en';
import chinese from './zh';
import * as CONSTANT from '../../constant';

import SyncPreference from 'react-native-sync-preference';

// Get a value from preferences
const savedLanguage = SyncPreference.get(CONSTANT.SYNC_PREFERENCE.LANGUAGE);

// const deviceLanguage =
//   Platform.OS === 'ios'
//     ? NativeModules.SettingsManager.settings.AppleLocale ||
//       NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
//     : NativeModules.I18nManager.localeIdentiier;

const resources = {
  en: {
    translation: english,
  },
  zh: {
    translation: chinese,
  },
};

// let initLanguage = deviceLanguage.substring(0, 2);
let initLanguage = 'zh';

if (savedLanguage !== undefined && savedLanguage !== null) {
  initLanguage = savedLanguage;
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // Fix issue https://stackoverflow.com/questions/70493788/i18nextpluralresolver-your-environment-seems-not-to-be-intl-api-compatible-u
    compatibilityJSON: 'v3',
    resources,
    lng: initLanguage,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
