import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";
import BannerBG from "../assets/images/resources/banner-image-1-1.jpg";
import BannerMoc from "../assets/images/resources/banner-moc-1-1.png";

const Banner = () => {
  const [open, setOpen] = useState({
    isOpen: false
  });
  const openModal = () => {
    setOpen({
      isOpen: true
    });
  };

  return (
    <section className="banner-one" id="home">
      <img
        src={BannerShape}
        className="banner-one__bg-shape-1"
        alt="awesome post"
      />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${BannerBG})` }}
      ></div>
      <div className="container">
        <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId="Kl5B6MBAntI"
          onClose={() => setOpen({ isOpen: false })}
        />
        
        <div className="banner-one__moc">
          <img
            src={BannerMoc}
            className="wow fadeInUp"
            data-wow-duration="1500ms"
            alt="awesome post"
          />
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
                <button className="thm-btn banner-one__mc-btn">
                  <span>Top-Rated</span>
                </button>  
              <h3>
               Development &<br /> Marketing <br /> Agency
              </h3>
              <p>
                Be it the design, development, or digital marketing, {" "}
                <br /> MarcelHeap is the first choice for all!
              </p>
              <a href="#none" className="thm-btn banner-one__btn">
                <span>Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
