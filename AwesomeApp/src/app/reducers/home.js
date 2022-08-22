import { EXAMPLE_ACTION_TYPE } from '../actions/type';

const initialState = {
  example: 'default',
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE_ACTION_TYPE:
      return {
        ...state,
        example: action.example,
      };
    default:
      return state;
  }
}