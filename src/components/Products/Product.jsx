import React from 'react'
import ProductMainHeader from './ProductMainHeader'
import StartServiceStyle from './StartServiceStyle'
const Product = () => {
  return (
    <div className="boxed_wrapper">

        {/* <div className="preloader"></div> */}

        {/* <!-- Start Top Bar style2 --> */}
      
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