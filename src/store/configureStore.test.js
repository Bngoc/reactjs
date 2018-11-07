import expect from 'expect';
import {createStore} from 'redux';
import React from 'react';
import * as courseActions from '../actions/courseActions';
import initialStore from '../reducers/initialSate';
import rootReducer from '../reducers';

describe("Store!", () => {
  it('Should handle creating course', () => {
    //arrange
    const store = createStore(rootReducer, initialStore);
    const course = {
      title: "Clean code"
    };

    //act
    const action = courseActions.createCoursesSuccess(course);
    store.dispatch(action);

    //assert
    const actual = store.getState().courses[0];
    const expected = {
      title: "Clean code"
    };

    expect(actual).toEqual(expected);
  });
});
