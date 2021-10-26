import { Fragment } from "react";
import accantIcon from "./accantIcon.svg";
import coursesIcon from "./coursesIcon.svg"
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
const UserProfile = () => {
    const user = useSelector(state => state.user)
  return (
    <Fragment>
      <section className="row " style={{ marginTop: "9rem" }} dir="rtl">
        <div className="col-3 card p-3">
          <ul className="list-unstyled" dir="rtl">
            <NavLink to="/profile">
              <li className="d-flex align-items-center">
                <img src={accantIcon} alt="" style={{ width: "6%" }} />
                <h5 className="mt-2 ms-3 text-secondary">حساب کاربری من</h5>
              </li>
            </NavLink>
            <NavLink to="/profile">
              <li className="d-flex align-items-center mt-4 text_hover">
                <img src={coursesIcon} alt="" style={{ width: "6%" }} />
                <h5 className="mt-2 ms-3 text-secondary">دوره های من</h5>
              </li>
            </NavLink>
            <NavLink to="/logout"> <h5 className="text-secondary mt-4">خروج از حساب کاربری</h5></NavLink>
          </ul>
        </div>
        <div className="col-8 card me-5 p-3 d-flex justify-content-center">
            <div className=" bg-primary rounded-3 p-3 text-white">
            <h5>
         سلام، {user.fullname} 
            </h5>
            <h5>فایل‌های دوره‌هایی که ثبت نام کرده‌اید در بخش «دوره های من» قابل مشاهده است.</h5>
            </div>
            
        </div>
      </section>
    </Fragment>
  );
};

export default UserProfile;
