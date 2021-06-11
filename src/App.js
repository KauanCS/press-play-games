import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import theme from './styles/themes/global';
import './App.less';

const App = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);

export default App;
