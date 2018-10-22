import React, {PropTypes} from 'react';
import CoursesListRow from './CoursesListRow';

const CoursesList = ({course, delCourse}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Delete</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {course.map(itemCourse =>
        <CoursesListRow key={itemCourse.id} itemCourse={itemCourse} delEvent={delCourse}/>
      )}
      </tbody>
    </table>
  );
};

CoursesList.propTypes = {
  course: PropTypes.array.isRequired,
  delCourse: PropTypes.func.isRequired
};


export default CoursesList;
