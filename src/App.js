import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import { Login, Error, Dashboard, AuthWrapper } from './pages/index';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
