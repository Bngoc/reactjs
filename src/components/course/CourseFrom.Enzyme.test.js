import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseFrom from './CourseFrom';

const setup = (saving) => {
  let props = {
    course: {}, saving: saving, errors: {},
    onSave: () => {
    },
    onChange: () => {
    }
  };
  return shallow(<CourseFrom {...props} />);
};

describe("CourseFrom via react test Enzyme!", () => {
  it('renders form and h1 by Enzyme!', () => {
    const output = setup(false);
    expect(output.find('form').length).toBe(1);
    expect(output.find('h1').text()).toEqual('Manage Course');
  });

  it('Save button is labeled "save" when not saving', () => {
    const output = setup(false);
    expect(output.find('input').props().value).toBe('Save');
  });

  it('Save button is labeled "Saving ..." when saving', () => {
    const output = setup(true);
    expect(output.find('input').props().value).toBe('Saving...');
  });
});

