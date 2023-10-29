import React from 'react'
import MainHeader from './MainHeader';
import BreadcumbArea from './BreadcumbArea';
import CompanyOverview from './CompanyOverview';
import { Link } from 'react-router-dom';
const about = () => {
  return (
   
    <div className="boxed_wrapper"> 
     {/* <div className="preloader"></div> */}

        {/* <!-- Start Top Bar style2 --> */}
        <section className="top-bar-style2">
        <div className="top-style2 clearfix">
            <div className="top-style2-left">
            
                <p><span className="icon-music"></span>Make Enquiries</p>
                <ul>
                    <li>+234-1-454-5650, +234-1-454-5651</li>
                    <li>info@prontotech.ng</li>
                    <li>Mon - Fri: 9am to 4pm</li>
                </ul>
            </div>
            <div className="top-style2-right">
                    <ul className="top-right-menu">
                    <li><Link to={"/product"}>Products</Link></li>
                    <li><a href="#">Brochure</a></li>
                    <li><Link to={"/about"}>FAQ</Link></li>
                    </ul>
                <ul className="topbar-social-links">
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
        </section>
        <MainHeader/>
        <BreadcumbArea/>
        <CompanyOverview />
    </div> 
 
  )
}

export default about