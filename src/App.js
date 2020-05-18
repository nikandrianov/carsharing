import React from 'react';
import './App.scss';

import Main from './pages/Main';
import Order from './pages/Order';
import AdminAuth from './pages/AdminAuth';
import AdminCarSetting from './pages/AdminCarSetting';
import AdminOrderList from './pages/AdminOrderList';
import AdminEntities from './pages/AdminEntities';
import AdminError from './pages/AdminError';
import Test from './Test';
import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <HashRouter>
      <div className="App">
          <Switch>
              <Route exact path="/" component={Main}></Route>
              <Route exact path="/order" component={Order}></Route>
              <Route exact path="/admin/" component={AdminAuth}></Route>
              <Route exact path="/admin/setting" component={AdminCarSetting}></Route>
              <Route exact path="/admin/order" component={AdminOrderList}></Route>
              <Route exact path="/admin/entities" component={AdminEntities}></Route>
              <Route exact path="/admin/error" component={AdminError}></Route>
              <Route exact path="/test" component={Test}></Route>
          </Switch>
      </div>
      </HashRouter>
    );
  }
}

export default App;
