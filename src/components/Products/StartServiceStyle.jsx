import React from 'react'
import pmtl7630 from '../../assets/images/resources/pmtl7630.png';
import { Link } from 'react-router-dom';
import pp110 from '../../assets/images/resources/pp110.png';
import pp211 from '../../assets/images/resources/pp211.png';
import pp311 from '../../assets/images/resources/pp311.png';
import pr400 from  '../../assets/images/resources/pr400.png';
import pb300 from '../../assets/images/resources/pb300.png';
import poc from '../../assets/images/resources/poc.png';
import duplexer from '../../assets/images/resources/duplexer.png';


const StartServiceStyle = () => {
  return (
   <>
    <section className="services-style2-service-page">

        <div className="container">
                        
                        <div className="row">
                                <div className="col-md-4">
                                           <Link to={'/pp110'}>
                                            <div className="img-holder">
                                            <img src={pp110} alt="Awesome Image"/>
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

                                <div className="col-md-4">
                                           <Link to={'/pp211'}>
                                            <div className="img-holder">
                                            <img src={pp211} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PP211 </h2>
                                        </div>
                                        </Link>
                                 
            
                                </div>

                                <div className="col-md-4">
                                            <Link to={'/pp311'}>
                                            <div className="img-holder">
                                            <img src={pp311} alt="Awesome Image"/>
                                            </div> 
                                     
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PP311 </h2>
                                        </div>
                                        </Link>
                                  
                                   
                                  
            
                                </div>
                                
                              
                        </div>
                            
                            
        </div>            
        <br/>

        <div className="container">
                        
                    <div className="row">
                        <div className="col-md-4">
                                   <Link to={'/duplexer'}>
                                        <div className="img-holder">
                                            <img src={duplexer} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">Duplexer</h2>
                                        </div>
                                   </Link>
                           </div>  
                                
            


                                <div className="col-md-4">
                                   <Link to={'/pr400'}>
                                        <div className="img-holder">
                                            <img src={pr400} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PR400 </h2>
                                        </div>
                                   </Link>
                                   
            
                                </div>

                                <div className="col-md-4">
                                   <Link to={'/pm300b'}>
                                        <div className="img-holder">
                                            <img src={pb300} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PB300 </h2>
                                        </div>
                                   </Link>
                                   
            
                                </div>
            
                        </div>
                            
                            
        </div>            
        <br/>


        <div className="container">
                        <div className="row">
                    
                        <div className="col-md-4">
                                   <Link to={'/poc'}>
                                        <div className="img-holder">
                                            <img src={poc} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">POC</h2>
                                        </div>
                                   </Link>
                           </div>
                         <div className="col-md-4">
                                   <Link to={'/pmtl7630'}>
                                        <div className="img-holder">
                                            <img src={pmtl7630} alt="Awesome Image"/>
                                            </div> 
                                            <div className="title">
                                            <h2 className="align-centre btn-one-detail">PMTL 7630</h2>
                                        </div>
                                   </Link>
                           </div>

                                
            
                        </div>
                       
                            
                            
        </div>            
        <br/>

    
       

      

     </section>
   </>
  )
}

export default StartServiceStyle