import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Login from '../login';
import AuthGuard from 'components/AuthGuard';
import Header from 'components/Header';
const App = () => (
  <div>
    <Header />

    <main>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/about-us" component={About} />
    </main>
  </div>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <AuthGuard component={Component} />} />
);

export default App;
