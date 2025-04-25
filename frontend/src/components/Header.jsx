import "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    return (
        <div>
            <header className="header-section clearfix">
                <div className="header-top">
                    <div className="container-fluid">
                        <div className="row">
                            {/* <div className="col-md-6"> */}
                            <img src={`${process.env.PUBLIC_URL}/img/icons/clock.png`} className="clock-img" alt="Clock" />
                            <p>Mon - Sat 09:00am - 08:00pm</p>
                            {/* </div> */}
                        </div>
                    </div>
                </div>

                <div className="site-navbar">
                    {/* Logo */}
                    <a href="/" className="site-logo">
                        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" />
                    </a>

                    <div className="header-right">
                        <div className="header-info-box">
                            <div className="hib-icon">
                                <img src={`${process.env.PUBLIC_URL}/img/icons/phone.png`} alt="Phone" />
                            </div>
                            <div className="hib-text">
                                <h6>+91 70091-89097</h6>
                                <p>Vickydhiman5695@gmail.com</p>
                            </div>
                        </div>
                        <div className="header-info-box">
                            <div className="hib-icon">
                                <img src={`${process.env.PUBLIC_URL}/img/icons/map-marker.png`} alt="Location" />
                            </div>
                            <div className="hib-text">
                            <h6>Shop No. 118, Chora Bazar</h6>
                            <p>Chajju Majari, Old Rajpura (Punjab)</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="site-nav-menu">
                        <ul>
                            <li className={location.pathname === "/" ? "active" : ""}>
                            <Link to="/">Home</Link>
                            </li>
                            <li className={location.pathname === "/about" ? "active" : ""}>
                            <Link to="/about">About us</Link>
                            </li>
                            <li className={location.pathname === "/Services" ? "active" : ""}>
                            <Link to="/Services">Services</Link>
                            </li>
                            {/*<li className={location.pathname === "/portfolio" ? "active" : ""}>*/}
                            {/*<Link to="/portfolio">Portfolio</Link>*/}
                            {/*</li>*/}
                            <li className={location.pathname === "/contact" ? "active" : ""}>
                            <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;