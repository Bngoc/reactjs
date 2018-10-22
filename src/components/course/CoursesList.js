import React, {PropTypes} from 'react';
import CoursesListRow from './CoursesListRow';
import toastr from "toastr";


const CoursesList = ({course}) => {

  return (
    <table className="table">
      <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {course.map(itemCourse =>
        <CoursesListRow key={itemCourse.id} itemCourse={itemCourse}/>
      )}
      </tbody>
    </table>
  );
};

CoursesList.propTypes = {
  course: PropTypes.array.isRequired
};


export default CoursesList;
