import expect from 'expect';
import React from 'react';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe("Course Reducers", () => {
  it('should add course when passed CREATE_COURSES_SUCCESS', () => {
    const initialState = [{title: "XXX"}, {title: "YYY"}];

    const newCourse = {title: "C"};
    const action = actions.createCoursesSuccess(newCourse);
    const newState = courseReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual("XXX");
    expect(newState[2].title).toEqual("C");
  });

  it('should update course when passed UPDATE_COURSES_SUCCESS', () => {
    const initialState = [
      {id: "x1", title: "XXX"},
      {id: "x2", title: "YYY"},
      {id: "x3", title: "C"}
    ];

    const newCourse = {id: "x3", title: "New x3"};
    const action = actions.updateCoursesSuccess(newCourse);

    //Act
    const newState = courseReducer(initialState, action);
    const updateCourse = newState.find(a => a.id == newCourse.id);
    const untouchedCourse = newState.find(a => a.id == "x3");
    const untouchedFirstCourse = newState.find(a => a.id == "x1");

    //Assert
    expect(updateCourse.title).toEqual("New x3");
    expect(untouchedCourse.title).toEqual("New x3");
    expect(untouchedFirstCourse.title).toEqual("XXX");
    expect(newState.length).toEqual(3);
  });
});
