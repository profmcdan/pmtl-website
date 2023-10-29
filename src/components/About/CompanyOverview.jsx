import React from 'react'
import Team from '../../assets/images/resources/PMTL_Gate.jpg'
import Factory from '../../assets/images/resources/factory.png'
import Tech from '../../assets/images/resources/tech1.png'
import ISO from '../../assets/images/resources/iso.jpg'


const CompanyOverview = () => {
    const styles ={
        float: 'right',
    };
  return (
   <>
      {/* <!--Start Company Overview Area--> */}
  <section className="company-overview-area">
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <div className="intro-box clearfix">
                    <div className="sec-title">
                       
                        <div className="title">Pronto Microsystems Technologies Limited</div>
                             <div className="text-box">

                                 <p>We focus on a wide range of secure communications solutions.</p>
                            </div>

                    
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-12">
                <div className="history-content-box clearfix">
                        {/* <!--Start Single History Content--> */}
                        <div className="single-history-content">
                            <div className="img-box">
                                <div className="inner">
                                    <img src={Team} alt="Awesome Image"/>
                                </div>
                            </div>
                            <div className="text-box">
                                <div className="inner">
                               
                                    <div className="text">
                                        <p>Pronto Microsystems Technologies Limited is a Nigerian Army own registered company that was established on 22 April  and situated in Mile 2 Signal Barracks.We are a company that provides seamless interoperable voice and data tranmission solutions using the DMR Standard. Our hybrid brand of radios offers efficient voice communication on digital and analog channels, and can be programmed to work with any DMR Repeater  .
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--End Single History Content--> */}
               
                </div>
            </div>
        </div>
       
        <div className="row">
            <div className="col-xl-6 col-lg-6">
                 <br/><br/><br/>
                 <div className="about-carousel-box owl-carousel owl-theme">
                            {/* <!--Start Single Box--> */}
                            <div className="single-box">
                                <div className="icon-holder">
                                    <span className="icon-target"></span>
                                </div>
                                <div className="text-holder">
                                    
                                    <h3 style={{textDecoration:'none'}}>Pioneering indigenous technology</h3>
                                </div>
                            </div>
                    </div>
            </div>
                <div className="col-xl-6 col-lg-6">
                    <br/><br/><br/>
                        <div className="about-carousel-box owl-carousel owl-theme"> 
                             <div className="single-box">
   
                                <div className="icon-holder">
                                    <span className="icon-target"></span>
                                </div>
                                <div className="text-holder">
                                  
                                    <h3 style={{textDecoration:'none'}}>Two-way communication solutions provider</h3>
                                </div>
                              </div>
                        </div>
                </div>

            </div>
     </div>
    </section>

{/* <!--End Single Box--> */}

{/* <!--Start Single Box--> */}
<section className="testimonial-area">
    <div className="container">
        <div className="row">
        
                <div className="col-xl-6 col-lg-6">
                    <img src= {Factory}/>
                </div>

                <div className="col-xl-6 col-lg-6"> 
                   <div className="sec-title">
                        <div className="title">Our Factory</div>
                    </div>
                        <p>We are committed to delivering products of not only the highest quality and reliability but also ones that meet the unique requirements of our customers. Our state-of-art factory employ innovative processes that guarantee high quality products.</p>
                    </div>
                </div> 
        </div> 
     


 {/* <!--End Company Overview Area--> */}
<br/>

    <div className="container">
        <div className="row">
       
                <div className="col-xl-6 col-lg-6"> 
                    <div className="sec-title">
                        <div className="title"> Reliable solutions</div>
                    </div>
                        <p>We will continue to leverage our team of highly skilled professionals to help organisations with on-demand, mission-critical communications in all scenarios, from daily command and control to emergency response, disaster relief, law enforcement and other essential activities. </p>
                </div> 
                <div className="col-xl-6 col-lg-6">
                    <img src= {Tech} alt='Tech picture'/>
                </div>
        </div> 
    </div>

</section>
<section className="faq-area">
   <div className="container">
        <div className="row">
       
                <div className="col-xl-12 ">
                 
                     <div className="sec-title">
                        <div className="title">PMTL Quality Policy</div>
                       <img src= {ISO} style={{ styles, width:'50%', height:'50%'}}/>
                       
                    </div>
                
                 <p>Pronto Microsystems Technologies Limited (PMTL) provides seamless interoperable 
                   voice and data transmission solutions using the Digital Mobile Radio (DMR), 
                   Standard. Our hybrid brand of radios offers efficient voice communication 
                   on digital and analog channels and can be programmed to work with any DMR Repeater. 
                   We will continue to leverage our team of highly skilled professionals to help 
                   organisations with on-demand, mission-critical communications in all scenarios, 
                   from daily command and control to emergency response, disaster relief, law enforcement
                   and other essential activities.</p>
                  <p>The PMTL Quality Management System covers all processes, personnel and equipment 
                    utilized for the provision of services to our clients and how we impact other interested parties.</p>
                   <p> It is the policy of PMTL to provide our customers with products, services and outcomes meeting the 
                    agreed requirements in accordance with the communicated details and pricing. PMTL is committed to 
                    achieving customer satisfaction using quality procedures which will be operated to meet or exceed 
                    the requirements of ISO 9001:2015.</p>
                    <p>The Managing Director, Management and Staff are responsible for Quality Control, especially through the 
                      Quality Management System, seeking improvement through constant review, with suppliers, vendors and sub-contractors 
                      being encouraged to conform. The Quality Manager is charged with the responsibility of maintaining the documented 
                      system, for monitoring its effectiveness, implementation, and for training the company’s personnel in quality management techniques. 
                      The authority of the Quality Manager to oversee all PMTL’s QMS processes and to recommend and/or initiate improvements is fully 
                      supported by Top Management. Pronto Microsystems Technologies Limited is committed to complying with all applicable laws, regulations, 
                      and policies of the countries in which we operate and the customers we service.</p>
                      <p>This policy forms the framework from which all process quality objectives are formulated throughout the organization. 
                        They are continuously monitored and revised for their suitability to meet customer and company expectations.</p>
                       <p>All employees are personally responsible for upholding and enhancing the quality of PMTL’s performance. 
                         We accomplish this by an extensive knowledge of their work, tasks, and awareness of the processes.</p>
                         <p>The confidence of our customers in the quality services provided by PMTL must be continuously reinforced by our dedication
                           to maintain and seek methods of improving every element of our operations that contributes to total customer satisfaction.</p>
                       
                 
                </div>
        </div>
  </div>
</section>
{/* <!--End Company Overview Area--> */}

{/* <!--Start faq area--> */}
<section className="faq-area">
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <div className="faq-content-box">
                    <div className="accordion-box">


                        {/* <!--Start single accordion box--> */}
                        <div className="accordion accordion-block">
                             <h2>Frequently Asked Questions</h2>
                            <div className="accord-btn">
                                <h4>Are your radios digital or analog radios?</h4>
                            </div>
                            <div className="accord-content">
                                <p>Our radios are hybrid radios. They are capable of being programmed in digital and analog modes.</p>
                            </div>
                        </div>
                        {/* <!--End single accordion box--> */}

                        
                        {/* <!--Start single accordion box--> */}
                        <div className="accordion accordion-block">
                            <div className="accord-btn active">
                                <h4>How many zones can be programmed on PMTL DMR radios?</h4>
                            </div>
                            <div className="accord-content collapsed">
                                <p>Up to 64 zones can be programmed, with 16 channels per zone. This will give a maximum of 1024 channels.</p>
                            </div>
                        </div>
                        {/* <!--End single accordion box--> */}

                        
                        {/* <!--Start single accordion box--> */}
                        <div className="accordion accordion-block">
                            <div className="accord-btn">
                                <h4>How many channels does your radio have?</h4>
                            </div>
                            <div className="accord-content">
                                <p>PMTL 6901 has 1024 channels and PMTL 7630 has 32 channels</p>
                            </div>
                        </div>
                        {/* <!--End single accordion box--> */}


                        {/* <!--Start single accordion box--> */}
                        <div className="accordion accordion-block">
                            <div className="accord-btn">
                                <h4>What is the battery life cycle?</h4>
                            </div>
                            <div className="accord-content">
                                <p>20hrs 5-5-90 duty cycle</p>
                            </div>
                        </div>
                        {/* <!--End single accordion box--> */}

                        {/* <!--Start single accordion box--> */}
                        <div className="accordion accordion-block">
                            <div className="accord-btn">
                                <h4>What operating system does the programming software work on?</h4>
                            </div>
                            <div className="accord-content">
                                <p>Windows 7 and later versions</p>
                            </div>
                        </div>

                        {/* <!--End single accordion box--> */}

                        {/* <!--Start single accordion box--> */}
                        <div className="accordion accordion-block">
                            <div className="accord-btn">
                                <h4>Is a USB driver required in order to program the radio?</h4>
                            </div>
                            <div className="accord-content">
                                <p>Yes, A USB Bulk Driver must be installed in order for the CPS to communicate with the radio.</p>
                            </div>
                        </div>
                        {/* <!--End single accordion box--> */}

                        {/* <!--Start single accordion box--> */}
                        <div className="accordion accordion-block">
                            <div className="accord-btn">
                                <h4>Are your radios DMR compliant?</h4>
                            </div>
                            <div className="accord-content">
                                <p>Yes, our radios are DMR Tier II compliant </p>
                            </div>
                        </div>
                        {/* <!--End single accordion box--> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
 </section>
 {/* <!--End faq area--> */}
  
</>
   

  )
}

export default CompanyOverview