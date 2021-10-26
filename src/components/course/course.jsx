import { Fragment, React, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router";
import ShowImage from "../common/showImage";
import { getSingleCousre } from './../../actions/course';
import { courseIdValidator } from './../../utils/idValidator';

const Course = ({match}) => {
    const course = useSelector(state => state.course)
const {imageUrl} = course

    const dispatch = useDispatch()
    useEffect(()=>{
    if(courseIdValidator(match.params.id))  dispatch(getSingleCousre(match.params.id))
        
    },[])
    if (!courseIdValidator(match.params.id)) return <Redirect to="/404"/>
    return ( 
        <Fragment>
           
            <div className="d-flex gap-3 justify-content-center mx-3" style={{marginTop: "9rem" , height: "40rem" }}>

            <div className="col card d-flex align-items-center p-5">
                <h5 > {course.price} تومان  </h5>
               <h5 className="text-muted my-4">مدت زمان دوره: 3 ساعت</h5>
                <h5>تعداد دانشجو: 123</h5>
                 <button className="w-100 btn btn button p-3 mt-4"> ثبت نام دوره</button></div>
            <div className="col-9 card ">
                <h2 className="text-center text-secondary py-5">{course.title}</h2>
                <ShowImage image={imageUrl} />
               
            </div>
            </div>
            <div className="d-flex mx-3 justify-content-center " dir="rtl">
                <div className="card mt-3 col-12 container-container-fluid">
                   <h4 className=" p-4">توضیحات</h4>
                <sapn className="text-secondary lh-lg p-5">
                    {course.info}
                    </sapn>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Course;


