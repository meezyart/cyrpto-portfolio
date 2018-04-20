import * as R from 'ramda';
import { cryptoInstance } from './axios';     

export const fetchSymbolPrice = async (fsyms = 'BTC,ETH', full = '', tsyms = 'USD,EUR') => {
         const { data } = await cryptoInstance.get(`pricemulti${full}?fsyms=${fsyms}&tsyms=${tsyms}&extraParams=cyroptoTracker`);
         return new Promise((resolve) => {
           resolve(data);
         });
       };


export const fetchTopExchangeSymbols = async (num = 25, exchange = 'Cryptsy') => {
         const { data } = await cryptoInstance.get('all/exchanges');

         return new Promise((resolve) => {
            const list = R.keys(data[exchange]),
              top25 = R.take(num, list).join(',');
            resolve(top25);
         });
       };

       