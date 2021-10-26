
import { getCourse } from './../services/courseService';

// export const getSingleCousre = (courseId)=>{
//     return async dispatch =>{
//         const {data} = await getCourse(courseId);
        
//         await dispatch({type:"GET_COURSE", payload: data.course})
        
//     }
// } 
export const getSingleCousre = courseId => {
    return async dispatch => {
        const { data } = await getCourse(courseId);
        await dispatch({ type: "GET_COURSE", payload: data.course });
    };
};