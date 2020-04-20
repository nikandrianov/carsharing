import React from 'react';
import './App.scss';

import Main from './pages/Main';
import Order from './pages/Order';
// import AdminAuth from './pages/AdminAuth';
// import AdminCarSetting from './pages/AdminCarSetting';
// import AdminOrderList from './pages/AdminOrderList';
// import AdminEntities from './pages/AdminEntities';
// import AdminError from './pages/AdminError';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <Router>
      <div className="App">
          <Switch>
              <Route exact path="/" component={Main}></Route>
              <Route exact path="/order" component={Order}></Route>
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
