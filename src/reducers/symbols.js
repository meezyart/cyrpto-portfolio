import * as R from 'ramda';

const initialState = {};
export default (state = initialState, { type, payload }) => {
    let newVal = [];
    const formatObject = (val, key) => {newVal.push({sym: key, price: val, selected:false})};
    R.forEachObjIndexed(formatObject,payload);


    console.log('sybleys selctor ', R.__.selected?payload.id:'' , );
  switch (type) {
    case 'FETCH_SYMBOLS_SUCCESS':
      return R.merge(state, newVal);
    case 'ITEM_SELECTED':
      return R.mergeDeepLeft(state, payload);

    default:
      return state;
  }
};
