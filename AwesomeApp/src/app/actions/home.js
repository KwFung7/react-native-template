import { EXAMPLE_ACTION_TYPE } from './type';

export const exampleAction = () => {
  return {
    type: EXAMPLE_ACTION_TYPE,
    example: '123',
  };
};