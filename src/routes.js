import React from 'react';
import { BrowserRouter as Router, Switch, Route as DefaultRoute } from 'react-router-dom';
import Route from './core/route';
import GlobalStyles from './styles/themes/global-styles';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Games from './pages/admin/games';
import Pedidos from './pages/admin/pedidos';
import MenuWrapper from './components/menu-wrapper';

const Routes = () => {
  const notFound = '404 - not found';
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastro" component={Cadastro} />

          <MenuWrapper>
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/games" component={Games} />
          </MenuWrapper>

          <DefaultRoute render={() => <h1>{notFound}</h1>} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
