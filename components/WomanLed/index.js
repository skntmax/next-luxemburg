import React from "react";
import Image14 from "public/assets/org11.png";
import Image15 from "public/assets/org12.png";
import Image16 from "public/assets/org3.png";
import Image from "next/image";

export default function (){
    return(
        <React.Fragment>
            <section className="py-5">
        <div className="container">
          <h2 className="fs-40 text-center mb-4 fw-600 text_lightred">
            A Woman-Led Organization
          </h2>
          <div className="d-flex justify-content-center mb-2">
            <button className="btn btn_secondary me-3 mb-2 fs-16 fw-600 text-white">
              Photos
            </button>
            <button className="btn btn_secondary-outline me-3 mb-2 fs-16 fw-600 tetx_lightred ">
              Videos
            </button>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 mb-2">
              <Image className="img-fluid" src={Image14} alt="homepage" />
            </div>

            <div className="col-md-4 mb-2">
              <Image className="img-fluid" src={Image15} alt="homepage" />
            </div>

            <div className="col-md-4 mb-2">
              <Image className="img-fluid" src={Image16} alt="homepage" />
            </div>
          </div>
        </div>
      </section>
        </React.Fragment>
    )
}