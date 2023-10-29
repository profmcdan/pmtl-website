import React from 'react'
import Working111 from '../../assets/images/resources/working-1111.jpg'
import Working4 from '../../assets/images/resources/working-4.jpg'
import PP211 from '../../assets/images/resources/PP211.jpeg'
import PP311 from '../../assets/images/resources/PP311.jpeg'
import { Link } from 'react-router-dom';
//import PR300 from '../../assets/images/resources/PR300.jpg'
//import PM300B from '../../assets/images/resources/PM300B.png'
//import DM300 from '../../assets/images/resources/DM300.jpg'
const StartServiceStyle = () => {
  return (
   <>
    <section className="services-style2-service-page">

        <div className="container">
                        
                        <div className="row">
                                <div className="col-xl-6">
                                           <Link to={'/pp110'}>
                                            <div className="img-holder">
                                            <img src={Working111} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PP110 </h2>
                                        </div>
                                        </Link>
                                    {/* <br/><br/>
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
                                    </div> */}
            
                                </div>

                                <div className="col-xl-6">
                                            <Link to={'/pp110'}>
                                            <div className="img-holder">
                                            <img src={Working111} alt="Awesome Image"/>
                                            </div> 
                                     
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PP211 </h2>
                                        </div>
                                        </Link>
                                  
                                    {/* <div className="single-service-sidebar">
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
                                    </div> */}
                                  
            
                                </div>
                                
                                {/* <div className="col-xl-6">
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
                                                <li> Small Size and Lightweight</li>
                                                <li>DMO True 2-Time Slots</li>
                                                <li>IP54 Protection</li>
                                                <li>Voice Recording</li>
                                                <li>Automatic Roaming (Programmable)</li>
                                                <li>Man-down/Lone-Worker</li>
                                                <li>GPS/GLONASS</li>
                                                <li>Advanced Encryption with RC4 Technology</li>
                                            </ul>
                                        </div>   
                                
                                        <br/>
                                        <a className='btn-one' href='contact.php'>
                                Read More<span className='flaticon-next'></span>
                            </a>
                                </div>
                                 */}
            
                            {/* <div className="col-xl-4">
                                    <br/>
                                        <div className="title">
                                            <h2 className="align-centre">Technical Details</h2>
            
                                        </div>
            
                                    <div className="services-links">
                                            <ul>
                                                <li>Power Output H:5W, L:1W</li>
                                                <li>Frequency Range; <br/>VHF:136-174MHz, UHF:400-480MHz</li>
                                                <li> Channels: 160/512 </li>
                                                <li>Battery Capacity: 2000mAh</li>
                                                
                                                
                                                
                                            </ul>
                                        </div>                
            
                            </div> */}
            
                        </div>
                            
                            
        </div>            
        <br/>

        <div className="container">
                        
                        <div className="row">
                                <div className="col-xl-6">
                                   <Link to={'/pp110'}>
                                        <div className="title">
                                            <h2 className="align-centre">PP311 </h2>
                                        </div>
                                            <div className="img-holder">
                                            <img src={Working4} alt="Awesome Image"/>
                                            </div> 
                                   </Link>
                                </div>
                                
                                {/* <div className="col-xl-4">
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
                                                <li> Small Size and Lightweight</li>
                                                <li>TDMA True 2-Time Slots</li>
                                                <li>IP54 Protection</li>
                                                <li>Automatic Roaming (Programmable)</li>
                                                <li>Manual Channel Editing</li>
                                                <li>Remote Kill and Revive</li>
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
                                                <li>Frequency Range; <br/>VHF:136-174MHZ, UHF:400-470MHZ</li>
                                                <li> Channels: 160 </li>
                                                <li>Battery Capacity: 2000mAh</li>
                                                
                                                
                                                
                                            </ul>
                                        </div>                
            
                            </div> */}


                                <div className="col-xl-6">
                                   <Link to={'/pp110'}>
                                        <div className="img-holder">
                                            <img src={Working4} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PM300 </h2>
                                        </div>
                                   </Link>
                                   
            
                                </div>
            
                        </div>
                            
                            
        </div>            
        <br/>


        <div className="container">
                        <div className="row">

                         <div className="col-xl-6">
                                   <Link to={'/pm300b'}>
                                        <div className="img-holder">
                                            <img src={Working4} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PM300B</h2>
                                        </div>
                                   </Link>
                           </div>

                           <div className="col-xl-6">
                                   <Link to={'/pp110'}>
                                        <div className="img-holder">
                                            <img src={Working4} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PR400</h2>
                                        </div>
                                   </Link>
                           </div>         
            
                        </div>
                       
                            
                            
        </div>            
        <br/>

    
       

       <div className="container">
                     
            <div className="row">
                    <div className="col-xl-6">
                    <Link to={'/pp110'}>
                            <div className="title">
                                <h2 className="align-centre">PMTL 6901 </h2>
                            </div>
                                <div className="img-holder">
                                 <img src={Working111} alt="Awesome Image"/>
                                 <h2 className="align-centre btn-one-detail">PMTL 6901</h2>
                       </div> 
                    
                        </Link>

                    </div>

                    <div className="col-xl-6">
                    <Link to={'/pp110'}>
                            <div className="title">
                                <h2 className="align-centre">PMTL 7630 </h2>
                            </div>
                                <div className="img-holder">
                                 <img src={Working4} alt="Awesome Image"/>
                                 <h2 className="align-centre btn-one-detail">PMTL 7630</h2>
                       </div> 
                    
                        </Link>

                    </div>
            </div>            
               
      </div>

     </section>
   </>
  )
}

export default StartServiceStyle