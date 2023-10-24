import React, { useState } from "react"
import Link from "next/link"
import { AiOutlineSearch } from 'react-icons/ai'

const Header = () => {

    const [link, setLink] = useState('')
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
                            <Link href='/' className='logo'>
                                <img src='https://luxorpen.com/images/logo/logo.png' />
                            </Link>
                        </div>
                        <div className="d-flex">
                            <div className="">
                                <form className="d-flex">
                                    <input className="form-control me-2 input_field" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn me-2 shadow-none border bg-white" type="submit"><i className="fa-solid  fa-magnifying-glass"></i></button>
                                </form>
                            </div>
                            <div>
                                <select className="form-select selectData shadow-none input_field" onChange={(e) => { }}>
                                    <option selected>Select Language</option>
                                    <option value="1">English</option>
                                    <option value="2">Hindi</option>

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
                            <li className="nav-item">
                                <Link className="fs-16 text_black" href="/">Home</Link>
                            </li>
                            <div className="dropdown">
                                <Link className="btn dropdown-toggle p-0 border-0 shadow-none" href="about" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </Link>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><Link className="dropdown-item fs-16 text_black" href="/about">About Us</Link></li>
                                    <hr className="dropdown-divider ms-3 me-3"></hr>
                                    <li><Link className="dropdown-item fs-16 text_black" href="#">Vision</Link></li>
                                    <hr className="dropdown-divider ms-3 me-3"></hr>
                                    <li><Link className="dropdown-item fs-16 text_black" href="#">Mission</Link></li>
                                    <hr className="dropdown-divider ms-3 me-3"></hr>
                                    <li><Link className="dropdown-item fs-16 text_black" href="#">Milestone</Link></li>

                                </ul>
                            </div>
                            <li className="nav-item">
                                <Link className="fs-16 text_black" href="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="fs-16 text_black" href="#">E- Catalogue</Link></li>

                            <li className="nav-item">
                                <Link className="fs-16 text_black" href="#">Media</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="fs-16 text_black" href="#">Art Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="fs-16 text_black" href="#">Career</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="fs-16 text_black" href="contact">Contact Us</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
            <div className="d-lg-none py-3">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <Link href='/' className='logo'>
                            <img className="img-fluid" src='https://luxorpen.com/images/logo/logo.png' />
                        </Link>
                        <button className="btn border-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="fa-solid fa-bars fs-24 fw-700"></i></button>
                    </div>

                    <div className="offcanvas offcanvas_toggle offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header">
                            <Link href='/' className='logo'>
                                <img className="img-fluid mt-0" src='https://luxorpen.com/images/logo/logo.png' />
                            </Link>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <li className="nav-item">
                                <Link className="fs-16 text_black p-2" href="/">Home</Link>
                            </li>
                            <div className="dropdown">
                                <Link className="btn dropdown-toggle p-2 border-0 shadow-none" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </Link>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li className="d-block"><Link className="dropdown-item fs-16 text_black" href="/about">About Us</Link></li>

                                    <li className="d-block"><Link className="dropdown-item fs-16 text_black" href="#">Vision</Link></li>

                                    <li className="d-block"><Link className="dropdown-item fs-16 text_black" href="#">Mission</Link></li>

                                    <li className="d-block"><Link className="dropdown-item fs-16 text_black" href="#">Milestone</Link></li>

                                </ul>
                            </div>
                            <li className="nav-item">
                                <Link className="fs-16 text_black p-2" href="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="fs-16 text_black p-2" href="#">E- Catalogue</Link></li>

                            <li className="nav-item">
                                <Link className="fs-16 text_black p-2" href="#">Media</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="fs-16 text_black p-2" href="#">Art Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="fs-16 text_black p-2" href="#">Career</Link>
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

    )
}

export default Header