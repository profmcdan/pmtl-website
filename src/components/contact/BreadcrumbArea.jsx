import React from 'react'
import banner from '../../assets/images/resources/banner.jpg'
import { Link } from 'react-router-dom';

const BreadcrumbArea = () => {
  return (
    <>
       {/* <!--Start breadcrumb area--> */}
        <section className="breadcrumb-area" style={{backgroundImage:`url(${banner})`}}>
        <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="inner-content-box clearfix">
                            <div className="title-s2 text-center">
                                <span>Contact Us</span>
                                <h2 style={{color: 'white'}}>Get in touch with us</h2>
                            </div>
                            <div className="breadcrumb-menu float-left">
                                <ul className="clearfix">
                                    <li><Link to={'/'}>Home</Link></li>
                                    <li><Link to={'/contact'}>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--End breadcrumb area--> */}
    </>
  )
}

export default BreadcrumbArea