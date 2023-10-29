import React from 'react'
import PP211 from '../../assets/images/resources/PP211.jpeg'

function PP311Details() {
  return (
    <>
    <section className="services-style2-service-page">
    <div className="container">
                        
                        <div className="row">
                                <div className="col-xl-4">
                                        <div className="title">
                                            <h2 className="align-centre">PP311 </h2>
                                        </div>
                                            <div className="img-holder">
                                            <img src={PP211} alt="Awesome Image"/>
                                            </div> 
                                    <br/><br/>
                                    <div className="single-service-sidebar">
                                        <div className="single-sidebar">
                                            <ul className="service-pack-download">
                                                <li className="clearfix">
                                                    <div className="title-holder">
                                                        <a href="assets/NA7630-setup.7z">Radio Programming<span>(7630)</span></a>
                                                    </div>
                                                    <div className="icon-holder">
                                                        <i className="fa fa-download" aria-hidden="true"></i>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
            
                                </div>
                                
                                <div className="col-xl-4">
                                <br/>
                                        <div className="title">
                                            <h2 className="align-centre">Features</h2>
            
                                        </div>
                                        <div className="services-links">
                                            <ul>
                                                <li>Interoperable with other DMR devices</li>
                                                <li>Analog and Digital Modes</li>
                                                <li>Private, Group and All Call Options</li>
                                                <li>Long Battery Life</li>
                                                <li>DMO True 2-Time Slots</li>
                                                <li>IP67 Protection</li>
                                                <li>Voice Recording</li>
                                                <li>Automatic Roaming (Programmable)</li>
                                                <li>Man-down/Lone-Worker</li>
                                                <li>GPS/GLONASS</li>
                                                <li>LCD/Full Keyboard</li>
                                                <li>Advanced Encryption with RC4 Technology</li>
                                            </ul>
                                        </div>   
                                
                                        <br/>
                                        <a className='btn-one' href='contact.php'>
                                Read More<span className='flaticon-next'></span>
                            </a>
                                </div>
                                
            
                            <div className="col-xl-4">
                                    <br/>
                                        <div className="title">
                                            <h2 className="align-centre">Technical Details</h2>
            
                                        </div>
            
                                    <div className="services-links">
                                            <ul>
                                                <li>Power Output H:5W, L:1W</li>
                                                <li>Frequency Range: <br/>VHF:136-174MHz, UHF:400-480MHz</li>
                                                <li> Channels: 512 </li>
                                                <li>Battery Capacity: Real 2000mAh</li>
                                                
                                                
                                                
                                            </ul>
                                        </div>                
            
                            </div>
            
                        </div>
                            
                            
        </div>

    
        </section>
   </>
  )
}

export default PP311Details