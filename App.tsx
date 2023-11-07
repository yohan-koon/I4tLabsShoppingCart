/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {RootNavigator} from './app/navigators/RootNavigator';
import { Provider } from 'react-redux';
import store from './app/redux/Store';


function App(): JSX.Element {

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
