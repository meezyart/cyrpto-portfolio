import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import symbols from './symbols'
import trackerPage from './trackerPage';
import portfolio from './portfolio';
// import selected from './selected';

const rootReducer = combineReducers({
  //   routing: routerReducer,
  symbols,
  trackerPage,
  portfolio
});

export default rootReducer;
