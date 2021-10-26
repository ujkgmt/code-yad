import React from "react";
import { Link, withRouter } from "react-router-dom";

const AdminSidebar = ({ location }) => {
    return (
    
            <div className="col-2 bg-secondary  text-white">
            <ul className="nav navbar-nav side-nav  p-5 " style={{ height: "92vh", overflow: "hidden"}}>
                <li
                   
                >
                    <Link to="/dashboard"  className={
                        location.pathname === "/dashboard" ? "text-white active bg-light px-4 py-3 rounded-pill" : "text-white"
                    }>
                        <i className="fa fa-fw fa-dashboard  "></i> داشبورد
                    </Link>
                </li>

                <li className="mt-4">
                    <Link to="/dashboard/courses" className={
                        location.pathname === "/dashboard/courses"
                            ? "active bg-light px-4 py-3 rounded-pill text-white "
                            : "text-white "
                    }>
                        <i className="fa fa-fw fa-graduation-cap "></i> دوره ها
                    </Link>
                </li>
            </ul>
        </div>
       
    );
};

export default withRouter(AdminSidebar);
