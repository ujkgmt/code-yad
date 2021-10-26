import http from "./httpservice";
import config from "./config.json";
import axios from "axios";

export const getCourses = () => {
  return http.get(`${config.localhost}/api/courses`);
};

export const getCourse = (courseId) => {
  return http.get(`${config.localhost}/api/course/${courseId}`);
};
export const newCourse = (course) => {

  return axios.post(`${config.localhost}/api/course`, course);
};

export const deleteCourse = (courseId) => {
  return http.delete(`${config.localhost}/api/course/${courseId}`);
};

export const updateCourse = (courseId, course) => {
  return http.put(`${config.localhost}/api/course/${courseId}`, course);
};
