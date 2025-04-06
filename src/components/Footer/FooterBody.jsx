import React from 'react';
import { webSiteImage } from '../../images';
import { Link } from 'react-router-dom';
const FooterBody = () => {
  return (
    <footer className='footer-area'>
      <div
        className='footer-shape-bg wow slideInRight'
        data-wow-delay='300ms'
        data-wow-duration='2500ms'
      ></div>
      <div className='container'>
        <div className='row'>
          {/* <!--Start single footer widget--> */}
          <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
            <div className='single-footer-widget marbtm50'>
              <div className='contact-info-box'>
                <div className='footer-logo'>
                  <a href='/'>
                    <img src={webSiteImage.pronto} alt='Awesome Logo' />
                  </a>
                </div>

                <h6 style={{ color: 'white' }}>
                  Pronto Microsystems <br />
                  Technologies Limited
                </h6>
                <br />
                <ul>
                  <li>
                    <h6>Address</h6>
                    <p>
                      Signals Barracks, Mile 2<br /> Lagos, Nigeria
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!--End single footer widget--> */}
          <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
            <div className='single-footer-widget marbtm50'>
              <div className='contact-info-box'>
                <ul>
                  <li>
                    <h6>Phone</h6>
                    <p>
                      020-1454-5650 <br /> 020-1454-5651
                      <br /> <span>Mon - Friday:</span> 9am to 4pm
                    </p>
                  </li>
                  <li>
                    <h6>Email</h6>
                    <p>
                      enquiries@prontotech.ng
                      <br />
                      info@prontotech.ng
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!--Start single footer widget--> */}
          <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
            <div className='single-footer-widget marbtm50'>
              <div className='title'>
                <h3>Products</h3>
              </div>
              <div className='services-links'>
                <ul>
                  {/* <li>
                    <Link to={'/pp311'}>PP 311</Link>
                  </li>
                  <li>
                    <Link to={'/pp211'}>PP 211</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          {/* <!--End single footer widget--> */}

          {/* <!--Start single footer widget--> */}
          <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
            <div className='single-footer-widget marbtm50'>
              <br />
              <br />
              <div className='services-links'>
                <img
                  
                  src={webSiteImage.iso} alt='iso-image'
                  style={{ paddingLeft: '10px' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='copyright-container'>
            <div className='footer-bottom-content flex-box-two'>
                <div className='copyright-text'>
                  <p>
                    Copyright 2023 | Pronto Microsystems Technologies Limited
                  </p>
                </div>
              </div>
          </div>
      </div>
    </footer>
  );
};

export default FooterBody;
