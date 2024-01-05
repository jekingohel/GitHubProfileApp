import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import Store from './store';
import 'react-native-devsettings';

function App(): React.JSX.Element {
  return (
    <Provider store={Store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
