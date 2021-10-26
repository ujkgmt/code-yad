import React from "react";
import { NavLink } from "react-router-dom";
import "./TopNav.css";
import signUpIcon from "./signUpIcon.svg";
import cartIcon from "./cartIcon.svg"
import logo from "./logo.ico";
import { isEmpty } from "lodash";
import { useSelector } from 'react-redux';

const TopNav = () => {
 const user = useSelector(state => state.user)
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top bg-light mz-5 shadow-lg  "
      dir="rtl"
    >
      <div className="container">
        <div className="container d-flex">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav my-3 fs-4 ">
              <NavLink className="navbar-brand " to="/">
                <img className="w-25" src={logo} alt="" />
              </NavLink>
              <NavLink className="nav-link fs-5 " aria-current="page" to="/">
                خانه
              </NavLink>
              <NavLink className="nav-link fs-5" to="/Courses">
                دوره های آموزشی
              </NavLink>
              <NavLink className="nav-link fs-5" to="/blog">
                بلاگ ها
              </NavLink>
              <NavLink className="nav-link fs-5" to="/about">
                درباره ما
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse navbar-collapse me-5">
        <NavLink
          to="/cart"
          className="nav-icon mx-4 mt-3"
          style={{ color: "#733dd8" }}
        >
          <img src={cartIcon} alt="cart" style={{width: "1.8rem"}}/> 
          <p> سبد</p>
        </NavLink>
        {user.isAdmin ? <NavLink
          to="/dashboard"
          className="nav-icon d-grid ms-4 "
          style={{ color: "#733dd8" }}
        >
         
         <p className="text-center">پنل ادمین </p>
        </NavLink>: null}
{!isEmpty(user) ? (<section className="ms-3 d-flex cursor-pointer" style={{ cursor:"pointer"}}>
  <img src="https://fronthooks.ir/images/account-icon.png" alt="" className=" rounded-circle " style={{width: "35%"}}/>
  <span ><svg stroke="currentColor" fill="#733dd8" stroke-width="0" viewBox="0 0 24 24" class="text-primary hidden sm:block" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path></g></svg></span>
<NavLink to="/logout">خروج</NavLink>
</section>): (
  <section className="d-flex">
<NavLink to="/login" className="nav-icon text-center mt-3" style={{ color: "#733dd8" ,width: "1.8rem"}}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="24"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            ></path>
          </svg>
          <p className="me-1">ورود</p>
        </NavLink>
        <NavLink
          to="/register"
          className="nav-icon d-grid ms-4 "
          style={{ color: "#733dd8" }}
        >
          <img src={signUpIcon} alt="signup" className= "ms-2" style={{width: "1.8rem"}}  />
          <p className="mb-0">عضویت</p>
        </NavLink>
       
        </section>
        )
        }


{/* 
         */}
      </div>
     
    </nav>
  );
};

export default TopNav;
