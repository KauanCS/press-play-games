import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  html, body, #root {
    height: 100%;
    background-color: #fafafa;
    font-family: Roboto;
    color: #212121;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    font-weight: 400;
  }
`;

export default GlobalStyles;
