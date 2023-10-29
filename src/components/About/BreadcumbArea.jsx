import React from 'react'
import BackgroundImage from '../../assets/images/resources/About-us-1.jpg'

const BreadcumbArea = () => {
  return (
   <>
   {/* <!--Start breadcrumb area--> */}
<section className="breadcrumb-area" style={{backgroundImage:`url(${BackgroundImage})`}}>
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <div className="inner-content clearfix">
                    
                    <div className="breadcrumb-menu float-left">
                        <ul className="clearfix">
                            <li><a href="index.php">Home</a></li>
                            <li><a href="about.php">About</a></li>
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

export default BreadcumbArea