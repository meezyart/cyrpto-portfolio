import * as R from 'ramda';

const initialState = {
  ids:[]
};
export default (state = initialState, { type, payload }) =>  {
    let newVal = [];
    const formatObject = (val, key) => {newVal.push({sym: key})};
    R.forEachObjIndexed(formatObject,payload);
  switch (type) {
    case 'FETCH_SYMBOLS_SUCCESS':
      return R.merge(state, {
        ids: R.pluck('sym',newVal)
      });
    default:
      return state;
  }
};
