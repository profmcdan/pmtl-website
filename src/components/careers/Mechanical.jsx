import React from "react";

function Mechanical() {
  return (
    <section className="faq-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="faq-content-box">
              <div className="accordion-box">
                {/* <!--Start single accordion box--> */}
                <div className="accordion accordion-block">
                  <h2>Mechanical/Mechatronics Engineer</h2>
                  <div className="accord-btn1">
                    <h4>
                      Experience using CAD software such as SolidWorks, AutoCAD,
                      or similar
                    </h4>
                  </div>
                </div>
                {/* <!--End single accordion box--> */}

                {/* <!--Start single accordion box--> */}
                <div className="accordion accordion-block">
                  <div className="accord-btn1">
                    <h4>
                      Sound Knowledge of materials, design for manufacturing and
                      mechanical modelling.
                    </h4>
                  </div>
                </div>
                {/* <!--End single accordion box--> */}

                {/* <!--Start single accordion box--> */}

                <div className="accordion accordion-block">
                  <div className="accord-btn1 active">
                    <h4>
                      Qualified candidates should send their cv to
                      careers@prontotech.ng
                    </h4>
                  </div>
                </div>
                {/* <!--End single accordion box--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mechanical;
