import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Login.css";
import { Helmet } from "react-helmet";
import { context } from "./../context/context";
import HashLoader  from 'react-spinners/HashLoader';

const Login = () => {
  const loginContext = useContext(context);

  const { email, setEmail, password, setPassword, handleLogin, validator, loading } =
  loginContext;
  const styled = {
    display: "block",
    margin: "17rem 20rem"
  
  }
    return (
      <div className="d-flex justify-content-center" dir="rtl">
      <Helmet>
        <title>کدر یاد | ورود </title>
      </Helmet>
{loading ? (
  
  <HashLoader color={"#733dd8"} loading={loading}  size={100} css={styled}/>
): (

      <form className="border rounded-3 cart " onSubmit={(e) => handleLogin(e)}>
        <h2 className="text-center mt-5 ">کدر یاد</h2>

        <div className="mb-3 px-5 ">
          <h4 className="mb-5">ورود به سایت</h4>
          <label
            htmlFor="exampleFormControlInput1"
            className="text-muted form-label"
          >
            لطفا ایمیل خود را وارد کنید
          </label>
          <input
            type="email"
            className="form-control mb-2"
            id="exampleFormControlInput1"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validator.current.showMessageFor("email");
            }}
          />
          {validator.current.message("email", email, "required|email")}

          <label
            htmlFor="exampleFormControlInput2"
            className="text-muted form-label"
          >
            رمز ورود خود را وارد کنید
          </label>
          <input
            type="password"
            className="form-control mb-2"
            id="exampleFormControlInput2"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validator.current.showMessageFor("password");
            }}
          />
          {validator.current.message("password", password, "required|min:5")}
          <p className="my-4">
            با ورود و یا ثبت نام در کدریاد شما
            <NavLink to="/terms">شرایط و قوانین </NavLink>
            استفاده از سرویس های سایت کدریاد را می‌پذیرید.
          </p>
          <button type="submit" className=" btn w-100 p-3 fs-5 button">
            ورود به کدر یاد
          </button>
          <hr />
          <NavLink to="/register">
            <button className="btn btn-outline-info  w-100 hover">
              ثبت نام
            </button>
          </NavLink>
        </div>
      </form>
)}
    </div>
  );
};

export default Login;
