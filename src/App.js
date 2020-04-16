import React from 'react';
import './App.scss';

import Main from './pages/Main';
import Order from './pages/Order';
import AdminAuth from './pages/AdminAuth';
import AdminCarSetting from './pages/AdminCarSetting';
import AdminOrderList from './pages/AdminOrderList';
import AdminEntities from './pages/AdminEntities';
import AdminError from './pages/AdminError';

class App extends React.Component {
  // constructor (props) {
  //   super(props);
  // }
  render () {
    return (
      <div className="App">
        <Main /> 
      </div>
    );
  }
}

export default App;
