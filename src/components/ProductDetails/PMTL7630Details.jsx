import React from 'react'
import Working111 from '../../assets/images/resources/pmtl7630.png'
const PMTL7630Details = () => {
  return (
    <>
    <section className="services-style2-service-page">
            <div className="container">
                     
            <div className="row">
                    <div className="col-md-4">
                            <div className="title">
                                <h2 className="align-centre">PMTL 7630 </h2>
                            </div>
                                <div className="img-holder">
                                 <img src={Working111} alt="Awesome Image"/>
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
                    
                    <div className="col-md-4">
                     <br/>
                            <div className="title">
                                <h2 className="align-centre">Features</h2>

                            </div>
                            <div className="services-links">
                                <ul>
                                    <li>Interoperable with other DMR Tier II Standard Radios</li>
                                    <li>Analog and Digital Modes</li>
                                    <li>Encryption</li>
                                    <li>Private Call Options</li>
                                    <li>Digital Voice</li>
                                    <li>Lightweight(265g)</li>
                                    <li>Li-io Battery</li>
                                    <li>5W Output Power</li>
                                    
                                </ul>
                            </div>   
                    
                            <div className="title">
                                <h2 className="align-centre">Technical Details</h2>

                            </div>
                            <div className="services-links">
                                <ul>
                                    <li>Frequency Range  &ensp;136 - 174MHz (VHF Type) <br/> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;400 - 470MHz (UHF Type)</li>
                                    <li>Channel Capacity  &ensp;1024 Channels</li>
                                    <li>Channel Zone  &emsp; &ensp;&ensp;64</li>
                                    <li>Operating Voltage  &ensp;7.4V Dc ± 10%</li>
                                    <li>Battery Capacity &ensp;&ensp;Li-ion 2000mAH (20hrs 5–5-90 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;duty cycle)</li>
                                    <li>Operating Temperature  -20{`\u00B0C`} to 60{`\u00B0C`} </li> 
                                    <li>Frequency stability &nbsp;&nbsp; ±1 ppm 20{`\u00B0C`} to 60{`\u00B0C`} </li>   
                                     <li>Antenna impedance &ensp;&ensp; &ensp;50 Ω</li>
                                     <li>Dimensions  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;53x28x116mm (excluding &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;projection)</li>
                                    <li>Weight  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;265g (including battery)</li>
                                </ul>
                            </div>   
                  

                    </div>




                  <div className="col-md-4">
                       <br/>
                           <div className="title">
                                <h2 className="align-centre">Transmission</h2>

                            </div>

                        <div className="services-links">
                                <ul>
                                    <li>RF Power ≤ 5W</li>
                                    <li>4SK 7K60FXD for Data Only; <br/>7K60FXW for Data and Voice</li>
                                    <li>Adjacent Channel Power  ≤ = - 60dB(±12.5KHz) /<br/>≤ - 70dB(± 25KHz)</li>
                                    <li>Spurious RF Sponderance 36dBm ≤ 1GHz - 30dBm ≥ 1GHz</li>
                                    <li>Frequency Response  +1 ~ 3dB</li>
                                    <li>Audio Distortion  ≤ 5%</li>
                                    <li>Vocoder    AMBE + 2</li>
                                    
                                    
                                </ul>
                            </div>   
 




                    <div className="title">
                                <h2 className="align-centre">Reception</h2>

                            </div>
                        <div className="services-links">
                                <ul>
                                    <li>Frequency Sensitivity 5% BER: 0.25µV</li>
                                    <li>Audio Distortion  ≤ 5%</li>
                                    <li>Spurious Restrain  ≥ -8dB</li>
                                    <li>Adjacent - Channel Selectivity  ≥ 55dB</li>
                                    <li>Inter - Modulation Distortion ≥ 55dB</li>
                                    <li>Frequency Response  +~3dB</li>
                                    <li>Jam-Up  ≥ -85dB</li>
                                    
                                  
                                </ul>
                            </div>   
                  

                </div>

                </div>
            </div>
    
        </section>
   </>
  )
}

export default PMTL7630Details