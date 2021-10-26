import React from "react";
import { Fragment } from "react";
import EditCourseModal from "./modals/EditCourseModal";
import NewCourseModal from "./modals/NewCourseModal";
import DeleteCourseModal from './modals/DeleteCourseModal';
const CoursesTable = ({courses}) => {
 
  return (
    <Fragment >
      <div className="me-2">
      <div className="alert alert-secondary text-center " role="alert">
  لیست دوره ها 
</div>
<div className="row" > 

<input className="col-5 form-control w-50" type="text"  placeholder="  اسم دوره . . ." style={{ direction: "rtl" }}/>
<button className="btn btn-success col-2 ms-1" >  جستوجو دوره</button>

</div>
<NewCourseModal />
          <table className="table table-secondary mt-2">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">عنوان دوره</th>
                <th scope="col">تصویر دوره</th>
                <th scope="col">قیمت دوره(تومان)</th>
                <th scope="col"> ویرایش دوره</th>
                <th scope="col">دوره حذف</th>
              </tr>
            </thead>
            <tbody>
            {courses.map((course)=>(
              
                  
                  <tr>
                  <th scope="row"></th>
                  <td>{course.title}</td>
                  <td><a className="btn btn-primary " href={course.imageUrl} target="_blank">مشاهده تصویر</a></td>
                  <td>{course.price === 0 ? "رایگان" : `${course.price}`}</td>
                  <td><EditCourseModal course={course}/></td>
                  <td><DeleteCourseModal/></td>
                </tr>
              
            ))}
            </tbody>
          </table>
        
      </div>
    </Fragment>
  );
};

export default CoursesTable;
