import React from 'react'
import BreadcrumbArea from './BreadcrumbArea';
import ContactForm from './ContactForm';
import MainHeader from '../About/MainHeader';
import ContactAddress from './ContactAddress';


const contact = () => {
  return (
  
         
    <div className="boxed_wrapper">

            {/* <div class="preloader"></div> */}


            <MainHeader/>  
            <BreadcrumbArea/>
            <ContactAddress/>
            <ContactForm/>


    </div>
  )
}

export default contact