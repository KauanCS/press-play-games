import React from 'react';
import { BrowserRouter as Router, Switch, Route as DefaultRoute } from 'react-router-dom';
import Route from './core/route';
import GlobalStyles from './styles/themes/global-styles';

import PublicWrapper from './public/components/public-wrapper';
import Home from './public/pages/home';
import HowItWorks from './public/pages/how-it-works';
import Catalogue from './public/pages/catalogue';
import Contact from './public/pages/contact';
import Login from './public/pages/login';
import FAKELogin from './pages/login';
import Cadastro from './pages/cadastro';

import MenuWrapper from './components/menu-wrapper';
import Games from './admin/pages/games';
import Clients from './admin/pages/clients';
import Pedidos from './admin/pages/pedidos';

const Routes = () => {
  const notFound = '404 - not found';
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          {/* Public Routes */}
          <Route exact path="/" component={Home} isPublicRoute wrapper={PublicWrapper} />
          <Route exact path="/como-funciona" component={HowItWorks} isPublicRoute wrapper={PublicWrapper} />
          <Route exact path="/catalogo" component={Catalogue} isPublicRoute wrapper={PublicWrapper} />
          <Route exact path="/contato" component={Contact} isPublicRoute wrapper={PublicWrapper} />
          <Route exact path="/login" component={Login} isPublicRoute wrapper={PublicWrapper} />
          <Route exact path="/cadastro" component={Cadastro} isPublicRoute wrapper={PublicWrapper} />

          {/* Admin routes */}
          <Route exact path="/pedidos" component={Pedidos} wrapper={MenuWrapper} />
          <Route exact path="/games" component={Games} wrapper={MenuWrapper} />
          <Route exact path="/clientes" component={Clients} wrapper={MenuWrapper} />

          <DefaultRoute render={() => <h1>{notFound}</h1>} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
