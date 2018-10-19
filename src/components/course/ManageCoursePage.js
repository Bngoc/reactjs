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
    this.saveCourseState = this.saveCourseState.bind(this);
    console.log('constructor', this.props);
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourseState(event) {
    event.preventDefault();
    this.props.actions.saveCourses(this.state.course).then(() => this.redirect());
  }

  redirect() {
    this.context.router.push('/courses');
  }

  /*
  // // Life cycle
  componentWillMount() {
     // Thực hiện một số tác vụ, hàm này chỉ thực hiện 1 lần duy nhất

   }

   componentDidMount() {
     // Thực hiện một số tác vụ, hàm này chỉ thực hiện 1 lần duy nhất
     // Hàm này rất hữu dụng khi bạn làm việc thêm với Map, bởi vì map chỉ render được
     // khi có node (id) trong DOM
     // Nói tóm lại, hàm này được gọi để thông báo component đã tồn tại trên DOM,
     // từ đó các thao tác trên DOM sẽ có thể thực hiện bình thường đối với component này
   }

   componentWillUnmount() {
     // Hàm này thực hiện một lần duy nhất, khi component sẽ unmount
     // Hàm này hữu dụng khi bạn cần xoá các timer không còn sử dụng
   }

   componentWillReceiveProps(nextProps) {
     // Hàm này thực hiện liên tục mỗi khi props thay đổi
     // (1) Sử dụng để thay đổi trạng thái (state) của component phụ thuộc props
     // (2) Sử dụng các kết quả, khởi tạo biến có tính chất async. Ví dụ: Khởi tạo Google Map Api, đây là quá trình async,
     // do vậy, bạn không thể biết được khi nào khởi tạo xong, thì khi khởi tạo xong có thể truyền xuống component thông qua
     // props, và từ đó bạn có thể khởi tạo các dịch vụ khác.
   }

   shouldComponentUpdate(nextProps, nextState) {
     // Hàm này thực hiện khi state và props thay đổi
     // Hàm này sẽ trả về kết quả true/false, bạn sẽ cần sử dụng đến hàm này để xử lý xem có cần update component không
   }

   componentWillUpdate(nextProps, nextState) {
     // Hàm này thực hiện dựa vào kết quả của hàm trên (shouldComponentUpdate)
     // Nếu hàm trên trả về false, thì React sẽ không gọi hàm này
   }

   componentDidUpdate(prevProps, prevState) {
     // Hàm này thực hiện sau khi component được render lại, từ kết quả của componentWillUpdate
   }

   //// MOUNTING: componentWillMount => render => componentDidMount
   //// UPDATING: componentWillReceiveProps => shouldComponentUpdate => componentWillUpdate => render => componentDidUpdate
   */

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', this.state.course, nextProps);
    if (this.props.course.id != nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  render() {
    return (
      <div>
        <CourseFrom
          course={this.state.course}
          errors={this.state.errors}
          allAuthor={this.props.authors}
          onChange={this.updateCourseState}
          onSave={this.saveCourseState}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// Pull in the react router content
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

const getCourseId = (courses, id) => {
  const course = courses.filter(itemCourse => itemCourse.id == id);
  return (course.length) ? course[0] : null;
};

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps', state, ownProps);
  let courseId = ownProps.params.id; // from the path course/:id
  let course = {id: "", watchHref: '', title: '', authorId: '', category: '', length: ''};

  if (courseId && state.courses.length > 0) {
    course = getCourseId(state.courses, courseId);
  }

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
  console.log('mapDispatchToProps');
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
