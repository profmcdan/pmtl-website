/** @format */

import React, { useState } from "react";
import { render } from '@react-email/render';
import sendgrid from '@sendgrid/mail';
import EmailTemplate from "./EmailTemplate";
import * as process from 'process';

const ContactForm = () => {
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    sendgrid.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setContact((prevContact) => ({...prevContact, [name]: value}))
    
    }
    
    const handleContactFormSubmit = e => {
       e.preventDefault()
       const emailHtml = render(<EmailTemplate 
        title='Contact Us' 
        message={contact.message}
        senderEmail={contact.email}
        senderName={contact.name} />);

        const emailOptions = {
            from: 'noreply@prunedge.com',
            to: 'amodubashir17@gmail.com',
            subject: 'Enquiry',
            html: emailHtml,
        };

       //sendgrid.send(emailOptions);
        console.log(contact)
    }

  return (
    <>
    
        <section className="contact-info-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12">
                        <div className="contact-form">
                            <div className="sec-title with-text">
                                <p>Do you have enquiries</p>
                                <div className="title">Send us a Message</div>
                                
                            </div>
                            <div className="inner-box">
                                <form className="default-form" onSubmit={handleContactFormSubmit} >
                               
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="input-box">
                                                <input type="text" id="name" 
                                                onChange={handleInputChange}
                                                name="name" 
                                                placeholder="Full Name" 
                                                required="" /> 
                                                <div className="icon">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        
                                        <div className="col-md-12">
                                            <div className="input-box">
                                                <input type="text" 
                                                id= "phone" 
                                                onChange={handleInputChange}
                                                name="phone" 
                                                placeholder="Phone" />
                                                <div className="icon">
                                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="input-box">
                                                <input  type="email" 
                                                id= "email" 
                                                onChange={handleInputChange}
                                                name="email"  
                                                placeholder="Email Address" 
                                                required="" />
                                                <div className="icon">
                                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="input-box">
                                                <textarea id= "message" 
                                                name="message" 
                                                onChange={handleInputChange}
                                                placeholder="Your Message..." 
                                                required=""></textarea>
                                                <div className="icon envelop">
                                                    <i className="fa fa-comment" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="button-box">
                                                <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
                                                <button className="btn-one" type="submit" id="btnContactUs"data-loading-text="Please wait...">Submit<span className="flaticon-next"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>                      
                                <div id="success_message" style={{width: '100%', height:'100%', display:'none'}}> <h3>Sent your message successfully!</h3> </div>

                                <div id="error_message" style={{width: '100%', height:'100%', display:'none'}}> <h3>Error</h3> Sorry there was an error sending your form. </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12 clearfix">
                        <div className="contact-form-image-box">
                            <img src="images/resources/contact.png" alt="Awesome Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ContactForm;
