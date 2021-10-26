import { messageSuccess } from "../utils/message";
import { deleteCourse, getCourses, newCourse } from "./../services/courseService";

export const getAllCourses = () => {
  return async (dispatch) => {
    const { data } = await getCourses();
    await dispatch({ type: "INIT", payload: data.courses });
  };
};

export const createNewCourse = (course) => {
  return async (dispatch, getState) => {
    const { data, status } = await newCourse(course);
    if (status === 201) messageSuccess("دوره با موفقیت ساخته شد");
    await dispatch({
      type: "ADD_COURSE",
      payload: [...getState().courses, data.course],
    });
  };
};

export const handleCourseUpdate = (courseId, updatedCourse) => {
  return async (dispatch, getState) => {
    const courses = [...getState().courses];
    const updatedCourses = [...courses];
    const courseIndex = updatedCourses.findIndex(
      (course) => course.id === courseId
    );
    let course = updatedCourses[courseIndex];
    course = { ...Object.fromEntries(updatedCourses) };
    updatedCourses[courseIndex] = course
console.log(course);
    try {
      const {data, status}= await updatedCourse(courseId, updatedCourse)
   if(status ===200){
     messageSuccess("دوره با موفقیت ویرایش شد.")
  await dispatch({
    type: "UPDATE_COURSE",payload: [...updatedCourses]
  })
  console.log(data);
    }
    } catch (ex) {
      await dispatch({
        type: "UPDATE_COURSE",payload: [...courses]
      })
    }
  };
};
export const handleCourseDelete = courseId => {
  return async (dispatch, getState) =>{
    const courses = [...getState().courses]
    const filteredCourses =courses.filter(course => course._id !== courseId)
 
    try {
      await dispatch({type : "DELETE_COURSE" , payload:[...filteredCourses]})
   const {status} =await deleteCourse(courseId)

   if(status === 200) messageSuccess("دوره با موفقیت حذف گردید.")
    } catch (ex) {
      await dispatch({type : "DELETE_COURSE" , payload:[...courses]})
      
    }
  }
}
