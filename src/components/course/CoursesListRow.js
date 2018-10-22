import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CoursesListRow = ({itemCourse, delEvent}) => {
  return (
    <tr>
      <td><a href={itemCourse.watchHref} target="_blank">Watch</a></td>
      <td>
        <button type="button" value={itemCourse.id} onClick={delEvent}>Delete</button>
      </td>
      <td><Link to={'/course/' + itemCourse.id}>{itemCourse.title}</Link></td>
      <td>{itemCourse.authorId}</td>
      <td>{itemCourse.category}</td>
      <td>{itemCourse.length}</td>
    </tr>
  );
};

CoursesListRow.propTypes = {
  itemCourse: PropTypes.object.isRequired,
  delEvent: PropTypes.func.isRequired
};
export default CoursesListRow;
