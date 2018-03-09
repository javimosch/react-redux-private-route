import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import shopManager from './shopManager';
import auth from './auth';
export default combineReducers({
  router: routerReducer,
  counter,
  shopManager,
  auth
});
