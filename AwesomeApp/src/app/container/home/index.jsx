import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ExampleText } from './style';
import { exampleAction } from '../../actions/home';

const Home = props => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exampleAction());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <ExampleText>{t('app_name')} - Home Screen Testing</ExampleText>
    </SafeAreaView>
  );
};

export default Home;