import React from 'react';
import Header from './Header';
import Highlight from './Highlight';
import AboutArea from './AboutArea';
import WorkingArea from './WorkingArea';
import WorkingProcessArea from './WorkingProcessArea';
import HomeSlider from './HomeSlider';
import {SliderImages} from './SliderImages';
import { Suspense } from 'react';
import loader from './loader';

const Home = () => {
  return (
    <div className='boxed_wrapper'>
\    

      <section className='top-bar-style1'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12 col-lg-12 col-md-12'></div>
          </div>
        </div>
      </section>
      
     

  
  <Header />
      <HomeSlider banner={SliderImages}/>
      {/* <MainSlider /> */}
      <Highlight />
      <AboutArea />
      <WorkingArea />
      <WorkingProcessArea />

      
    </div>
  );
};

export default Home;
