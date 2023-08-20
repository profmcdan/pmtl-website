import React from 'react';

const Slogan = () => {
  return (
    <>
      <section className='slogan-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='inner-content flex-box-two fix'>
                <div className='title float-left'>
                  <h3>For enquiries about our products and services </h3>
                </div>
                <div className='button float-right'>
                  <a className='btn-one' href='contact.php'>
                    Contact us<span className='flaticon-next'></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slogan;
