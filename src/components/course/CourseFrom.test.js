import expect from 'expect';
import React from 'react';
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
  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseFrom {...props}></CourseFrom>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
};

describe("CourseFrom via react test utils", () => {
  it('renders form and h1', () => {
    const {output} = setup();
    expect(output.type).toBe('form');

    let [h1] = output.props.children;
    expect(h1.type).toBe('h1');
  });

  it('Save button is labeked "save" when not saving', () => {
    const {output} = setup(false);
    const submitBtn = output.props.children[5];

    expect(submitBtn.props.value).toBe('Save');
  });

  it('Save button is labeked "Saving ..." when saving', () => {
    const {output} = setup(true);
    const submitBtn = output.props.children[5];

    expect(submitBtn.props.value).toBe('Saving...');
  });
});
