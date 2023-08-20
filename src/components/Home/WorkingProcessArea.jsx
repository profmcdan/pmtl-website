import React from 'react';

const WorkingProcessArea = () => {
  return (
    <>
      <section className='working-process-area'>
        <div className='container'>
          <div className='sec-title text-center'>
            <div className='title'>Our Work process</div>
          </div>
          <div className='row'>
            {/* <!--Start Single Working Process--> */}
            <div
              className='col-xl-4 col-lg-4 wow fadeInUp'
              data-wow-delay='100ms'
              data-wow-duration='1500ms'
            >
              <div className='single-working-process text-center'>
                <div className='top-box'>
                  <span>01</span>
                </div>
                <div className='inner'>
                  <h3>Research & Development</h3>
                  <p>Nurturing ideas that power our business solutions</p>
                  <div className='icon-holder'>
                    <span className='icon-productive'></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--End Single Working Process--> */}
            {/* <!--Start Single Working Process--> */}
            <div
              className='col-xl-4 col-lg-4 wow fadeInUp'
              data-wow-delay='300ms'
              data-wow-duration='1500ms'
            >
              <div className='single-working-process text-center'>
                <div className='top-box'>
                  <span>02</span>
                </div>
                <div className='inner'>
                  <h3>Manufacturing</h3>
                  <p>
                    Employing efficient processes to produce standardized
                    products
                  </p>
                  <div className='icon-holder'>
                    <span className='icon-document'></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--End Single Working Process--> */}
            {/* <!--Start Single Working Process--> */}
            <div
              className='col-xl-4 col-lg-4 wow fadeInUp'
              data-wow-delay='500ms'
              data-wow-duration='1500ms'
            >
              <div className='single-working-process text-center'>
                <div className='top-box'>
                  <span>03</span>
                </div>
                <div className='inner'>
                  <h3>Distribution</h3>
                  <p>
                    Leveraging our logistics channels to reach all our esteemed
                    clients
                  </p>
                  <div className='icon-holder'>
                    <span className='icon-kitchen'></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--End Single Working Process--> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkingProcessArea;
