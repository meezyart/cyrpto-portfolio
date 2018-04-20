import * as R from 'ramda';

export const getSymbolsBySym = (state, id) => (R.prop(id, state.symbols));

export const getSymbols = state => {
         const symbols = R.map(id => getSymbolsBySym(state, id), state.trackerPage.ids);
         console.log('selectas',symbols)
         return symbols;
       };

export const getPortfolio = state => {
        const portfolio = R.map(id => getSymbolsBySym(state, id), state.portfolioPage.ids);
        // console.log('selectas',activity)
        return portfolio;
};
