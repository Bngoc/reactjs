import * as types from './ActionsTypes';
import courseApi from '../api/mockCourseApi';
import {ajaxCallError, beginAjaxCall} from './ajaxStatusActions';

export function createCourse(course) {
  return {type: types.CREATE_COURSE, course};
}

export function updateCoursesSuccess(course) {
  return {type: types.UPDATE_COURSES_SUCCESS, course};
}

export function createCoursesSuccess(course) {
  return {type: types.CREATE_COURSES_SUCCESS, course};
}

export function deleteCoursesSuccess(course) {
  return {type: types.DELETE_COURSES_SUCCESS, course};
}
export function loadCoursesSuccess(course) {
  return {type: types.LOAD_COURSES_SUCCESS, course};
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw (error);
    });
  };
}

export function saveCourses(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(saveCourses => {
      course.id ? dispatch(updateCoursesSuccess(saveCourses)) : dispatch(createCoursesSuccess(saveCourses));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function deleteCourses(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.deleteCourse(course.id).then(saveCourses => {
      course.id ? dispatch(updateCoursesSuccess(saveCourses)) : dispatch(createCoursesSuccess(saveCourses));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
