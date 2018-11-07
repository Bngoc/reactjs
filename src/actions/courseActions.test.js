import expect from 'expect';
import React from 'react';
import * as courseActions from './courseActions';
import * as types from './ActionsTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe("Course Actions", () => {
  describe("createCoursesSuccess", () => {
    it('should create a CREATE_COURSES_SUCCESS action', () => {
      const course = {value: "A1", text: "A Text"};
      const expectedAction = {
        type: types.CREATE_COURSES_SUCCESS,
        course: course
      };

      //act
      const action = courseActions.createCoursesSuccess(course);
      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});

// Test Thunk

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSE_SUCCESS when loading course', (done) => {
    // Here's an example call to nock
    // nock('http://example.com/')
    //   .get('/course')
    //   .reply(200, {body: {course: [{id: 1, firstName: "D", lastName: "D2"}]}});

    const expectedAction = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'DFDG', firstName: "1232", lastName: "jdrfd"}]}}
    ];

    const store = mockStore({courses: []}, expectedAction);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const acts = store.getActions();

      expect(acts[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(acts[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });
});
