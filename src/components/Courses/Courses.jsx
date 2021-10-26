import React from "react";

import "./course.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { paginate } from './../../utils/paginate';
import ShowImage from "../common/showImage";

const Courses = () => {
  const courses = useSelector((state) => state.courses);

  const indexCourses = paginate(courses, 1, 5);


  return (
    <div id="Course" className="container justify-content-center " dir="rtl">
      <header className="text-center d-flex justify-content-center my-5 ">
        <h3 className="course-border " style={{marginTop: "4rem"}}>دوره های آموزشی آکادمی کدر یاد</h3>
      </header>
      <div className="row ">
        {indexCourses.map((course) => {
          return(
          <div className="col-4 mb-5" dir="rtl" key={course._id}>
            
            <div className=" rounded-5 shadow ">
            <Link to={`course/${course._id}`}>
               <ShowImage image={course.imageUrl} styles={{width: "27.8rem"}}/>
              </Link>
              <div className="card-body ">
                <Link to={`course/${course._id}`}>
                <h5 className="card-title link-dark">{course.title}</h5>
                <p className="card-text text-muted">مدت : 20 ساعت</p>
                  <p className="purple">مشاهده دوره</p> <span></span>
                </Link>
                <p className="float-end mt-5">{course.price} تومان</p>
              </div>
              <button
                type="button"
                className="btn w-25 py-3 mt-5y w-50 m-2 button"
              >
                ثبت نام دوره
              </button>
            </div>
          </div>
       ) })}
      </div>
    </div>
  );
};
export default Courses;
