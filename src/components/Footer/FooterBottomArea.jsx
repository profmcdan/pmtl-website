import React from 'react';

const FooterBottomArea = () => {
  return (
    <>
      <section className='footer-bottom-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='footer-bottom-content flex-box-two'>
                <div className='copyright-text'>
                  <p>
                    Copyright 2021 | Pronto Microsystems Technologies Limited
                  </p>
                </div>
                {/* <!--
                            <div className="footer-social-links float-right">
                                <span>We are On:</span>
                                <ul className="sociallinks-style-one">
                                    <li className="wow slideInUp" data-wow-delay="0ms" data-wow-duration="1200ms">
                                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    </li>
                                    <li className="wow slideInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    </li>
                                    
                                    <li className="wow slideInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                          --> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='scroll-to-top-style2 scroll-to-target' data-target='html'>
        <span className='fa fa-angle-up'></span>
      </div>
    </>
  );
};

export default FooterBottomArea;
