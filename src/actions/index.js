// import {
//   FETCH_SYMBOLS_START,
//   FETCH_SYMBOLS_SUCCESS,
//   FETCH_SYMBOLS_FAIL,
//   ADD_TO_PORFOLIO,
//   REMOVE_FROM_PORFOLIO
// } from '../actionTypes';

import {
  fetchSymbolPrice as fetchSymbolPriceAPI,
  fetchTopExchangeSymbols as fetchTopExchangeSymbolsAPI
} from '../api';



export const fetchSymbols = () => async dispatch => {
  dispatch({ type: 'FETCH_SYMBOLS_START' });
    const sym = await fetchTopExchangeSymbolsAPI();
  try {
   
    const symbols =  await fetchSymbolPriceAPI('BTC,ETH,' + sym);
    // console.log('symbols' ,sym, symbols);
    dispatch({
      type: 'FETCH_SYMBOLS_SUCCESS',
      payload: symbols
    });
  } catch (err) {
    dispatch({
      type: 'FETCH_SYMBOLS_FAIL',
      payload: err,
      error: true
    });
  }
};

export const addToPortfolio = (id, item) => dispatch => {
    // console.log(id)
dispatch({
  type: 'ADD_TO_PORTFOLIO',
  payload: {id,item}
});
}

export const removeFromPortfolio = (id, item) => dispatch => {
    // console.log(id)
dispatch({
  type: 'REMOVE_FROM_PORTFOLIO',
  payload: item
});
}

export const checkifActive = (item) => dispatch => {
         console.log(item);
         dispatch({ type: 'ITEM_SELECTED', payload: item });
       };



