import * as TYPES from '../actions/type';

const initialState = {

};

export default function home(state = initialState, action) {
  switch (action.type) {
    // case TYPES.EXAMPLE:
    //   return {
    //     ...state,
    //     data: action.example,
    //   };
    default:
      return state;
  }
}