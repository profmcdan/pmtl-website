import React from 'react';
import SocialLinks from './SocialLinks';

const FooterBottomArea = () => {
  return (
    <>
      <div className='copyright-container'>
        <SocialLinks /> 
              <div className='footer-bottom-content flex-box-two'>
                <div className='copyright-text'>
                  <p>
                    Copyright 2021 | Pronto Microsystems Technologies Limited
                  </p>
                </div>
              </div>
      </div>
    </>
  );
};

export default FooterBottomArea;
