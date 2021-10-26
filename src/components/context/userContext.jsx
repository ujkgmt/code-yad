import React, { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { useDispatch } from "react-redux";
import { context } from "./context";
import { loginUser, registerUser } from "../../services/userservice";
import { decodeToken } from "../../utils/decodeToken";
import { addUser } from "../../actions/user";
import { withRouter } from "react-router";
import { messageError, messageSuccess } from "../../utils/message";
const UserContext = ({ children, history }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [, forceUpdate] = useState();

  const dispatch = useDispatch();

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی می باشد",
        min: "مقدار وارد شده نباید کمتر از 5 کاراکتر باشد",
        email: "ایمیل وارد شده صحیح نمی باشد",
      },
      element: (message) => <div style={{ color: "red" }}>{message}</div>,
    })
  );
  const reset = () => {
    setFullname("");
    setEmail("");
    setPassword("");
    setLoading();
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const user = { email, password };

    try {
      if (validator.current.allValid()) {
        setLoading(true);
        const { status, data } = await loginUser(user);
        if (status === 200) {
        setLoading(false);
          messageSuccess(".ورود موفقیت آمیز بود");
          localStorage.setItem("token", data.token);
          dispatch(addUser(decodeToken(data.token).user));
          history.replace("/");
          reset();
          
        }
      } else {
        validator.current.showMessages();
        forceUpdate(0);
      }
    } catch (ex) {
      console.log(ex);
      messageError(".مشکلی پیش آمده");
      setLoading(false);
    }
  };
  const handleRegister = async (event) => {
    event.preventDefault();
    const user = {
      fullname,
      email,
      password,
    };

    try {
      if (validator.current.allValid()) {
        setLoading(true);
        const { status } = await registerUser(user);
        if (status === 201) {
        setLoading(false);
          messageSuccess(".کاربر با موفقیت ساخته شد");
          history.push("/login");
        
        }
      } else {
        validator.current.showMessages();

        forceUpdate(1);
      }
    } catch (ex) {
      messageError(".موارد وارد شده صحیح نمی باشد");
      setLoading(false);

      console.log(ex);
    }
  };

  return (
    <context.Provider
      value={{
        fullname,
        setFullname,
        email,
        setEmail,
        password,
        setPassword,
        validator,
        loading,
        handleLogin,
        handleRegister,
      }}
    >
      {children}
    </context.Provider>
  );
};
export default withRouter(UserContext);
