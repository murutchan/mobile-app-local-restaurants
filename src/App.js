import React from 'react';

import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {theme} from './infrastructure/theme/index';
import RestaurantsScreen from './components/features/restaurants/screens/restaurants.screen';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      {/* <StatusBar style="auto" /> */}
    </>
  );
};

export default App;
