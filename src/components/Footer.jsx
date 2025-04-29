import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget about-widget">
                <img src={`${import.meta.env.BASE_URL}img/logo-light.png`} alt="Logo" />
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h2 className="fw-title">Follow Us On</h2>
                <div className="footer-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h2 className="fw-title">Our Solutions</h2>
                <ul>
                  <li><a href="#">Plastic Die Mould</a></li>
                  <li><a href="#">Custom Parts</a></li>
                  <li><a href="#">Job Work</a></li>
                  <li><a href="#">CAD-CAM Designing</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-7">
              <div className="footer-widget">
                <h2 className="fw-title">Contact Us</h2>
                <div className="footer-info-box">
                  <div className="fib-icon">
                    <img src={`${import.meta.env.BASE_URL}img/icons/map-marker.png`} alt="Location" />
                  </div>
                  <div className="fib-text">
                    <p>Shop No. 118, Chora Bazar<br />Chajju Majari, Old Rajpura (Punjab)</p>
                  </div>
                </div>
                <div className="footer-info-box">
                  <div className="fib-icon">
                    <img src={`${import.meta.env.BASE_URL}img/icons/phone.png`} alt="Phone" />
                  </div>
                  <div className="fib-text">
                    <p>+91 70091-89097<br />Vickydhiman5695@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 order-2 order-lg-1 p-0">
                <div className="copyright">
                  Copyright &copy; {new Date().getFullYear()} All rights reserved
                </div>
              </div>
              <div className="col-lg-7 order-1 order-lg-2 p-0">
                <ul className="footer-menu">
                  <li className="active"><a href="/">Home</a></li>
                  <li><a href="/about">About us</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
