import React from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import Header from "@components/header";
import Parker from "public/assets/parker.jpg";
const index = () => {
  return (
    <>
      <Header />
      <section className="py-5">
        <div className="container">
          <h3 className="mt-2 pb-5 text_black text-center fs-30">PENS</h3>
          <div className="row mt-5">
            <div className="col-md-3 col-lg-2 mb-3">
              <h3 className="fs-18 border-bottom_black pb-2 mt-3">Shop By</h3>
              <p className="fs-18 mt-4">Now Shopping by</p>
              <p className="fs-16 mt-4">Price:</p>
              <p className="fs-16 mt-2">₹60.00 - ₹23,500.00</p>
              <div className="d-flex align-items-center">
                <input
                  type="number"
                  className="form-control  fs-14 shadow-none rounded-0"
                  min="60"
                  max="3000"
                  placeholder="from"
                />
                <span className="d-inline-block mx-2">—</span>
                <input
                  type="number"
                  className="form-control fs-14 shadow-none rounded-0"
                  min="60"
                  max="3000"
                  placeholder="to"
                />
                <button
                  className="btn fs-14 text_black ms-1 border"
                  data-element="submit"
                >
                  OK
                </button>
              </div>
              <h3 className="fs-20 mt-4 text_black mb-4">Brand</h3>
              <div className="form-check mb-2">
                <input
                  className="form-check-input "
                  type="checkbox"
                  value=""
                  id="parker"
                />
                <label className="form-check-label fs-14" for="parker">
                  Parker <span className="text_lightgrey ">(20)</span>
                </label>
              </div>
              <div className="form-check mb-2 ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="waterman"
                />
                <label className="form-check-label fs-14" for="waterman">
                  Waterman <span className="text_lightgrey ">(20)</span>
                </label>
              </div>
              <div className="form-check mb-2 ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="luxor"
                />
                <label className="form-check-label fs-14" for="luxor">
                  Luxor Schneider <span className="text_lightgrey ">(20)</span>
                </label>
              </div>
            </div>
            <div className="col-md-8 col-lg-9 mb-3 px-md-4 px-lg-5">
              <ul
                className="nav nav-pills mb-3 border-bottom_black pb-1"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active border bg-transparent rounded-0"
                    id="pills-grid-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-grid"
                    type="button"
                    role="tab"
                    aria-controls="pills-grid"
                    aria-selected="true"
                  >
                    <i className="fa-solid fa-grip text_lightgrey"></i>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link border bg-transparent rounded-0"
                    id="pills-list-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-list"
                    type="button"
                    role="tab"
                    aria-controls="pills-list"
                    aria-selected="false"
                  >
                    <i className="fa-solid fa-list-ol text_lightgrey"></i>
                  </button>
                </li>
                <p className="fs-14 mb-0 align-self-center text_lightgrey ms-2 ms-md-4">
                  {" "}
                  Items <span className="">1</span>-<span className="">24</span>{" "}
                  of <span className="">235</span>{" "}
                </p>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-grid"
                  role="tabpanel"
                  aria-labelledby="pills-grid-tab"
                >
                  <div className="row mt-4">
                    <div className="col-lg-3 col-md-4 mb-3">
                      <div className="card shadow border-0 h-100 bg-transparent">
                        <div className="card-body">
                          <Image
                            width={450}
                            height={350}
                            className="img-fluid"
                            src={Parker}
                            alt="Products"
                          />

                          <p className="fs-14 text_black text-center">
                            Parker Jotter Standard Ball Pen Blue Body Color...
                          </p>
                          <p className="fs-14 text_black text-center fw-600">
                            ₹300.00
                          </p>
                          <p className="d-flex my-4 justify-content-center gap-4">
                            <button className="btn border-0">
                              <i className=" fa-regular fa-bookmark fs-16 text_lightgrey"></i>
                            </button>
                            <button className="btn border-0">
                              <i className=" fa-solid fa-cart-shopping fs-16 text_lightgrey"></i>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-3">
                      <div className="card shadow border-0 h-100 bg-transparent">
                        <div className="card-body">
                          <Image
                            width={450}
                            height={350}
                            className="img-fluid"
                            src={Parker}
                            alt="Products"
                          />

                          <p className="fs-14 text_black text-center">
                            Parker Jotter Standard Ball Pen Blue Body Color...
                          </p>
                          <p className="fs-14 text_black text-center fw-600">
                            ₹300.00
                          </p>
                          <p className="d-flex my-4 justify-content-center gap-4">
                            <button className="btn border-0">
                              <i className=" fa-regular fa-bookmark fs-16 text_lightgrey"></i>
                            </button>
                            <button className="btn border-0">
                              <i className=" fa-solid fa-cart-shopping fs-16 text_lightgrey"></i>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-3">
                      <div className="card shadow border-0 h-100 bg-transparent">
                        <div className="card-body">
                          <Image
                            width={450}
                            height={350}
                            className="img-fluid"
                            src={Parker}
                            alt="Products"
                          />

                          <p className="fs-14 text_black text-center">
                            Parker Jotter Standard Ball Pen Blue Body Color...
                          </p>
                          <p className="fs-14 text_black text-center fw-600">
                            ₹300.00
                          </p>
                          <p className="d-flex my-4 justify-content-center gap-4">
                            <button className="btn border-0">
                              <i className=" fa-regular fa-bookmark fs-16 text_lightgrey"></i>
                            </button>
                            <button className="btn border-0">
                              <i className=" fa-solid fa-cart-shopping fs-16 text_lightgrey"></i>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-3">
                      <div className="card shadow border-0 h-100 bg-transparent">
                        <div className="card-body">
                          <Image
                            width={450}
                            height={350}
                            className="img-fluid"
                            src={Parker}
                            alt="Products"
                          />

                          <p className="fs-14 text_black text-center">
                            Parker Jotter Standard Ball Pen Blue Body Color...
                          </p>
                          <p className="fs-14 text_black text-center fw-600">
                            ₹300.00
                          </p>
                          <p className="d-flex my-4 justify-content-center gap-4">
                            <button className="btn border-0">
                              <i className=" fa-regular fa-bookmark fs-16 text_lightgrey"></i>
                            </button>
                            <button className="btn border-0">
                              <i className=" fa-solid fa-cart-shopping fs-16 text_lightgrey"></i>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-list"
                  role="tabpanel"
                  aria-labelledby="pills-list-tab"
                >
                  <div className="row mt-4">
                    <div className="col-lg-12 col-md-12 mb-3">
                      <div className="card shadow border-0 h-100 bg-transparent">
                        <div className="card-body d-flex flex-row">
                          <div className="">
                            <Image
                              width={450}
                              height={350}
                              className="img-fluid"
                              src={Parker}
                              alt="Products"
                            />
                          </div>
                          <div className="">
                            <p className="fs-24 text_black ">
                              Parker Jotter Standard Ball Pen Blue Body Color...
                            </p>
                            <p className="fs-18 text_black  fw-600">
                              ₹300.00
                            </p>
                            <p className="d-flex my-4 justify-content-start gap-4">
                              <button className="btn border-0">
                                <i className=" fa-regular fa-bookmark fs-18 text_lightgrey"></i>
                              </button>
                              <button className="btn border-0">
                                <i className=" fa-solid fa-cart-shopping fs-18 text_lightgrey"></i>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
