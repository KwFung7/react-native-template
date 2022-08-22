import { EXAMPLE_ACTION_TYPE } from './type';

export const exampleAction = data => {
  return {
    type: EXAMPLE_ACTION_TYPE,
    example: data,
  };
};