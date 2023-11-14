// import { redirect } from 'next/navigation'
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import { allProductsCategory } from "Actions/action";
import Logo from "public/assets/luxorlogo.png";
import { useRouter } from "next/router";
import styles from "styles/productbar.module.css";

const Header = (props) => {
  // let all_prd =props.all_prdcts
  let router = useRouter();
  const [all_prd, set_all_prd] = useState([]);

  useEffect(() => {
    (async function () {
      let { result, status } = await allProductsCategory();
      if (status) set_all_prd(result);
    })();
  }, [all_prd.length]);

  const goToProductPage = (item, current_id, sub_category) => {
    
    let closeButton = document.getElementById('close_button')
    closeButton.addEventListener('click' , ()=> console.log(" clicked "))

    let final_url = "";
    if (item._doc) {
      // pen or marker
      final_url = "/listing/" + sub_category + "/" + current_id;
      if (final_url) router.push(final_url);

      // console.log(final_url)
    } else {
      // except pen and marker
      const { _id, name: category_name } = item;
      final_url = "/listing/" + category_name + "/" + _id;
      router.push(final_url);
      
    }
  };

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

      <nav className="navbar navbar-light d-none d-lg-block bg_red">
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
                  className="btn dropdown-toggle pt-0"
                  type="button"
                  id="dropdownProduct"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </button>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {all_prd.length > 0 &&
                    all_prd.map((item, ind) => {
                      if (item._doc) {
                        return (
                          <li
                            className={`d-block ${styles["main_prd"]}`}
                            onClick={(e) => {
                              debugger;
                              goToProductPage(item);
                            }}
                          >
                            <a className="dropdown-item fs-16 text_black">
                              {item._doc.name}
                            </a>
                            <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                              {item.sub_menu &&
                                item.sub_menu.length > 0 &&
                                item.sub_menu.map((ele) => {
                                  return (
                                    <React.Fragment>
                                      <li
                                        onClick={(e) => {
                                          debugger;
                                          e.stopPropagation();
                                          goToProductPage(
                                            item,
                                            ele._id,
                                            ele.category
                                              ? ele.category
                                              : ele.marker_category
                                          );
                                        }}
                                      >
                                        <a className="dropdown-item">
                                          {ele.category
                                            ? ele.category
                                            : ele.marker_category
                                            ? ele.marker_category
                                            : ""}
                                        </a>
                                      </li>
                                      <hr className="dropdown-divider ms-3 me-3" />
                                    </React.Fragment>
                                  );
                                })}
                            </ul>
                          </li>
                        );
                      } else {
                        return (
                          <li
                            className={`d-block ${styles["main_prd"]} `}
                            onClick={() => goToProductPage(item)}
                          >
                            <a className="dropdown-item fs-16 text_black">
                              {item.name}
                            </a>
                          </li>
                        );
                      }
                    })}
                </ul>
              </div>
              <li className="nav-item">
                <a className="fs-16 text_black" href="/assets/00 Luxor Catalogue 2022 LowRes.pdf">
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
                <a className="fs-16 text_black" onClick={(e)=>{ e.preventDefault(), router.push('/contact')}}  href="">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-lg-none py-3 bg-white">
        <div className="container">
          <div className="d-flex justify-content-between">
            <a href="/" className="">
              <span className="">
                <Image
                  width="200"
                  height="50"
                  src={Logo}
                  alt="logo2"
                  className="img-fluid"
                />
              </span>
            </a>
            <button
               id="close_button"
              className="btn border-0 bg_black  px-3 shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <i className="fa-solid text-white fa-bars fs-24 fw-700"></i>
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
              <a href="/">
                <Image
                  width="200"
                  height="50"
                  alt="logo2"
                  className="img-fluid mt-0 "
                  src={Logo}
                />
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
              <li class="nav-item dropdown">
                <a
                  class="nav-link text-start dropdown-toggle btn fs-16 text_black p-2"
                  href="#"
                  id="product-dropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
                 
                <ul class="dropdown-menu" aria-labelledby="product-dropdown">
                  {all_prd.length > 0 &&
                    all_prd.map((item, ind) => {
                      if (item._doc) {
                        return (
                          <li
                            className={`d-block ${styles["main_prd"]}`}
                            onClick={(e) => {
                              debugger;
                              goToProductPage(item);
                            }}
                          >
                            <a className=" text_black  fs-16 dropdown-item text-capitalize ">
                              {item._doc.name}
                            </a>
                            <ul className="list-unstyled">
                              {item.sub_menu &&
                                item.sub_menu.length > 0 &&
                                item.sub_menu.map((ele) => {
                                  return (
                                    <React.Fragment>
                                      <li
                                        onClick={(e) => {
                                          debugger;
                                          e.stopPropagation();
                                          goToProductPage(
                                            item,
                                            ele._id,
                                            ele.category
                                              ? ele.category
                                              : ele.marker_category
                                          );
                                        }}
                                      >
                                        <a className=" dropdown-item text-capitalize">
                                          {ele.category
                                            ? ele.category
                                            : ele.marker_category
                                            ? ele.marker_category
                                            : ""}
                                        </a>
                                      </li>
                                      <hr className="dropdown-divider ms-3 me-3" />
                                    </React.Fragment>
                                  );
                                })}
                            </ul>
                          </li>
                        );
                      } else {
                        return (
                          <li
                            className= {` d-block ${styles["main_prd"]} `}
                            onClick={() => goToProductPage(item)}
                          >
                            <a className="text_black  fs-16 dropdown-item">
                              {item.name} 
                            </a>
                          </li>
                        );
                      }
                    })}
                </ul>



                

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

// export async function getServerSideProps({ req, res }) {

//     let {result , status } = await allProductsCategory()
//     console.log("statusstatus" ,result)

//     if(status && result.length>0){
//         return {
//             props: {
//                 all_prd:result
//             }
//           }
//     }else{

//     }
//     return {
//       props: {
//         all_prd: [],
//         // json: json.result
//       }
//     }

//   }

export default Header;
