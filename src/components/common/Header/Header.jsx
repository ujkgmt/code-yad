import React, { Fragment } from 'react';
import banner from "./banner.png";
import "./header.css";

// import "header.css";
const Header = () => {

  return (
    <div style={{marginTop:"5rem"}}>

      <div className="overflow-hidden row container align-items-center " >
        <div className="col-5 text-center me-5" style={{ marginTop: "5rem" }}>
          <h2 className="fw-bolder mb-5">دوره های آموزشی آکادمی کدر یاد</h2>
          <h4>برنامه نویسی را سریع، آسان و پروژه محور یاد بگیر</h4>
          <button type="button" className="btn  fs-5 my-5 p-3 w-50 button"> <a href="#Course" className="text-decoration-none text-white">مشاهده دوره ها</a> </button>
        </div>

        <div className="col-6 ">
          <img className="img-main  " src={banner} alt="dd" style={{width:"130%"}}/>
        </div>
      </div>
      <div className="row info-learn  text-center overflow-hidden" style={{ marginRight: "5rem" }}>

        <div className="col-2"><svg xmlns="http://www.w3.org/2000/svg" id="ic_refund" width="48" height="48" viewBox="0 0 48 48"><g id="Group_151549" data-name="Group 151549" transform="translate(-1 -1)"><path id="Path_1050" data-name="Path 1050" d="M51.18,9.245A18.713,18.713,0,0,0,40.539,3.913L39.1,4.735,41.04,6.421a16.45,16.45,0,1,1-8.731.643,1.193,1.193,0,1,0-.8-2.248A18.86,18.86,0,1,0,51.18,9.245Z" transform="translate(-12.993 3.814)" fill="#733dd8" stroke="#733dd8" strokeMiterlimit="10" strokeWidth="0.5" /><path id="Path_1051" data-name="Path 1051" d="M42.157,1.476A1.193,1.193,0,0,0,40.47-.212l-4.4,4.535a1.193,1.193,0,0,0,0,1.688L39.926,11.5a1.193,1.193,0,0,0,1.688,0,.956.956,0,0,0,.17-1.211l-3.24-5.01Z" transform="translate(-12.054 3.563)" fill="#ffba21" stroke="#ffba21" strokeMiterlimit="10" strokeWidth="0.5" /></g><text id="تومان" transform="translate(24 27)" fill="#ffba21" fontSize="8" fontFamily="Dana-Black, Dana" fontWeight="800"><tspan x="-10.16" y="0">تومان</tspan></text><rect id="Rectangle_140667" data-name="Rectangle 140667" width="48" height="48" fill="none" /></svg>
          <p className="text-muted">تضمین بازگشت وجه</p>
          <p>اگه راضی نبودید تا ۱۵ روز فرصت دارید انصراف بدید</p>

        </div>
        <div className="col-2"><svg xmlns="http://www.w3.org/2000/svg" id="ic_quality_large" width="48" height="48" viewBox="0 0 48 48"><rect id="Rectangle_140666" data-name="Rectangle 140666" width="48" height="48" fill="none" /><g id="Iconly_Two-tone_Shield_Done" data-name="Iconly/Two-tone/Shield Done" transform="translate(8.5 5.498)"><g id="Shield_Done" data-name="Shield Done"><path id="Stroke_1" data-name="Stroke 1" d="M29.23,4.749A2.177,2.177,0,0,1,30.688,6.8V20.351a15.563,15.563,0,0,1-3.806,10.2,15.543,15.543,0,0,1-4.41,3.4l-7.116,3.844L8.228,33.945a15.533,15.533,0,0,1-4.416-3.4A15.566,15.566,0,0,1,0,20.343V6.8A2.177,2.177,0,0,1,1.458,4.749L14.622.123a2.181,2.181,0,0,1,1.444,0Z" fill="none" stroke="#733dd8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" /><path id="Stroke_3" data-name="Stroke 3" d="M0,4.01,3.784,7.8,11.58,0" transform="translate(10.145 14.327)" fill="none" stroke="#ffba21" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" /></g></g></svg>
          <p className="text-muted">تضمین کیفیت</p>
          <p>بهترین پشتیبانی و به روز ترین سطح آموزش موجود در ایران رو دریافت می‌کنید</p>
        </div>
        <div className="col-2"><svg xmlns="http://www.w3.org/2000/svg" id="ic_mentor" width="48" height="48" viewBox="0 0 48 48"><rect id="Rectangle_140827" data-name="Rectangle 140827" width="48" height="48" fill="none" /><g id="Add_User" data-name="Add User" transform="translate(4 5)"><path id="Stroke_1" data-name="Stroke 1" d="M14.8,0C6.819,0,0,1.207,0,6.042s6.775,6.086,14.8,6.086c7.984,0,14.8-1.209,14.8-6.042S22.831,0,14.8,0Z" transform="translate(0 25.872)" fill="none" stroke="#733dd8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" /><path id="Stroke_3" data-name="Stroke 3" d="M9.488,18.976A9.488,9.488,0,1,0,0,9.488,9.454,9.454,0,0,0,9.488,18.976Z" transform="translate(5.315)" fill="none" stroke="#733dd8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" /><path id="Star" d="M6.45.278,7.913,3.22a.5.5,0,0,0,.379.276l3.274.473a.5.5,0,0,1,.333.193.486.486,0,0,1-.054.652L9.472,7.109a.481.481,0,0,0-.143.443L9.9,10.79a.5.5,0,0,1-.412.563A.548.548,0,0,1,9.16,11.3L6.244,9.774a.49.49,0,0,0-.469,0L2.838,11.311a.513.513,0,0,1-.68-.208.5.5,0,0,1-.051-.316l.568-3.238a.5.5,0,0,0-.143-.442L.147,4.812a.5.5,0,0,1,0-.7l0,0a.574.574,0,0,1,.285-.14l3.275-.473a.513.513,0,0,0,.379-.277L5.547.278A.5.5,0,0,1,5.836.026a.5.5,0,0,1,.385.028A.518.518,0,0,1,6.45.278Z" transform="translate(28.25 10.346)" fill="none" stroke="#ffba21" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" /></g></svg>

          <p className="text-muted">همراهی مربی</p>
          <p>با مربی‌های حرفه‌ای و با حوصله رفع اشکال می‌کنید</p>
        </div>
        <div className="col-2">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.48 16.9995V26.3003L29.8999 30.2417" stroke="#FFB121" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32.5991 8.59556C11.8701 0.71256 0.0160356 22.1012 10.372 36.1952" stroke="#733DD8" strokeWidth="3" strokeLinecap="round" />
            <path d="M5.41188 35.7859C5.10319 35.7923 4.809 35.9181 4.59114 36.1369C4.37329 36.3557 4.24874 36.6504 4.24368 36.9591C4.23863 37.2678 4.35345 37.5665 4.56403 37.7923C4.7746 38.0181 5.06452 38.1534 5.37283 38.1699L11.6915 38.1817C11.8482 38.1844 12.004 38.1563 12.1498 38.0988C12.2957 38.0413 12.4288 37.9556 12.5415 37.8467C12.6542 37.7377 12.7443 37.6076 12.8067 37.4638C12.8691 37.32 12.9026 37.1653 12.9052 37.0085L14.1739 30.4234C14.1793 30.1071 14.0587 29.8016 13.8389 29.5741C13.619 29.3466 13.3178 29.2158 13.0015 29.2104C12.7783 29.195 12.5567 29.2583 12.3754 29.3893C12.1941 29.5204 12.0644 29.7109 12.0091 29.9277L10.6587 35.7392L5.41188 35.7859Z" fill="#FFB121" stroke="#FFB121" strokeWidth="0.5" strokeMiterlimit="10" />
            <path d="M15.9999 40.246C36.7289 48.129 48.583 26.7404 38.227 12.6464" stroke="#733DD8" strokeWidth="3" strokeLinecap="round" />
            <path d="M43.2038 13.0443C43.5203 13.0497 43.826 12.9291 44.0536 12.7091C44.2812 12.4891 44.4121 12.1877 44.4175 11.8712C44.4229 11.5546 44.3023 11.249 44.0823 11.0213C43.8623 10.7937 43.5608 10.6629 43.2443 10.6575L36.9257 10.6457C36.7689 10.643 36.6132 10.6711 36.4673 10.7286C36.3215 10.7861 36.1884 10.8718 36.0757 10.9808C35.963 11.0897 35.8728 11.2198 35.8104 11.3636C35.748 11.5074 35.7146 11.6621 35.712 11.8189L34.4445 18.4097C34.4392 18.726 34.5597 19.0315 34.7796 19.259C34.9995 19.4864 35.3007 19.6173 35.617 19.6227C35.8399 19.6372 36.0609 19.5732 36.2415 19.4417C36.4222 19.3103 36.5511 19.1198 36.6059 18.9032L37.9563 13.0917L43.2038 13.0443Z" fill="#FFB121" stroke="#FFB121" strokeWidth="0.5" strokeMiterlimit="10" />
          </svg>
          <p className="text-muted">ویدئو های کوتاه و با کیفیت</p>
          <p>هر مبحث در قالب یک جلسه کوتاه و کاربردی آماده شده است</p>
        </div>
        <div className="col-2"><svg xmlns="http://www.w3.org/2000/svg" id="ic_mouse_medium" width="48" height="48" viewBox="0 0 48 48"><path id="Shape" d="M0,0H48V48H0Z" fill="none" />
          <g id="Group_151559" data-name="Group 151559" transform="translate(2 3)"><path id="Path" d="M0,0V13.741H12.13A13.842,13.842,0,0,0,0,0Z" transform="translate(23.595 2.141)" fill="none" stroke="#733dd8" strokeLinejoin="round" strokeWidth="3" /><path id="Path-2" data-name="Path" d="M0,6.931a13.862,13.862,0,0,0,27.725,0V1H0V6.931Z" transform="translate(8 19.347)" fill="none" stroke="#733dd8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path id="Path-3" data-name="Path" d="M12.13,0A13.842,13.842,0,0,0,0,13.741H12.13V0Z" transform="translate(8 2.141)" fill="none" stroke="#ffba21" strokeLinejoin="round" strokeWidth="3" />
            <path id="Path_1038" data-name="Path 1038" d="M16,17.416v4" transform="translate(5.862 9.706)" fill="none" stroke="#ffba21" strokeLinecap="round" strokeWidth="3" />
          </g></svg>
          <p className="text-muted">کاربردی و پروژه محور</p>
          <p > با کار روی پروژه های واقعی، بازار رو از نزدیک لمس کنید</p>
        </div>
      </div>
    </div>

  );
}

export default Header;