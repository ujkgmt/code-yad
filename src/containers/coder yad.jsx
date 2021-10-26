import React, { Fragment, useEffect } from "react";

import { Switch, Route, Redirect } from "react-router";

import Courses from "../components/Courses/Courses";
import MainLayout from "../components/Layouts/MainLayout";
import Login from "../components/Login/Login";
import Register from "./../components/register/Register";
import Course from "./../components/course/course";
import { useDispatch, useSelector } from "react-redux";

import { addUser, claerUser } from "./../actions/user";
import { decodeToken } from "./../utils/decodeToken";
import Logout from "./../components/Login/logout";
import UserProfile from "./../components/user profile/user_profile";
import Blogs from "./../components/blogs/Blogs";
import About from "./../components/about/About";
import { divide, isEmpty } from "lodash";
import UserContext from "../components/context/userContext";
import NotFound from "./../components/common/404/NotFound";
import PrivateLayout from "../components/Layouts/PrivateLayout";
import Dashboard from "../components/admin/Dashboard";
import CoursesTable from "../components/admin/CoursesTable";

const CoderYad = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const courses = useSelector((state) => state.courses);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = decodeToken(token);
 
    if (token) {
      const dateNow = Date.now() / 1000;
      console.log(decodedToken);
      if (decodedToken.exp < dateNow) {
        localStorage.removeItem("token");
        dispatch(claerUser());
      } else {
        dispatch(addUser(decodedToken.user));
      }
    }
  }, []);

  return (
    <Switch>
      <Route path={["/dashboard"]}>
        <PrivateLayout>
          <Route path="/dashboard/courses" exact component={()=> <CoursesTable courses={courses}/>}/>
          <Route
            path="/dashboard"
            exact
           component={()=> !isEmpty(user)? (<Dashboard courses={courses}/>): (<Dashboard courses={courses}/>) }
          />
        </PrivateLayout>
      </Route>

      <Route path={["/"]}>
        <MainLayout>
          <Switch>
            <Route
              path="/login"
              render={() =>
                isEmpty(user) ? (
                  <UserContext>
                    <Login />
                  </UserContext>
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/logout"
              render={() => (isEmpty(user) ? <Redirect to="/" /> : <Logout />)}
            />
            <Route
              path="/register"
              render={() =>
                isEmpty(user) ? (
                  <UserContext>
                    <Register />
                  </UserContext>
                ) : (
                  <Redirect to="/Login" />
                )
              }
            />
            <Route path="/course/:id" component={Course} />
            <Route path="/Courses" component={Courses} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/blog" component={Blogs} />
            <Route path="/about" component={About} />
            <Route path="/" exact component={Courses} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default CoderYad;
