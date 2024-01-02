import React from 'react';
import AwesomeLogo from '../../assets/images/resources/pronto.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='main-header header-style1'>
        <div className='header-upper-style1'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='inner-container clearfix'>
                  <div className='logo-box-style1 float-left'>
                    <Link to={"/"} ><img src={AwesomeLogo} alt='Awesome Logo' /></Link>
                  </div>
                  <div className='main-menu-box float-right'>
                    <nav className='main-menu clearfix'>
                      <div className='navbar-header clearfix'>
                        <button
                          type='button'
                          className='navbar-toggle'
                          data-toggle='collapse'
                          data-target='.navbar-collapse'
                        >
                          <span className='icon-bar'></span>
                          <span className='icon-bar'></span>
                          <span className='icon-bar'></span>
                        </button>
                      </div>
                      <div className='navbar-collapse collapse clearfix'>
                        <ul className='navigation clearfix'>
                          <li className='current'>
                            <Link to={"/"} >Home</Link>
                          </li>
                          <li>
                            <Link to={"/about"}>About Us</Link>
                          </li>
                          <li>
                          <Link to={"/product"}>Products</Link>
                          </li>
                          {/* <li>
                          <Link to={"/gallery"}>Gallery</Link>
                          </li> */}
                          <li>
                            <Link to={"/contact"}>Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='header-lower-style1'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='inner-content clearfix'>
                  <ul className='header-contact-info float-left'>
                    <li>
                      <div className='single-item'>
                        <div className='icon'>
                          <span className='icon-maps-and-location'></span>
                        </div>
                        <div className='text'>
                          <h3>Signals Barracks Mile 2,</h3>
                          <p>Lagos Nigeria</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='single-item'>
                        <div className='icon'>
                          <span className='icon-phone'></span>
                        </div>
                        <div className='text'>
                          <h3>+234-1-454-5650</h3>
                          <p>Mon - Friday: 9am to 4pm</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='single-item'>
                        <div className='icon'>
                          <span className='icon-mail'></span>
                        </div>
                        <div className='text'>
                          <h5>info@prontotech.ng</h5>
                          <p>Contact Us</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
