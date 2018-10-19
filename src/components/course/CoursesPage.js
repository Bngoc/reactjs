import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from "../../actions/courseActions";
import {browserHistory} from "react-router";
import CoursesList from './CoursesList';

// const onTitleChange = (event) => {
//   const course = this.state.course;
//   course.title = event.target.value;
//   this.setState({course: course});
// };
//
// const onClickSave = () => {
//   console.log('sssss', this.state.course);
// };

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {title: ""}
    };

    this.onTitleChangeIn = this.onTitleChangeIn.bind(this);
    this.onClickSaveIn = this.onClickSaveIn.bind(this);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  onTitleChangeIn(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSaveIn() {
    // this.props.dispatch(courseActions.createCourse(this.state.course));
    this.props.actions.createCourse(this.state.course);
    // this.props.createCourse(this.state.course);
    //console.log('sssss', this.state.course.title);
  }

  redirectToAddCoursePage(event) {
    browserHistory.push('/course');
  }

  courseRow(courseItems, index) {
    return <div key={index}>{courseItems.title}</div>;
  }

  render() {
    const {course} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        {/*{this.props.course.map(this.courseRow)}*/}
        <input type="button" onClick={this.redirectToAddCoursePage} value="AAAAA" className="btn btn-primary"/>
        <CoursesList course={course}/>
        {/*<h2>Add Course</h2>*/}
        {/*<input type="text" onChange={this.onTitleChangeIn} value={this.state.course.title}/>*/}
        {/*<input type="submit" value="Save" onClick={this.onClickSaveIn}/>*/}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  course: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, OwnProps) => {
  return {
    course: state.courses
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
    // createCourse: course => dispatch(courseActions.createCourse(course))
  };
};

// export default connect(mapStateToProps)(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
