import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';
import FontRussoOne from '../fonts/RussoOne-Regular.ttf';

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
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #fafafa;
    font-family: Roboto;
    color: #212121;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Russo One Regular';
    src: url(${FontRussoOne}) format('truetype');
  }

  ::-webkit-scrollbar {
    width: 8px;
    background: rgba(0,0,0,0);
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 4px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey; 
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #606060; 
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export default GlobalStyles;
