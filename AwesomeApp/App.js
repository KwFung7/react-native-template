import React from 'react';
import { Provider } from 'react-redux';
import store from './src/app/store/index';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/app/navigator/index.jsx';
import { Host } from 'react-native-portalize';
import './src/app/util/i18n/index';

const App = props => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();

  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.current.getCurrentRoute().name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current.getCurrentRoute().name;

          console.log('Previous Route Name: ' + previousRouteName);
          console.log('Current Route Name: ' + currentRouteName);
          if (previousRouteName !== currentRouteName) {
            // await analytics().logScreenView({
            //   screen_name: currentRouteName,
            //   screen_class: currentRouteName,
            // });
          }
          routeNameRef.current = currentRouteName;
        }}>
        <Host>
          <RootNavigator />
        </Host>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
