import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
} from './styles';

import Footer from '../footer';
import Header from '../header';
import MobileFooter from '../mobile-footer';

const PublicWrapper = ({ children }) => (
  <Container>
    <Header />
    {children}
    <MobileFooter />
    <Footer />
  </Container>
);

PublicWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicWrapper;
