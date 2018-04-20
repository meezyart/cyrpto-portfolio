import * as R from 'ramda';



const initialState = [];
export default (state = initialState, { type, payload }) => {
  // console.log('payload', payload, state);
  switch (type) {
    case 'ADD_TO_PORTFOLIO':
      return R.uniq(R.append(payload, state ));
    case 'REMOVE_FROM_PORTFOLIO':
    // console.log(payload);
      return state.filter(e => e !== payload);
    default:
      return state;
  }
};
