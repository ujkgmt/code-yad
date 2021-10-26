import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet";
import { context } from "./../context/context";
import HashLoader from "react-spinners/HashLoader";

const Register = () => {
  const registerContext = useContext(context);
  const {
    fullname,
    setFullname,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    validator,
    handleRegister,
  } = registerContext;

  const styled = {
    display: "block",
    margin: "17rem 20rem",
  };

  return (
    <div className="d-flex justify-content-center" dir="rtl">
      <Helmet>
        <title>کدر یاد | ثبت نام</title>
      </Helmet>
      {loading ? (
        <HashLoader
          color={"#733dd8"}
          loading={loading}
          size={100}
          css={styled}
        />
      ) : (
        <div className="border rounded-3 cart " style={{ height: "47rem" }}>
          <h2 className="text-center mt-5 ">کدر یاد</h2>

          <form className="mb-3 px-5 " onSubmit={handleRegister}>
            <h4 className="mb-5">عضویت در سایت</h4>
            <label
              for="exampleFormControlInput1"
              className="text-muted form-label"
            >
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
                validator.current.showMessageFor("fullname");
              }}
              className="form-control mb-3 "
              id="exampleFormControlInput1"
            />
            {validator.current.message("fullname", fullname, "required|min:5")}
            <label
              for="exampleFormControlInput2"
              className="text-muted form-label"
            >
              {" "}
              ایمیل{" "}
            </label>
            <input
              type="email"
              name="email"
              className="form-control mb-3 "
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validator.current.showMessageFor("email");
              }}
              id="exampleFormControlInput2"
            />
            {validator.current.message("email", email, "required|email")}
            <label
              for="exampleFormControlInput3"
              className="text-muted form-label"
            >
              {" "}
              رمز عبور{" "}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validator.current.showMessageFor("password");
              }}
              className="form-control mb-3 "
              id="exampleFormControlInput3"
            />
            {validator.current.message("password", password, "required|min:5")}
            <p className="my-4">
              با ورود و یا ثبت نام در کدریاد شما
              <NavLink to="/terms">شرایط و قوانین </NavLink>
              استفاده از سرویس های سایت کدریاد را می‌پذیرید.
            </p>
            <button type="submit" className=" btn w-100 p-3 fs-5 button">
              ثبت نام در کدر یاد
            </button>
            <hr />
            <NavLink to="/login">
              <button className="btn btn-outline-info hover w-100">
                ورود به سایت
              </button>
            </NavLink>
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;
