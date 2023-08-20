import React from 'react';
import AwesomeLogo from '../../assets/images/resources/pronto.jpg';

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
                    <a href='index.php'>
                      <img src={AwesomeLogo} alt='Awesome Logo' />
                    </a>
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
                            <a href='index.php'>Home</a>
                          </li>
                          <li>
                            <a href='about.php'>About Us</a>
                          </li>
                          <li>
                            <a href='product.php'>Products</a>
                          </li>
                          <li>
                            <a href='gallery.php'>Gallery</a>
                          </li>
                          <li>
                            <a href='contact.php'>Contact</a>
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

                  <ul className='header-social-links-style1 float-right'>
                    <li
                      className='wow slideInUp'
                      data-wow-delay='0ms'
                      data-wow-duration='1200ms'
                    >
                      <a href='#'>
                        <i className='fa fa-facebook' aria-hidden='true'></i>
                      </a>
                    </li>
                    <li
                      className='wow slideInUp'
                      data-wow-delay='300ms'
                      data-wow-duration='1500ms'
                    >
                      <a href='#'>
                        <i className='fa fa-twitter' aria-hidden='true'></i>
                      </a>
                    </li>

                    <li
                      className='wow slideInUp'
                      data-wow-delay='400ms'
                      data-wow-duration='1500ms'
                    >
                      <a href='#'>
                        <i className='fa fa-linkedin' aria-hidden='true'></i>
                      </a>
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
