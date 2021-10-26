import React from "react";
import { Link } from "react-router-dom";

const AdminTopNav = ({ user }) => {
    return (
        <div className="dropdown me-5">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fa fa-user"></i> {user.fullname}
        </button>
        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
          <li><Link className="dropdown-item active" to="/profile">پروفایل</Link></li>
          <li><Link className="dropdown-item" to="/">مشاهده سایت</Link></li>
          
          <li><hr className="dropdown-divider"/></li>
          <li><Link className="dropdown-item" to="/">خروج</Link></li>
        </ul>
      </div>
    );
};

export default AdminTopNav;
