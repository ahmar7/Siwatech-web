import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const CardSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 3,
    },
    mbllarge: {
      breakpoint: { max: 500, min: 350 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 350    , min: 0 },
      items: 1,
    },
  };
  let data = [
    {
      img: "https://siwatec-gmbh.de/resources/slider/art1.png",
      name: "SunPower - 420 W MAXEON 3 Black",
      price: "349,90 €",
    },
    {
      img: "https://siwatec-gmbh.de/resources/slider/art2.png",
      name: "SMA Sunny Boy Storage 5.0 NoWifi + BYD 5.1 (HVS)",
      price: "5990,99 €",
    },
    {
      img: "https://siwatec-gmbh.de/resources/slider/art3.png",
      name: "Viessmann Vitosol 200-FM SH2G Flachkollektor",
      price: "790,99 €",
    },
    {
      img: "https://siwatec-gmbh.de/resources/slider/art4.png",
      name: "LG Chem RESU 6.5 Energiespeicher",
      price: "3690,99 €",
    },
    {
      img: "https://siwatec-gmbh.de/resources/slider/art5.png",
      name: "LG Electronics Solarmodul 430Wp E6 NeON H",
      price: "299,99 €",
    },
    {
      img: "https://siwatec-gmbh.de/resources/slider/art6.png",
      name: "LG Chem RESU 10H Prime Energiespeicher",
      price: "4990,99 €",
    },
    {
      img: "https://siwatec-gmbh.de/resources/slider/art7.png",
      name: "SMA Sunny Tripower x 12-50, STP 12-50 Solar Wechselrichter",
      price: "2290,99 €",
    },
  ];
  return (
    <div className="-product-carousel">
      <Carousel
        swipeable={true}
        infinite={true}
        autoPlay={true}
        // centerMode={true}
        arrows={false}
        responsive={responsive}
        >





        {data.map((item, key) => {
          return (
            <div key={key} className="product-slider--item">
              <div className="product--box box--emotion">
                <div className="box--content">
                  <div className="product--badges"></div>
                  <div className="product--info">
                    <Link to="/UnsereProdukte" className="product--image">
                      <span className="image--element">
                        <span className="image--media">
                          <picture>
                            <img
                              loading="lazy"
                              src={item.img}
                              alt="product image"
                            />
                          </picture>
                        </span>
                      </span>
                    </Link>
                    <div className="product--details">
                      <a href="#" className="product--title">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            {item.name}
                          </font>
                        </font>
                      </a>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  {item.price}
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CardSlider;
