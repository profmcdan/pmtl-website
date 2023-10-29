import React from 'react'
import Pronto from '../../assets/images/resources/pronto.jpg'
import { Link } from 'react-router-dom';

const mainHeader = () => {
  return (
   <>
   {/* <!--Start Main Header--> */}
<header className="main-header header-style2 stricky">
    <div className="inner-container clearfix">
        <div className="logo-box-style2 float-left">
            <a href="index-2.html">
                <img src={Pronto} alt="Awesome Logo"/>
            </a>
        </div>
        <div className="main-menu-box float-right">
            <nav className="main-menu style2 clearfix">
                <div className="navbar-header clearfix">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                </div>
                <div className="navbar-collapse collapse clearfix">
                    <ul className='navigation clearfix'>
                            <li >
                                <Link to={"/"} >Home</Link>
                            </li>
                            <li className='current'>
                                <Link to={"/about"}>About Us</Link>
                            </li>
                            <li >
                            <Link to={"/product"}>Products</Link>
                            </li>
                            <li>
                            <Link to={"/gallery"}>Gallery</Link>
                            </li>
                            <li>
                                <Link to={"/contact"}>Contact</Link>
                            </li>
                   </ul>
                </div>
            </nav>
            <div className="mainmenu-right style2">
                
                
                <div className="button">
                    <a className="btn-one" href="#">Contact us<span className="flaticon-next"></span></a>
                </div>
            </div>
        </div>
    </div>
</header>
{/* <!--End Main Header--> */}
   </>
  )
}

export default mainHeader