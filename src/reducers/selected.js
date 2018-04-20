import * as R from 'ramda';

const initialState = {};
export default (state = initialState, { type, payload }) => {
    let newVal = [];
    const formatObject = (val, key) => {newVal.push({sym: key, price: val, selected:false})};
    R.forEachObjIndexed(formatObject,payload);
    console.log('sybleys selctor ', payload, state)
  switch (type) {
    case 'ITEM_SELECTED':
      return R.assocPath();

    default:
      return state;
  }
};
