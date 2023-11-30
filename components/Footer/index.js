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
                    <li className="mb-2 d-block fs-14 ">
                      <a
                        href={"/listing/PCW/653917908eef3ad8ecb0d295"}
                        style={{ color: "white" }}
                      >
                        <i class="fa-solid fa-play me-2 fs-10"></i>PCW
                      </a>
                    </li>
                    <li className="mb-2  d-block fs-14">
                      <i class="fa-solid fa-play me-2 fs-10"></i>Pens
                    </li>
                    <li className="mb-2 d-block fs-14">
                      <a
                        href="/listing/Highlighters/653911ba8e6902ca42c1d6e9"
                        style={{
                          color: "white",
                        }}
                      >
                        <i class="fa-solid fa-play me-2 fs-10"></i>Highlighters
                      </a>
                    </li>
                    <li className="mb-2  d-block fs-14">
                      <i class="fa-solid fa-play me-2 fs-10"></i>Display Pack
                    </li>
                    <li className="mb-2  d-block fs-14">
                      <a
                        href="/listing/Notebook%20and%20Stationery/653911fdeb3253e94826bcac"
                        style={{
                          color: "white",
                        }}
                      >
                        <i class="fa-solid fa-play me-2 fs-10"></i>Notebooks &
                        Stationery
                      </a>
                    </li>
                  </div>
                  <div>
                    <li className="mb-2  d-block fs-14">
                      <i class="fa-solid fa-play me-2 fs-10"></i>Markers
                    </li>
                    <li className="mb-2  d-block fs-14">
                      <a
                        href="/listing/Art%20&%20Hobby/653911ce6d8ae7473f9325a7"
                        style={{
                          color: "white",
                        }}
                      >
                        <i class="fa-solid fa-play me-2 fs-10"></i>Art & Hobby
                      </a>
                    </li>
                    <li className="mb-2  d-block fs-14">
                      <a
                        href="/listing/Value%20Packs/6539120edb6bdba29040cb2c"
                        style={{
                          color: "white",
                        }}
                      >
                        <i class="fa-solid fa-play me-2 fs-10"></i>Value Packs
                      </a>
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
                  <a href="/about" className="text-white">
                    About Us
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
