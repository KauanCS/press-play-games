import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
} from './styles';

import Footer from '../footer';
import Header from '../header';

const PublicWrapper = ({ children }) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);

PublicWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicWrapper;
