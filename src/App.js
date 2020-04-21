import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { history, store } from './redux/store';
import InitialRoutes from './navigation/router';
import throttle from 'lodash/throttle';
import { saveState } from '../src/redux/localStorage'
import 'antd/dist/antd.css';

store.subscribe(
  throttle(() => {
    saveState({
      loginReducer: store.getState().loginReducer,
      dashboardReducer: store.getState().dashboardReducer,
    });
  }),
  1000
);
  
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <InitialRoutes history={history}  />
      </Provider>
    );
  }
}
  
export default App;