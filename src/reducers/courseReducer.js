import * as types from '../actions/ActionsTypes';

export default function courseReducer(state = [], action) {
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