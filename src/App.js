import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import theme from './styles/themes/global';
import './App.less';

import { UserProvider } from './contexts/user';

const App = () => (
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>
);

export default App;
