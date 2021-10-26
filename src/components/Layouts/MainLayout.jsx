import React, { Fragment } from 'react';
import { withRouter } from 'react-router';

import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import TopNav from "../../components/Navs/TopNav";
import FrontEnd from '../common/FrontEnd';
import { Helmet } from 'react-helmet';
const MainLayout = (props) => {


    const{pathname} = props.location;
    return (
        <Fragment>
            <Helmet>
                <title>خود آموز کدر یاد</title>
            </Helmet>
                <TopNav />
                {pathname === "/" ? <Header /> : null}
                
            
            <main >
                <div >
                    {props.children}
                </div>
                
            {pathname === "/" ? <FrontEnd /> : null}
            </main>

            <Footer />
        </Fragment>
    );
}

export default withRouter(MainLayout) ;