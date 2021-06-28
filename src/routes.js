import React from 'react';
import { BrowserRouter as Router, Switch, Route as DefaultRoute } from 'react-router-dom';
import Route from './core/route';
import GlobalStyles from './styles/themes/global-styles';

import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Games from './admin/pages/games';
import Clients from './admin/pages/clients';
import Pedidos from './admin/pages/pedidos';
import MenuWrapper from './components/menu-wrapper';

const Routes = () => {
  const notFound = '404 - not found';
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/login" unsignedRoute component={Login} />
          <Route privateRoute exact path="/cadastro" component={Cadastro} />

          {/* Admin routes */}
          <MenuWrapper>
            <Route privateRoute exact path="/pedidos" component={Pedidos} />
            <Route privateRoute exact path="/games" component={Games} />
            <Route privateRoute exact path="/clientes" component={Clients} />
          </MenuWrapper>

          <DefaultRoute render={() => <h1>{notFound}</h1>} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
