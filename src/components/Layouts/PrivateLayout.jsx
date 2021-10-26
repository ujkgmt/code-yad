import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import AdminTopNav from "../admin/AdminTopNav";
import AdminSidebar from "../admin/AdminSidebar";
const PrivateLayout = ({ children }) => {
  const user = useSelector((state) => state.user);
  return (
    <Fragment>
      <div id="wrapper" dir="rtl" style={{overflow:"hidden"}}>
        <Helmet>
          <title>کدر یاد | داشبورد</title>
        </Helmet>

        <nav className="navbar navbar-dark bg-dark d-flex ">
          <div className="container-fluid">
            <Link className="navbar-brand " to="/dashboard">داشبورد کدر یاد</Link>
           
        <AdminTopNav user={user} />
          </div>
        </nav>
        <div className="row">

        <AdminSidebar />
       
      <div id="page-wrapper" className="col-10 bg-light">{children}</div>

        </div>
      </div>
    </Fragment>
  );
};

export default PrivateLayout;
