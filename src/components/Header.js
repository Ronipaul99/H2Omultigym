import React from 'react'

export default function Header() {
  return (
    <div>
        <header>
            {/* <!--? Header Start --> */}
            <div className="header-area header-transparent">
                <div className="main-header header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            {/* <!-- Logo --> */}
                            <div className="col-xl-2 col-lg-2 col-md-1">
                                <div className="logo">
                                    <a href="/"><img src="assets/img/logo/logo.png" alt=""/></a>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-10">
                                <div className="menu-main d-flex align-items-center justify-content-end">
                                    {/* <!-- Main-menu --> */}
                                    <div className="main-menu f-right d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><a href="/">Home</a></li>
                                                <li><a href="/about">About</a></li>
                                                <li><a href="/services">Services</a></li>
                                                <li><a href="/schedule">schedule</a></li>
                                                <li><a href="/gallery">gallery</a></li>
                                                <li><a href="/blog">Blog</a>
                                                    <ul className="submenu">
                                                        <li><a href="/blog">Blog</a></li>
                                                        <li><a href="/blog">Blog Details</a></li>
                                                        <li><a href="/blog">Element</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/contact">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header-right-btn f-right d-none d-lg-block ml-30">
                                        <a href="/auth" className="btn header-btn">became a member</a>
                                    </div>
                                </div>
                            </div>   
                            {/* <!-- Mobile Menu --> */}
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Header End --> */}
        </header>
    </div>
  )
}
