import React from 'react'
import { Link } from 'react-router-dom';

import { webSiteImage } from '../../images';


const StartServiceStyle = () => {
  return (
   <>
    <section className="services-style2-service-page">

        <div className="container">
                        
                        <div className="row">
                                <div className="col-md-3">
                                           <Link to={'/pp110'}>
                                            <div className="img-holder">
                                            <img src={webSiteImage.pp110} alt="Awesome Image"/>
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

                                <div className="col-md-3">
                                           <Link to={'/pp211'}>
                                            <div className="img-holder">
                                            <img src={webSiteImage.pp211} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PP211 </h2>
                                        </div>
                                        </Link>
                                 
            
                                </div>

                                <div className="col-md-3">
                                            <Link to={'/pp311'}>
                                            <div className="img-holder">
                                            <img src={webSiteImage.pp311} alt="Awesome Image"/>
                                            </div> 
                                     
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PP311 </h2>
                                        </div>
                                        </Link>
                                  
                                   
                                  
            
                                </div>

                                <div className="col-md-3">
                                   <Link to={'/duplexer'}>
                                        <div className="img-holder">
                                            <img src={webSiteImage.pr400} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">Duplexer</h2>
                                        </div>
                                   </Link>
                           </div>  
                                
                              
                        </div>
                            
                            
        </div>            
        <br/>

        <div className="container">
                        
                    <div className="row">
                    

                    {/* <div className="col-md-3">
                                   <Link to={'/pb300'}>
                                        <div className="img-holder">
                                            <img src={webSiteImage.pb300} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">Pb300 </h2>
                                        </div>
                                   </Link>
                                   
            
                    </div> */}

                            <div className="col-md-3">
                                   <Link to={'/pmtl7630'}>
                                        <div className="img-holder">
                                            <img src={webSiteImage.pmtl7630} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PMTL 7630</h2>
                                        </div>
                                   </Link>
                           </div>

                           <div className="col-md-3">
                                   <Link to={'/pmtl7630'}>
                                        <div className="img-holder">
                                            <img src={webSiteImage.pb300} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PB 300</h2>
                                        </div>
                                   </Link>
                           </div>


                    {/* <div className="col-md-3">
                                   <Link to={'/pr400'}>
                                        <div className="img-holder">
                                            <img src={webSiteImage.pr400} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PR400 </h2>
                                        </div>
                                   </Link>
                                   
            
                    </div> */}


                    <div className="col-md-3">
                                   <Link to={'/poc'}>
                                        <div className="img-holder">
                                            <img src={webSiteImage.poc} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">POC</h2>
                                        </div>
                                   </Link>
                           </div>
                                
            

                           <div className="col-md-3">
                                   <Link to={'/pmtl7630'}>
                                        <div className="img-holder">
                                            <img src={webSiteImage.duplexer} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PR 400</h2>
                                        </div>
                                   </Link>
                           </div>
                               

                             

                               
            
                        </div>
                            
                            
        </div>            
        <br/>


        {/* <div className="container">
                        <div className="row">
                    
                       
                         <div className="col-md-4">
                                   <Link to={'/pmtl7630'}>
                                        <div className="img-holder">
                                            <img src={webSiteImage.pmtl7630} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PMTL 7630</h2>
                                        </div>
                                   </Link>
                           </div>


                           <div className="col-md-4">
                                   <Link to={'/pm300b'}>
                                        <div className="img-holder">
                                            <img src={workingFour} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">6901 </h2>
                                        </div>
                                   </Link>
                                   
            
                                </div>

                                
            
                        </div>
                       
                            
                            
        </div>            
        <br/> */}

    
       

      

     </section>
   </>
  )
}

export default StartServiceStyle