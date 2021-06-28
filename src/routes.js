import React from 'react';
import { BrowserRouter as Router, Switch, Route as DefaultRoute } from 'react-router-dom';
import Route from './core/route';
import GlobalStyles from './styles/themes/global-styles';

import MenuWrapper from './components/menu-wrapper';
import Login from './pages/login';
import Cadastro from './pages/cadastro';

import Home from './public/pages/home';

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
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastro" component={Cadastro} />

          {/* Admin routes */}
          <MenuWrapper>
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/games" component={Games} />
            <Route exact path="/clientes" component={Clients} />
          </MenuWrapper>

          <DefaultRoute render={() => <h1>{notFound}</h1>} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
