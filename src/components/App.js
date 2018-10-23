import React, {PropTypes} from 'react';
import Header from "./common/Header";
import {connect} from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} courses={this.props.course}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  course: PropTypes.array
};

const mapStateToProps = (state, OwnProps) => {
  return {
    loading: state.ajaxCallsInProgress > 0,
    course: state.courses
  };
};

export default connect(mapStateToProps)(App);
