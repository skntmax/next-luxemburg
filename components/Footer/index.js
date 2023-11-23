import React from "react";
import Link from "next/link";
function index() {
  return (
    <React.Fragment>
      <section className="footer_bg pt_8">
        <div className="container">
          <div className="footer-links-column">
            <div>
              <h3 className="fs-20 text-white mb-4">Products</h3>
              <ul className="text-white">
                <div className="d-flex justify-content-lg-between">
                  <div>
                    <li className="mb-2  d-block fs-14 ">
                      <i class="fa-solid fa-play me-2 fs-10"></i>PCW
                    </li>
                    <li className="mb-2  d-block fs-14">
                      <i class="fa-solid fa-play me-2 fs-10"></i>Pens
                    </li>
                    <li className="mb-2  d-block fs-14">
                      <i class="fa-solid fa-play me-2 fs-10"></i>Highlighters
                    </li>
                    <li className="mb-2  d-block fs-14">
                      <i class="fa-solid fa-play me-2 fs-10"></i>Display Pack
                    </li>
                    <li className="mb-2  d-block fs-14">
                      <i class="fa-solid fa-play me-2 fs-10"></i>Notebooks &
                      Stationery
                    </li>
                  </div>
                  <div>
                    <li className="mb-2  d-block fs-14">
                      <i class="fa-solid fa-play me-2 fs-10"></i>Markers
                    </li>
                    <li className="mb-2  d-block fs-14">
                      <i class="fa-solid fa-play me-2 fs-10"></i>Art & Hobby
                    </li>
                    <li className="mb-2  d-block fs-14">
                      <i class="fa-solid fa-play me-2 fs-10"></i>Value Packs
                    </li>
                  </div>
                </div>
              </ul>
            </div>
            <div>
              <h3 className="fs-20 text-white mb-4">Explore</h3>

              <ul className="text-white ">
                <li className="mb-2 d-block fs-14">
                  {" "}
                  <a href="/aboutus" className="text-white">
                    Aboutus
                  </a>
                </li>
                <li className="mb-2 d-block fs-14">Career</li>
                <li className="mb-2 d-block fs-14">News & Media</li>
                <li className="mb-2 d-block fs-14">Partners/Resellers</li>
              </ul>
            </div>
            <div>
              <ul className="text-white ">
                <a
                  href={"/privacy-policy"}
                  style={{ cursor: "pointer", color: "white" }}
                >
                  <li className="mb-3 d-block fs-14">
                    <i class="fa-solid fa-play me-2"></i>Privacy Policy
                  </li>
                </a>
                <li className="mb-3 d-block fs-14">
                  <i class="fa-solid fa-play me-2"></i>Cookie Policy
                </li>
                <li className="mb-3 d-block fs-14">
                  <i class="fa-solid fa-play me-2"></i>Terms & Conditions
                </li>
                <li className="mb-3 d-block fs-14">
                  <i class="fa-solid fa-play me-2"></i>Awards & Certification
                </li>

                <li className="mb-3 d-block fs-14">
                  <i class="fa-solid fa-play me-2"></i>Contact Us
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white ">
                <li className="mb-3 d-block fs-14">
                  <i class="fa-solid fa-envelope me-2"></i>
                  <a
                    className="text-white"
                    href="mailto:export.enquiry@luxoroffice.com"
                  >
                    export.enquiry@luxoroffice.com
                  </a>
                </li>
                <li className="mb-3 d-block fs-14">
                  <i class="fa-solid fa-phone me-2"></i>0120-4899000
                </li>
                <li className="mb-3 d-block fs-14">
                  <i class="fa-solid fa-location-dot me-2"></i>A-40, Hosiery
                  Complex,Phase-|| Extension Noida -201305,Gautam budh Nagar
                  (U.P)
                </li>

                <li>
                  <i class="fa-brands fa-square-facebook fs-16 me-2"></i>
                  <i class="fa-brands fa-youtube me-2 fs-16"></i>
                  <i class="fa-brands fa-instagram fs-16 me-2"></i>
                  <i class="fa-brands fs-16 fa-linkedin"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-4">
            <h3 className="text-white fs-16 text-center">
              Copyright Luxor 2023 | All Rights Reserved
            </h3>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default index;
