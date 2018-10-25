import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from "../../actions/courseActions";
import {browserHistory} from "react-router";
import CoursesList from './CoursesList';
import toastr from "toastr";

// const onTitleChange = (event) => {
//   const course = this.state.course;
//   course.title = event.target.value;
//   this.setState({course: course});
// };

// const onClickSave = () => {
//   console.log('sssss', this.state.course);
// };

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {title: ""}
    };

    // Call es4
    this.onTitleChangeIn = this.onTitleChangeIn.bind(this);
    this.onClickSaveIn = this.onClickSaveIn.bind(this);
    // this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    // this.deleteCourseStateEvent = this.deleteCourseStateEvent.bind(this);
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

  redirectToAddCoursePage = (event) => {
    browserHistory.push('/course');
  };

  // courseRow = (courseItems, index) => {
  //   return <div key={index}>{courseItems.title}</div>;
  // }

  deleteCourseStateEvent = (event) => {
    this.setState({
      saving: true
    });
    const course = this.props.course.filter(itemCourse => itemCourse.id == event.target.value);
    if (course && course.length > 0) {
      this.props.actions.deleteCourses(course[0])
        .then(() => this.notify())
        .catch((err) => {
          toastr.error(err);
          this.setState({
            saving: true
          });
        });
    }
  };

  notify = () => {
    this.setState({
      saving: false
    });
    toastr.success('Course deleted!');
  };

  render() {
    const {course} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        {/*{this.props.course.map(this.courseRow)}*/}
        <input type="button" onClick={this.redirectToAddCoursePage} value="AAAAA" className="btn btn-primary"/>
        <CoursesList course={course} delCourse={this.deleteCourseStateEvent}/>
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

const mapStateToProps = (state, ownProps) => {
  let courseId = ownProps.params.id; // from the path course/:id
  // let course = {id: "", watchHref: '', title: '', authorId: '', category: '', length: ''};
  if (courseId && state.courses.length > 0) {
    // course = getCourseId(state.courses, courseId);
  }

  return {
    course: state.courses
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // actions: bindActionCreators(courseActions, dispatch)
    actions: bindActionCreators({...courseActions}, dispatch)
    // createCourse: course => dispatch(courseActions.createCourse(course))
  };
};

// export default connect(mapStateToProps)(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

// ES6
// stage-2 || "es2015",
//https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
