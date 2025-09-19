import React from "react";
import { webSiteImage } from "../../images";
import { Link } from "react-router-dom";

const CareerHeader = () => {
  return (
    <>
      <header className="main-header header-style1">
        <div className="header-upper-style1">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="inner-container clearfix">
                  {/* <div className="logo-box-style1 float-left">
                    <Link to={"/"}>
                      <img src={webSiteImage.pronto} alt="Awesome Logo" />
                    </Link>
                  </div> */}
                  <div className="main-menu-box float-right">
                    <nav className="main-menu clearfix">
                      <div className="navbar-header clearfix">
                        <button
                          type="button"
                          className="navbar-toggle"
                          data-toggle="collapse"
                          data-target=".navbar-collapse"
                        >
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                        </button>
                      </div>
                                               <div className="main-menu-box float-right">
                        <nav className="main-menu clearfix">
                          <div className="navbar-collapse collapse clearfix">
                            <ul className="navigation clearfix">
                              {/* <li className="current">
                                <Link to={"/"}>Home</Link>
                              </li> */}
                              <li className="current">
                                <Link to={"/embedded"}>
                                  {" "}
                                  Vacancy-for-Embbeded Systems Engineer{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to={"/software"}>
                                  Vacancy-for-Software Engineers/Developers
                                </Link>
                              </li>
                              {/* <li>
                          <Link to={"/gallery"}>Gallery</Link>
                          </li> */}
                              <li>
                                <Link to={"/communication"}>
                                  Vacancy-for-Communication/Field Engineers
                                </Link>
                              </li>
                              <li>
                                <Link to={"/mechanical"}>
                                  Vacancy-for-Mechanical /Mechatronics Engineer{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to={"/hardware"}>
                                  Vacancy-for-Hardware Design Engineers{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to={"/rf"}>
                                  Vacancy-for-RF & Microwave Engineers{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to={"/integration"}>
                                  Vacancy-for-Integration Engineers{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to={"/technician"}>
                                  Vacancy-for-Technicians{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>      
  );
};

export default CareerHeader;
