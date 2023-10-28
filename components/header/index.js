import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import Logo from "public/assets/luxorlogo.png";

const Header = () => {
  const [link, setLink] = useState("");
  return (
    <React.Fragment>
      {/* <header className='header'>
                <Link href='/' className='logo'>
                    <img src='https://luxorpen.com/images/logo/logo.png' />
                </Link>
                <div className='search'>
                    <input className='inputData' placeholder='Search' />
                    <AiOutlineSearch className='searchIcon' />
                    <select className='selectData' onChange={(e) => { }}>
                        <option value="">Lang</option>
                        <option value="Enh">English</option>
                        <option value="Hin">Hindi</option>
                    </select>
                </div>

            </header> */}
      <nav className="navbar navbar-light bg_red">
        <div className="container d-block">
          <div className="d-flex justify-content-between align-self-center">
            <div>
              <a href="/" className="logo">
                <span className="">
                  <Image src={Logo} alt="Logo" className="img-fluid w-100 " />
                </span>
              </a>
            </div>
            <div className="d-flex">
              <div className="">
                <form className="d-flex">
                  <input
                    className="form-control me-2 input_field"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn me-2 shadow-none border bg-white"
                    type="submit"
                  >
                    <i className="fa-solid  fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <div>
                <select
                  className="form-select selectData shadow-none input_field"
                  onChange={(e) => {}}
                >
                  <option selected>Select Language</option>
                  <option value="1">English</option>
                  <option value="2">French</option>
                  <option value="3">Spanish</option>
                  <option value="4">English</option>
                  <option value="5">Russian</option>
                  <option value="6">Japanese</option>
                  <option value="7">& more</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-self-center py-3 d-flex justify-content-between w-100 d-flex gap-3">
              <li className="nav-item ">
                <a className="fs-16 text_black" href="/">
                  Home
                </a>
              </li>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle text_black fs-16 p-0 border-0 shadow-none"
                  type="button"
                  id="dropdownabout"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </button>

                <ul className="dropdown-menu" aria-labelledby="dropdownabout">
                  <li>
                    <a className="dropdown-item fs-16 text_black" href="/about">
                      About Us
                    </a>
                  </li>
                  <hr className="dropdown-divider ms-3 me-3"></hr>
                  <li>
                    <a className="dropdown-item fs-16 text_black" href="#">
                      Vision
                    </a>
                  </li>
                  <hr className="dropdown-divider ms-3 me-3"></hr>
                  <li>
                    <a className="dropdown-item fs-16 text_black" href="#">
                      Mission
                    </a>
                  </li>
                  <hr className="dropdown-divider ms-3 me-3"></hr>
                  <li>
                    <a className="dropdown-item fs-16 text_black" href="#">
                      Milestone
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle text_black fs-16 p-0 border-0 shadow-none"
                  type="button"
                  id="dropdownProduct"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownProduct">
                  <li className="d-block">
                    <a className="dropdown-item fs-16 text_black" href="#">
                      Pens
                    </a>
                    <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                      <li>
                        <a className="dropdown-item" href="">
                          Metal Pens
                        </a>
                      </li>
                      <hr className="dropdown-divider ms-3 me-3" />
                      <li>
                        <a className="dropdown-item" href="">
                          Everyday Writing
                        </a>
                      </li>
                    </ul>
                  </li>
                  <hr className="dropdown-divider ms-3 me-3"></hr>
                  <li>
                    <a className="dropdown-item fs-16 text_black" href="#">
                      Highlighters
                    </a>
                  </li>
                  <hr className="dropdown-divider ms-3 me-3"></hr>
                  <li className="d-block">
                    <a className="dropdown-item fs-16 text_black" href="#">
                      Markers
                    </a>
                    <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                      <li>
                        <a className="dropdown-item" href="">
                          Permanent Marker
                        </a>
                      </li>
                      <hr className="dropdown-divider ms-3 me-3" />
                      <li>
                        <a className="dropdown-item" href="">
                          White Board Marker
                        </a>
                      </li>
                    </ul>
                  </li>
                  <hr className="dropdown-divider ms-3 me-3"></hr>
                  <li>
                    <a
                      className="dropdown-item fs-16 text_black"
                      href="product/653911ce6d8ae7473f9325a7"
                    >
                      Art & Hobby
                    </a>
                  </li>
                  <hr className="dropdown-divider ms-3 me-3"></hr>
                  <li>
                    <a
                      className="dropdown-item fs-16 text_black"
                      href="product/653912399a126cb9bb92f68c"
                    >
                      Kids Colouring
                    </a>
                  </li>
                  <hr className="dropdown-divider ms-3 me-3"></hr>

                  <li>
                    <a
                      className="dropdown-item fs-16 text_black"
                      href="product/653911eb04804c4985fe52bb"
                    >
                      Ecowrite
                    </a>
                  </li>
                  <hr className="dropdown-divider ms-3 me-3"></hr>
                  <li>
                    <a
                      className="dropdown-item fs-16 text_black"
                      href="product/6539120edb6bdba29040cb2c"
                    >
                      Value Packs
                    </a>
                  </li>
                  <hr className="dropdown-divider ms-3 me-3"></hr>
                  <li>
                    <a
                      className="dropdown-item fs-16 text_black"
                      href="product/653917908eef3ad8ecb0d295"
                    >
                      PCW
                    </a>
                  </li>
                  <hr className="dropdown-divider ms-3 me-3"></hr>
                  <li>
                    <a
                      className="dropdown-item fs-16 text_black"
                      href="product/653911fdeb3253e94826bcac"
                    >
                      Notebook & Stationary
                    </a>
                  </li>
                </ul>
              </div>
              <li className="nav-item">
                <a className="fs-16 text_black" href="#">
                  E- Catalogue
                </a>
              </li>

              <li className="nav-item">
                <a className="fs-16 text_black" href="#">
                  Media
                </a>
              </li>
              <li className="nav-item">
                <a className="fs-16 text_black" href="#">
                  Art Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="fs-16 text_black" href="#">
                  Career
                </a>
              </li>
              <li className="nav-item">
                <a className="fs-16 text_black" href="contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-lg-none py-3">
        <div className="container">
          <div className="d-flex justify-content-between">
            <a href="/" className="logo">
              <span className="position_static pointer_event">
                <Image
                  layout="fill"
                  src={Logo}
                  alt="logo2"
                  className="img-fluid position_static"
                  
                  
                />
              </span>
            </a>
            <button
              className="btn border-0 shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <i className="fa-solid fa-bars fs-24 fw-700"></i>
            </button>
          </div>

          <div
            className="offcanvas offcanvas_toggle offcanvas-start"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className="offcanvas-header">
              <a href="/" className="logo">
                <span className="position_static pointer_event">
                  <Image
                    layout="fill"
                    alt="logo2"
                    className="img-fluid mt-0 position_static"
                    src="https://luxorpen.com/images/logo/logo.png"
                  />
                </span>
              </a>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <li className="nav-item">
                <a className="fs-16 text_black p-2" href="/">
                  Home
                </a>
              </li>
              <div className="dropdown">
                <a
                  className="btn dropdown-toggle p-2 border-0 shadow-none"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li className="d-block">
                    <a className="dropdown-item fs-16 text_black" href="/about">
                      About Us
                    </a>
                  </li>

                  <li className="d-block">
                    <a className="dropdown-item fs-16 text_black" href="#">
                      Vision
                    </a>
                  </li>

                  <li className="d-block">
                    <a className="dropdown-item fs-16 text_black" href="#">
                      Mission
                    </a>
                  </li>

                  <li className="d-block">
                    <a className="dropdown-item fs-16 text_black" href="#">
                      Milestone
                    </a>
                  </li>
                </ul>
              </div>
              <li className="nav-item">
                <a className="fs-16 text_black p-2" href="/product">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="fs-16 text_black p-2" href="#">
                  E- Catalogue
                </a>
              </li>

              <li className="nav-item">
                <a className="fs-16 text_black p-2" href="#">
                  Media
                </a>
              </li>
              <li className="nav-item">
                <a className="fs-16 text_black p-2" href="#">
                  Art Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="fs-16 text_black p-2" href="#">
                  Career
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
      {/* <nav className='navbar'>
                <ul>
                    <li>
                        <a  >
                            <select className='aboutus' onChange={e => window.location.href = e.target.value}>
                                <option selected hidden> choose </option>
                                <option value="about" > About Us  </option>
                                <option value="contact" > Contact Us  </option>
                                <option value="Vision">Vision</option>
                                <option value="Mission">Mission</option>
                                <option value="Milstone">Milstone</option>
                            </select>
                        </a>
                    </li>

                    <li><Link href="/product">Product</Link></li>
                    <li><a href="#services">E- Catalogue</a></li>
                    <li><a href="#contact">Media</a></li>
                    <li><a href="#contact">Art Gallery</a></li>
                    <li><a href="#contact">Career</a></li>

                </ul>

            </nav > */}
    </React.Fragment>
  );
};

export default Header;
