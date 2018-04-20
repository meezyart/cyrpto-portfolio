import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store'


import Layout from './containers/Layout/index';
import 'bulma/css/bulma.css';
import './App.css';




const App = () => {
  return <Provider store={store}>
      <Layout />
    </Provider>;
};



export default App
