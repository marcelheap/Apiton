import React from "react";
import BlockTitle from "./BlockTitle";
import { Link } from "gatsby"

const Services = () => {
  return (
    <section className="service-one" id="features">
      <div className="container">
        <BlockTitle
          textAlign="center"
          paraText="Our Services"
          titleText={`MarcelHeap Providing You \n Full-Length Service`}
        />
        <div className="row">
          <Link to="/design">
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-computer-graphic"></i>
                </div>
                <h3>Design</h3>
                <p>Discover our design services.</p>
              </div>
            </div>
          </div>
          </Link>
          <Link to="/web-development"> 
            <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-development"></i>
                </div>
                <h3>Web Development</h3>
                <p>Discover our web development services.</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/digital-marketing">
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-development1"></i>
                </div>
                <h3>Digital Marketing</h3>
                <p>Discover our digital marketing services.</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/mobile-app-development">
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-responsive"></i>
                </div>
                <h3>Mobile App Development</h3>
                <p>Discover our mobile app development services.</p>
              </div>
            </div>
          </div>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
