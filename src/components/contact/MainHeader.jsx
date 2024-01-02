/** @format */

import React from "react";
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <>
      {/* <!--Start Main Header--> */}
      <header className="main-header header-style2 stricky">
        <div className="inner-container clearfix">
          <div className="logo-box-style2 float-left">
            <Link to={'/'}>
              <img src="images/resources/pronto.jpg" alt="Awesome Logo" />
            </Link>
          </div>
          <div className="main-menu-box float-right">
            <nav className="main-menu style2 clearfix">
              <div className="navbar-header clearfix">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="navbar-collapse collapse clearfix">
                <ul className="navigation clearfix">
                  <li>
                    <Link to={'/'}>Home</Link>
                  </li>
                  <li>
                    <Link to={'/about'}>About Us</Link>
                  </li>
                  <li>
                    <Link to={'/product'}>Products</Link>
                  </li>
                  <li className='current'>
                    <Link to={'/contact'}>Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
           
          </div>
        </div>
      </header>
      {/* <!--End Main Header--> */}
    </>
  );
};

export default MainHeader;
