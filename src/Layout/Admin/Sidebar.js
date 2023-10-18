import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import "./sideBar.css";
import { toast } from "react-toastify";
import { baseUrl } from "../../utils/Constant";

const SideBar = () => {
  let Navigate = useNavigate();
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [mblDash, setmblDash] = useState(false);
  let toggleDash = () => {
    if (mblDash === false) {
      setmblDash(true);
    } else {
      setmblDash(false);
    }
  };
  let toggleActive1 = () => {
    setState2(false);
    setState3(false);
    setState4(false);
    if (state1 === true) {
      setState1(false);
    } else {
      setState1(true);
    }
  };
  let toggleActive2 = () => {
    setState1(false);
    setState3(false);
    setState4(false);
    if (state2 === true) {
      setState2(false);
    } else {
      setState2(true);
    }
  };
  let toggleActive3 = () => {
    setState1(false);
    setState2(false);
    setState4(false);
    if (state3 === true) {
      setState3(false);
    } else {
      setState3(true);
    }
  };
  let toggleActive4 = () => {
    setState1(false);
    setState3(false);
    setState2(false);
    if (state4 === true) {
      setState4(false);
    } else {
      setState4(true);
    }
  };
  //
  const [isLoading, setisLoading] = useState(true);
  let Logout = async () => {
    try {
      let res = await fetch(`${baseUrl}logout`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      // let data = JSON.parse(res
      if (res.status === 200) {
        Navigate("/admin-login");
      } else if (res.status === 500) {
        toast.error("Something went wrong, please try again later");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setisLoading(false);
    }
  };

  //
  return (
    <>
      <nav
        id="sidenav-main"
        className="navbar-vertical fixed-left navbar-light bg-white navbar navbar-expand-md"
      >
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" onClick={toggleDash}>
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="pt-0 navbar-brand logo-name" to="/">
            Siwatech
          </Link>
          <ul className="align-items-center d-md-none nav">
            <li className="dropdown nav-item">
              <a
                aria-haspopup="true"
                href="#"
                className="nav-link"
                aria-expanded="false"
              >
                <div className="align-items-center media">
                  <span className="avatar avatar-sm rounded-circle"></span>
                </div>
              </a>
            </li>
          </ul>
          <div
            className={
              mblDash
                ? "collapse navbar-collapse active-mb"
                : "collapse navbar-collapse"
            }
          >
            <div className="navbar-collapse-header d-md-none">
              <div className="row">
                <div className="collapse-brand left-align col-6">
                  <Link to="/">
                    <h1 className="logo-name">Siwatech</h1>
                  </Link>
                </div>
                <div className="collapse-close col-6">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleDash}
                  >
                    <span />
                    <span />
                  </button>
                </div>
              </div>
            </div>

            <ul className="navbar-nav dash-head">
              <li
                onClick={toggleActive1}
                className={state1 ? "nav-item drop-active" : "nav-item"}
              >
                <div
                  aria-current="page"
                  className="nav-link nav-bg  pointer-cur "
                >
                  Home
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul className="bgs">
                  <li className="nav-item">
                    <NavLink to="/slider-update" className="nav-link ">
                      Slider
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/banners-update" className="nav-link ">
                      Banner
                    </NavLink>{" "}
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about-update" className="nav-link ">
                      About
                    </NavLink>{" "}
                  </li>
                </ul>
              </li>
              <li
                onClick={toggleActive2}
                className={state2 ? "nav-item drop-active" : "nav-item"}
              >
                <div
                  aria-current="page"
                  className="nav-link nav-bg  pointer-cur "
                >
                  Miscellaneous
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul className="bgs">
                  <li className="nav-item">
                    <NavLink to="/miscBanner-update" className="nav-link ">
                      Banner Update
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/addMisc-update" className="nav-link ">
                      Add Product
                    </NavLink>{" "}
                  </li>
                  <li className="nav-item">
                    <NavLink to="/allMisc-products" className="nav-link ">
                      All Products
                    </NavLink>{" "}
                  </li>
                </ul>
              </li>
              <li
                onClick={toggleActive3}
                className={state3 ? "nav-item drop-active" : "nav-item"}
              >
                <div
                  aria-current="page"
                  className="nav-link nav-bg  pointer-cur "
                >
                  Land Forstwirtschaft
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul className="bgs">
                  <li className="nav-item">
                    <NavLink to="/landBanner-update" className="nav-link ">
                      Banner Update
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/addLand-update" className="nav-link ">
                      Add Product
                    </NavLink>{" "}
                  </li>
                  <li className="nav-item">
                    <NavLink to="/allLand-products" className="nav-link ">
                      All Products
                    </NavLink>{" "}
                  </li>
                </ul>
              </li>
              <li
                onClick={toggleActive4}
                className={state4 ? "nav-item drop-active" : "nav-item"}
              >
                <div
                  aria-current="page"
                  className="nav-link nav-bg  pointer-cur "
                >
                  Footer
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul className="bgs">
                  <li className="nav-item">
                    <NavLink to="/socialLink-update" className="nav-link ">
                      Social Links
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/socialFeature-update" className="nav-link ">
                      Featured footer
                    </NavLink>{" "}
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/header-update"
                  aria-current="page"
                  className="nav-link nav-bg  pointer-cur "
                >
                  Header
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/information-update"
                  aria-current="page"
                  className="nav-link nav-bg  pointer-cur "
                >
                  Information Update
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/update-profile"
                  aria-current="page"
                  className="nav-link nav-bg  pointer-cur "
                >
                  Update Profile
                </NavLink>
              </li>
              <li onClick={Logout} className="nav-item">
                <div
                  aria-current="page"
                  className="nav-link nav-bg  pointer-cur "
                >
                  Logout
                </div>
              </li>
            </ul>
            <hr className="my-3" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
