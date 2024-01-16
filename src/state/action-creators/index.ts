// actionCreators.ts
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import axios from 'axios';
import { Action, User, UserActionType } from '../actions';

export const loadCourseData = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.get('http://localhost:5000/api/courselist');
      dispatch({
        type: ActionType.LOAD_DATA_SUCCESS,
        payload: { courses: response.data.courses },
      });
    } catch (error) {
      console.error('Error loading course data:', error);
      // You can dispatch an action for error handling if needed
    }
  };
};

export const login = (formData: User)=>{
  return (dispatch: Dispatch<UserActionType>)=>{
      dispatch({
        type: ActionType.USER_LOGIN,
        payload: {data: formData}
      })
  }
}

export const signup = (formData: User)=>{
    return (dispatch: Dispatch<UserActionType>)=>{
        dispatch({
          type: ActionType.USER_LOGIN,
          payload: {data: formData}
        })
    }
  }
