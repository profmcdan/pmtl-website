import React from 'react';
import FooterImage from '../../assets/images/footer/footer-logo-1.png';

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
                  <a href='index.php'>
                    <img src={FooterImage} alt='Awesome Logo' />
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
                      +234-1-454-5650 <br /> +234-1-454-5651
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
                  <li>
                    <a href='product.php'>PMTL 6901</a>
                  </li>
                  <li>
                    <a href='product.php'>PMTL 7630</a>
                  </li>
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
                  src='images/footer/iso-logo.jpg'
                  style={{ paddingLeft: '10px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBody;
