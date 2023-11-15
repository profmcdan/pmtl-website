import React from 'react';
import { Link } from 'react-router-dom';

const Highlight = () => {
  return (
    <>
      <section className='highlights-area'>
        <div className='container'>
          <div className='row'>
            {/* <!--Start single highlight box--> */}
            <div className='col-xl-4 col-lg-4'>
              <div
                className='single-highlight-box text-center wow fadeInUp'
                data-wow-delay='0ms'
                data-wow-duration='1200ms'
              >
                <div className='icon-holder'>
                  <span className='icon-shop'></span>
                </div>
                <div className='inner-content'>
                  <div className='text'>
                    <h3>Sales</h3>
                    <p>
                      Our Sales Team will help you choose the communications
                      solution that is right for your needs
                    </p>
                  </div>
                  <a className='btn-one' href='contact.php'>
                    Read More<span className='flaticon-next'></span>
                  </a>
                </div>
              </div>
            </div>
            {/* <!--End single highlight box--> */}
            {/* <!--Start single highlight box--> */}
            <div className='col-xl-4 col-lg-4'>
              <div
                className='single-highlight-box text-center wow fadeInUp'
                data-wow-delay='200ms'
                data-wow-duration='1200ms'
              >
                <div className='icon-holder'>
                  <span className='icon-scheme'></span>
                </div>
                <div className='inner-content'>
                  <div className='text'>
                    <h3>Products</h3>
                    <p>
                      {' '}
                      Our products offer clients communications solutions to
                      transform their organisations.
                    </p>
                  </div>
                  <Link className='btn-one' to={"/product"}> Read More<span className='flaticon-next'></span></Link>
                </div>
              </div>
            </div>
            {/* <!--End single highlight box--> */}
            {/* <!--Start single highlight box--> */}
            <div className='col-xl-4 col-lg-4'>
              <div
                className='single-highlight-box text-center wow fadeInUp'
                data-wow-delay='400ms'
                data-wow-duration='1200ms'
              >
                <div className='icon-holder'>
                  <span className='icon-cupboard'></span>
                </div>
                <div className='inner-content'>
                  <div className='text'>
                    <h3>Support</h3>
                    <p>
                      We provide technical support to maximize product
                      efficiency
                    </p>
                  </div>
                  <Link className='btn-one' to={"/product"}> Read More<span className='flaticon-next'></span></Link>
                </div>
              </div>
            </div>
            {/* <!--End single highlight box--> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Highlight;
