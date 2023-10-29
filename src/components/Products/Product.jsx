import React from 'react'
import ProductMainHeader from './ProductMainHeader'
import StartBreadCrumbArea from './StartBreadCrumbArea'
import StartServiceStyle from './StartServiceStyle'
const Product = () => {
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
                        <li><a href="product.php">Products</a></li>
                        <li><a href="#">Brochure</a></li>
                        <li><a href="about.php">FAQ</a></li>
                        </ul>
                    <ul className="topbar-social-links">
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
        {/* <!-- End Top Bar style2 --> */}

        {/* <!--Start Main Header--> */}
        <ProductMainHeader />
        {/* <!--End Main Header--> */}

        {/* <!--Start breadcrumb area--> */}
        {/* <StartBreadCrumbArea/> */}
        {/* <!--End breadcrumb area--> */}

        {/* <!--Start services style2 Service Page--> */}
         <StartServiceStyle />
    </div>
       
    )
}

export default Product