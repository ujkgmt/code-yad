import { createContext } from "react";

export const dashContext = createContext({

  currentCourse: {},
  setSearch: () => {},
  openNewCourseDialog: () => {},
  openEditCourseDialog: () => {},
  openDeleteCourseDialog: () => {},
  courseData: [],
  filterdCourses: [],
  sortCoursesAsc: () => {},
  sortCoursesDes: () => {},
});
