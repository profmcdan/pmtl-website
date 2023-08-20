import React from 'react';
import AboutImage from '../../assets/images/resources/about.jpg';

const AboutArea = () => {
  return (
    <>
      <section className='about-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-5 col-lg-5'>
              <div className='about-image-box'>
                <div className='inner-box'>
                  <img src={AboutImage} alt='Awesome Image' />
                </div>
              </div>
            </div>
            <div className='col-xl-7 col-lg-7'>
              <div className='about-text'>
                <div className='sec-title'>
                  <div className='title'>About PMTL</div>
                </div>
                <div className='inner-content'>
                  <div className='text'>
                    <p>
                      We are an indigenous Company providing effective and
                      secure two-way communication to our clients. We develop
                      innovative solutions that meet the needs of our clients.
                    </p>
                  </div>
                  <div className='about-carousel-box owl-carousel owl-theme'>
                    {/* <!--Start Single Box--> */}
                    <div className='single-box'>
                      <div className='icon-holder'>
                        <span className='icon-target'></span>
                      </div>
                      <div className='text-holder'>
                        <h3 style={{ textDecoration: 'none' }}>
                          Pioneering indigenous technology
                        </h3>
                      </div>
                    </div>
                    {/* <!--End Single Box--> */}
                    {/* <!--Start Single Box--> */}
                    <div className='single-box'>
                      <div className='icon-holder'>
                        <span className='icon-target'></span>
                      </div>
                      <div className='text-holder'>
                        <h3 style={{ textDecoration: 'none' }}>
                          Two-way communication solutions provider
                        </h3>
                      </div>
                    </div>
                    {/* <!--End Single Box--> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
