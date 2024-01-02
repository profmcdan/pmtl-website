import React from 'react';
import WorkingImageOne from '../../assets/images/resources/working-1111.jpg';
import WorkingImageFour from '../../assets/images/resources/working-4.jpg';
import pp211 from '../../assets/images/resources/pp211.png';
import pr400 from  '../../assets/images/resources/pr400.png';
import { Link } from 'react-router-dom';

const WorkingArea = () => {
  return (
    <>
      <section className='working-area'>
        <div className='container'>
          <div
            className='sec-title with-text max-width text-center wow fadeInDown'
            data-wow-delay='100ms'
            data-wow-duration='1200ms'
          >
            <div className='title clr-white'>Our Current Products</div>
          </div>
          <div className='row'>
            {/* <!--Start Single Working Box--> */}
            <div className='col-xl-6 col-lg-6'>
              <div
                className='single-working-box wow fadeInDown'
                data-wow-delay='0ms'
              >
                <div className='img-holder'>
                  <div className='inner'>
                    <img src={pp211} alt='Awesome Image' />
                  </div>
                </div>
                <div className='text-holder'>
                  <div className='plus-icon-box'>
                    <span className='icon-plus'></span>
                  </div>
                  <div className='outer-box'>
                    <div className='icon'>
                      <div className='inner'>
                        <div className='box'>
                          <span className='icon-company'></span>
                        </div>
                      </div>
                    </div>
                    <div className='text'>
                      <h3>PMTL 6901</h3>
                      <p>
                        Secure, interactive, user friendly, feature-rich
                        portable device. Two-way communications at its best
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--End Single Working Box--> */}

            {/* <!--Start Single Working Box--> */}
            <div className='col-xl-6 col-lg-6'>
              <div
                className='single-working-box wow fadeInDown'
                data-wow-delay='800ms'
              >
                <div className='img-holder'>
                  <div className='inner'>
                    <img src={pp211} alt='Awesome Image' />
                  </div>
                </div>
                <div className='text-holder'>
                  <div className='plus-icon-box'>
                    <span className='icon-plus'></span>
                  </div>
                  <div className='outer-box'>
                    <div className='icon'>
                      <div className='inner'>
                        <div className='box'>
                          <span className='icon-company'></span>
                        </div>
                      </div>
                    </div>
                    <div className='text'>
                      <h3>PMTL 7630</h3>
                      <p>
                        Portable, easy to use communication device capable of
                        providing secure communication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--End Single Working Box--> */}
          </div>
        </div>
        <div
            className='sec-title with-text max-width text-center wow fadeInDown button'
            data-wow-delay='100ms'
            data-wow-duration='1200ms'
          >
            <Link to={'/product'} className='btn-one'>View More <span className="flaticon-next"></span></Link>
          </div>
      </section>
    </>
  );
};

export default WorkingArea;
