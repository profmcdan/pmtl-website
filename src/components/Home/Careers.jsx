import React from 'react';
import Header from './Header';
import HomeSlider from './HomeSlider';
import {SliderImages} from './SliderImages';
import loader from './loader';
import CareerHeader from './CareerHeader';

const Careers = () => {
  return (
    <div className='boxed_wrapper'>    
      <section className='top-bar-style1'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12 col-lg-12 col-md-12'></div>
          </div>
        </div>
      </section>
      <HomeSlider banner={SliderImages}/>
       <CareerHeader />
    </div>
  );
};

export default Careers;
