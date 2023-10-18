import React, { useEffect, useState } from "react";
import "./App.css";
import "./assets/css/main.css";
import "./assets/css/menuColor.css";
import Siders from "./components/Home/siders";
import ModalPopups from "./pages/ModalPopup";
import Router from "./router/router";
import "./assets/css/dashboard.css";

function ModalPopup() {
  return (
    <>
      {/* <ModalPopups /> */}
      {/* <Siders /> */}

      <div className="page-wrap">
        <Router />
      </div>
    </>
  );
}

export default ModalPopup;
