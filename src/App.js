import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {checkUser} from './actions';
import HomePage from './Pages/HomePage';
import AuthenticatePage from './Pages/AuthenticatePage';
import OrdersPage from './Pages/OrdersPage';
import LoadingPage from './Pages/LoadingPage';

function App({auth, checkUser}) {
  const [isLoggedin, setisLoggedin] = useState(null);

  useEffect(
    async function () {
      await checkUser();
    },
    [auth]
  );

  useEffect(
    function () {
      if (auth) {
        setisLoggedin(true);
      } else if (auth == false) {
        setisLoggedin(false);
      } else {
        setisLoggedin(null);
      }
    },
    [auth]
  );

  let router;
  if (isLoggedin) {
    router = (
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/orders" component={OrdersPage} exact />
        <Redirect to="/" exact />
      </Switch>
    );
  } else if (isLoggedin == false) {
    router = (
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/authenticate" component={AuthenticatePage} exact />
        <Redirect to="/" exact />
      </Switch>
    );
  } else {
    router = (
      <Switch>
        <Route path="/" component={LoadingPage} exact />
        <Redirect to="/" exact />
      </Switch>
    );
  }
  return <BrowserRouter>{router}</BrowserRouter>;
}

function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps, {checkUser})(App);
