import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';


describe("Manage Course Page!", () => {
  it('Sets error message when trying to save empty title!', () => {
    const props = {
      actions: {
        saveCourses: () => {
          return Promise.resolve();
        }
      },
      authors: [],
      course: {id: "", watchHref: '', title: '', authorId: '', category: '', length: ''}
    };

    const output = mount(<ManageCoursePage {...props} />);
    const saveBtn = output.find('input').last();
    expect(saveBtn.prop('type')).toBe('submit');
    saveBtn.simulate('click');
    expect(output.state().errors.title).toBe('Title must be at least 5 characters.');
  });

  // it('Save button is labeled "save" when not saving', () => {
  //   const output = setup(false);
  //   expect(output.find('input').props().value).toBe('Save');
  // });
  //
  // it('Save button is labeled "Saving ..." when saving', () => {
  //   const output = setup(true);
  //   expect(output.find('input').props().value).toBe('Saving...');
  // });
});
