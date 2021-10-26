import React, { Fragment } from "react";

import "./css/style.css";
import { Helmet } from 'react-helmet';
const NotFound = () => {
  return (
    <Fragment>
          <Helmet>
        <title>کدر یاد | صفحه پیدا نشد </title>
      </Helmet>
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>Oops!</h1>
          </div>
          <h2 style={{color :"red"}}>404 - صفحه پیدا نشد</h2>
          <h4>
           صفحه ای که به دنبال آن هستید ممکن است نام آن تغییر کرده باشد یا موقتاً در دسترس نباشد
          </h4>
          <a href="/">برو به صفحه اصلی</a>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
