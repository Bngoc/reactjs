import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import CoursesList from "./CoursesList";


const CoursesListRow = ({itemCourse}) => {
  return (
    <tr>
      <td><a href={itemCourse.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/courses/' + itemCourse.id}/>{itemCourse.title}</td>
      <td>{itemCourse.authorId}</td>
      <td>{itemCourse.category}</td>
      <td>{itemCourse.length}</td>
    </tr>
  );
};

CoursesListRow.propTypes = {
  itemCourse: PropTypes.array.isRequired
};
export default CoursesListRow;
