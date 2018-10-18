import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseFrom from "./CourseFrom";

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };

    this.updateCourseState = this.updateCourseState.bind(this);
  }

  updateCourseState(event) {
    const feild = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[feild] = event.target.value;
    return this.setState({course: course});
  }

  render() {
    const {authors} = this.props;
    return (
      <CourseFrom
        course={this.state.course}
        errors={this.state.errors}
        allAuthor={this.props.authors}
        onChange={this.updateCourseState}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

const mapStateToProps = (state, OwnProps) => {
  let course = {id: "", watchHref: '', title: '', authorId: '', category: '', length: ''};

  const authorsFormatForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course: course,
    authors: authorsFormatForDropdown
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
