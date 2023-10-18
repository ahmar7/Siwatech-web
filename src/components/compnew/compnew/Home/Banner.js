import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";
import AdBanner from "../../assets/img/test1.png";
const Banner = () => {
  return (
    <>
      {/* <div className="banner-row">
        <div className="banner-col">Address: {user.address}</div>
        <div className="banner-col"> {user.availabilityFrom}</div>
      </div> */}

      <div className="for-desk">
        <div
          className=" "
          style={{
            paddingLeft: "0.1875rem",
            paddingBottom: "0.1875rem",
            marginLeft: "inherit",
          }}
        >
          {" "}
          <div
            className="emotion--banner"
            data-coverimage="true"
            data-width={1994}
            data-height={88}
            data-bannermapping="true"
          >
            <div className=" ">
              <picture className="banner--image cover100">
                <img src={AdBanner} className="banner--image-src" />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          swipeable={true}
        >
          <div>
            <img src="https://siwatec-gmbh.de/resources/home/photo3.png" />
          </div>

          <div>
            <img src="https://siwatec-gmbh.de/resources/home/photo6.png" />
          </div>
          <div>
            <img src="https://siwatec-gmbh.de/resources/home/photo7.png" />
          </div>
        </Carousel>
      </div>
      <div className="banner2">
        <div className="row-sname">
          <div className="col-sname">Kompetenz</div>
          <div className="col-sname">Service</div>
          <div className="col-sname">Kundennähe</div>
        </div>

        <div className="banner-2img for-desk">
          <img
            src="https://siwatec-gmbh.de/resources/home/photo1.png"
            alt=""
          />
        </div>
        <div className="banner-2img for-desk">
          <img
            src="https://siwatec-gmbh.de/resources/home/photo2.png"
            alt=""
          />
        </div>
        <div className="for-mbl">
          <a href="">
            <img
              src="https://www.jansen-versand.de/media/image/4f/a6/5d/beratung_verkaufbajbKXRbpKibI_1280x1280.webp"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://www.jansen-versand.de/media/image/cd/75/ed/eteile_deDgVnn4rwaQ9Eq_1280x1280.webp"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://www.jansen-versand.de/media/image/81/49/b3/handlersucheJDqMu0GZmrTUh_1280x1280.webp"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://www.jansen-versand.de/media/image/f2/53/fc/ausstellungjqfVke00dqA4i_1280x1280.webp"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://www.jansen-versand.de/media/image/28/7f/a3/meisterwerkstattfCXmrNiQ3Rheq_1280x1280.webp"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://www.jansen-versand.de/media/image/75/d5/23/versand_de_1280x1280.webp"
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;
