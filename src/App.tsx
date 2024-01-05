import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import Store from './store';

function App(): React.JSX.Element {
  return (
    <Provider store={Store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
