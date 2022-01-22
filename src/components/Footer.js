import React from "react";

import FooterLogo from "../assets/images/logo-1-1.png";

const Footer = () => {
  return (
    <div>
      <section className="mailchimp-one">
        <div className="container wow fadeInUp">
          <div className="inner-container">
            <div className="mailchimp-one__icon">
              <i className="apton-icon-mail"></i>
            </div>
            <form action="#" className="mailchimp-one__form">
              <input
                type="text"
                placeholder="Enter your email address"
                name="email"
              />
              <button className="thm-btn mailchimp-one__btn" type="submit">
                <span>Register Now</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget footer-widget__about">
                  <a href="index.html">
                    <img src={FooterLogo} width="129" alt="awesome post" />
                  </a>
                  <p>
                    Be it the design, development, or <br />
                    digital marketing, MarcelHeap is the <br />
                    first choice for all! 
                  </p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="footer-widget__links-wrap">
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Company</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#none">About</a>
                      </li>
                      <li>
                        <a href="#none">Our Team</a>
                      </li>
                      <li>
                        <a href="#none">Contact</a>
                      </li>
                      <li>
                        <a href="#none">Services</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Explore</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#none">News</a>
                      </li>
                      <li>
                        <a href="#none">Features</a>
                      </li>
                      <li>
                        <a href="#none">Download</a>
                      </li>
                      <li>
                        <a href="#none">Free Trial</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Links</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#none">Help</a>
                      </li>
                      <li>
                        <a href="#none">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#none">Terms of Use</a>
                      </li>
                      <li>
                        <a href="#none">Services</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center">
                <div className="footer-widget">
                  <div className="footer-widget__social">
                    <a href="https://www.facebook.com/MarcelHeap/">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://twitter.com/MarcelHeap/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/Marcel.Heap/">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.pinterest.com/marcelheap/">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container text-center">
            <p>© Copyright 2022 | MarcelHeap</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
