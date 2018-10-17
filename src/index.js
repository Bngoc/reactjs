import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';

import '../styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';

const store = configureStore();
store.dispatch(loadCourses());


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
