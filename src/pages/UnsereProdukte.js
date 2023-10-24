import React, { useState, useEffect } from "react";
import Header from "../Layout/Header";

import Footer from "../Layout/Footer";
import Breadcrum from "../components/Home/Breadcrum";
import Cards from "../components/UnsereProdukte/cards";
import Top from "../components/GoTop/GoTop";
// import MainBody from "../../components/Miscellaneous/mainBody";

const UnsereProdukte = () => {
  useEffect(() => {
    document.title = "SIWATEC - Unsere Produkte";
  });
  let pageName = "Unsere Produkte";
  return (
    <>
      <Top />
      <Header />
      <section className="content-main  container block-group is--ctl-custom is--act-index">
        <Breadcrum pageName={pageName} />
        <div className="content-main--inner">
          <Cards />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UnsereProdukte;
