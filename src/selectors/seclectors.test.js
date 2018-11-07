import expect from 'expect';
import React from 'react';
import {authorsFormatForDropdown} from './seclectors';

describe("Author Selectors", () => {
  describe("authorsFormatForDropdown", () => {
    it('should return author data formatted for user in a dropdown!', () => {
      const authors = [
        {id: "A1", firstName: "A", lastName: "Text"},
        {id: "D1", firstName: "D", lastName: "Text1"}
      ];
      const expected = [
        {value: "A1", text: "A Text"},
        {value: "D1", text: "D Text1"}
      ];

      expect(authorsFormatForDropdown(authors)).toEqual(expected);
    });
  });
});
