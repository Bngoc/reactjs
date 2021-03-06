import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import CoursesPage from "./components/course/CoursesPage";
import ManageCoursePage from "./components/course/ManageCoursePage"; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" components={App}>
    <IndexRoute components={HomePage}/>
    <Route path="about" components={AboutPage}/>
    <Route path="courses" components={CoursesPage}/>
    <Route path="courses/#" components={CoursesPage}/>
    <Route path="course" components={ManageCoursePage}/>
    <Route path="course/:id" components={ManageCoursePage}/>
  </Route>
);
