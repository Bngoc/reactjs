import * as types from '../actions/ActionsTypes';
import initialSate from './initialSate';

export default function courseReducer(state = initialSate.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state,
        Object.assign({}, action.course)
      ];

    case types.LOAD_COURSES_SUCCESS:
      return action.course;

    default:
      return state;
  }
}
