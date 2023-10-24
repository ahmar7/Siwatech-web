import React, { useEffect } from "react";
import Header from "../Layout/Header";
import Banner from "../components/Home/Banner";
import CardSlider from "../components/Home/CardSlider";
import About from "../components/Home/About";
import Footer from "../Layout/Footer";
import Top from "../components/GoTop/GoTop";

const Home = () => {
  useEffect(() => {
    document.title = "SIWATEC - Home";
  });
  return (
    <>
      <Top />
      <Header />
      <section className="content-main  container block-group">
        <div className="content-main--inner">
          <div className="content--wrapper">
            <div className="content content--home">
              <Banner />
              <CardSlider />
              <About />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
