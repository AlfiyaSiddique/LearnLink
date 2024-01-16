// courseReducer.ts
import { ActionType } from '../action-types';
import { Action, Course } from '../actions';

const initialState: Course[] = [];

const courseReducer = (state: Course[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOAD_DATA_SUCCESS:
      return action.payload.courses;
    default:
      return state;
  }
};

export default courseReducer;
