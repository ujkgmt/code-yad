import React from "react";
import userIcon from "./user-shape.svg"
import coursesIcon from "./mortarboard.svg"
const Dashboard = ({ courses }) => {
    return (
        <div className="container-fluid" style={{ marginTop: "5em" }}>
        <div className="row">
            <div className="col-lg-3 col-md-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-xs-3">
                            </div>
                            <div className="col-xs-9 bg-primary p-5 text-white text-left text-center rounded-pill">
                            <i className="fa fa-graduation-cap fa-5x"></i>
                                <div>تعداد دوره ها</div>
                                <div className="display-5">{courses.length}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="alert-info alert text-center mt-5" >
              به داشبورد کدر یاد خوش آمدید 
            </div>
        </div>
    </div>
    )
};

export default Dashboard;
