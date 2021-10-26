import React, { useState } from 'react';
import { dashContext } from './dashContext';


const AdminContext = ({courses, children}) => {
  const [currentCourse, setCurrentCourse] =useState({})

    return ( 
    <dashContext.Provider value>

    </dashContext.Provider>
        );
}
 
export default AdminContext;