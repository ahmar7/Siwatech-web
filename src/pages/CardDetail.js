import React from "react";
import Header from "../Layout/Header";

import Footer from "../Layout/Footer";
import Breadcrum from "../components/Home/Breadcrum";
import Content from "../components/CardDetail/Content";
import Top from "../components/GoTop/GoTop";
// import MainBody from "../../components/Miscellaneous/mainBody";

const CardDetail = () => {
  let pageName = "Land-Forstwirtschaft";
  return (
    <>
      <Top />
      <Header />
      <section className="content-main  container block-group is--ctl-custom is--act-index">
        <Breadcrum pageName={pageName} />
        <div className="content-main--inner">
          <Content />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CardDetail;
