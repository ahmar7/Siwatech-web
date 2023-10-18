import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Breadcrum from "../components/Home/Breadcrum";
import MainBody from "../components/Rechtliches/mainBody";
import Top from "../components/GoTop/GoTop";

const Rechtliches = () => {
  let pageName = "Rechtliches";
  return (
    <>
      <Top />
      <Header />
      <section className="content-main  container block-group is--ctl-custom is--act-index">
        <Breadcrum pageName={pageName} />
        <div className="content-main--inner">
          <MainBody />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Rechtliches;
