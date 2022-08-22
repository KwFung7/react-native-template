import React from 'react';
import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ExampleText } from './style';

const Home = props => {
  const { t } = useTranslation();

  return (
    <SafeAreaView>
      <ExampleText>{t('app_name')} - Home Screen Testing</ExampleText>
    </SafeAreaView>
  );
};

export default Home;