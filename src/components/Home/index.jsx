import React from 'react';
import Header from './Header';
import MainSlider from './MainSlider';
import Highlight from './Highlight';
import AboutArea from './AboutArea';
import WorkingArea from './WorkingArea';
import WorkingProcessArea from './WorkingProcessArea';

const Home = () => {
  return (
    <div className='boxed_wrapper'>
      {/* <div className='preloader'></div> */}

      <section className='top-bar-style1'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12 col-lg-12 col-md-12'></div>
          </div>
        </div>
      </section>

      <Header />
      <MainSlider />
      <Highlight />
      <AboutArea />
      <WorkingArea />
      <WorkingProcessArea />
    </div>
  );
};

export default Home;
