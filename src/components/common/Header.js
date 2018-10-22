import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from "./LoadingDots";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";

const Header = ({loading, courses}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home </IndexLink>
      {" | "}
      <IndexLink to="/about" activeClassName="active">About</IndexLink>
      {" | "}
      <IndexLink to="/courses" activeClassName="active">Course({courses.length})</IndexLink>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  courses: PropTypes.array.isRequired
};

export default Header;
