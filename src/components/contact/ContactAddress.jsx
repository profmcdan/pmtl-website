/** @format */

import React from "react";
import { Link } from 'react-router-dom';

const ContactAddress = () => {
  return (
    <>
      <section className="contact-address-area">
            <div className="container">
                <div className="row">
                  
                    <div className="col-xl-4 col-lg-4">
                        <div className="single-contact-address-box">
                            <span className="icon-global"></span>
                            <h3>Visit Our Office</h3>
                            <br/>
                            <p>Signals Barracks, Mile 2, Lagos Nigeria</p>
                        </div>
                    </div>
                  
                    <div className="col-xl-4 col-lg-4">
                        <div className="single-contact-address-box">
                            <span className="icon-support1"></span>
                            <h3>Call Us</h3>
                            <p>+234-1-454-5650 & +234-1-454-5651 <br/><span>Mon - Friday:</span> 9am to 4pm</p>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4">
                        <div className="single-contact-address-box">
                            <span className="icon-shipping-and-delivery"></span>
                            <h3>Mail Us</h3>
                            <p>info@prontotech.ng<br/>enquiries@prontotech.ng</p>
                        </div>
                    </div>
                 
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="bottom-text text-center">
                            <p>Get answers to <Link to={'/about'}>FAQs</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ContactAddress;
