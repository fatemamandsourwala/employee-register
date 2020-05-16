import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {Provider} from 'react-redux'
import 'tachyons'

import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App'
import {searchEmployees, displayEmployees} from './reducers'

const logger = createLogger()
const rootReducer = combineReducers({searchEmployees, displayEmployees})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    	<App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
