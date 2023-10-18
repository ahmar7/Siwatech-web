import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/Constant";
import webLogo from "../assets/img/Logo.webp";
import Albert from "../assets/img/albert.png";
const Header = () => {
  const [isActive, setisActive] = useState(false);

  let activeToggle = () => {
    if (isActive === true) {
      setisActive(false);
    } else {
      setisActive(true);
    }
  };

  return (
    <>
      <header className="header-main">
        <div className="top-bar">
          <div className="container block-group">
            <nav className="top-bar--navigation block" role="menubar">
              <nav className="top-bar--navigation block" role="menubar">
                {/* <div className="langselect top-bar--language navigation--entry">
                  <a href="https://www.siwatec-gmbh.de">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 300 180"
                    >
                      <path d="M0 0h300v60H0V0z" />
                      <path fill="#D00" d="M0 60h300v60H0V60z" />
                      <path fill="#FFCE00" d="M0 120h300v60H0v-60z" />
                    </svg>
                    <span>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          German{" "}
                        </font>
                      </font>
                    </span>
                  </a>
                  <font style={{ verticalAlign: "inherit" }}>
                    <a href="https://www.siwatec-gmbh.com">
                      <span>
                        <font style={{ verticalAlign: "inherit" }}>
                          English{" "}
                        </font>
                      </span>
                    </a>
                    <a href="https://www.siwatec-gmbh.nl">
                      <span>
                        <font style={{ verticalAlign: "inherit" }}>
                          Nederlands
                        </font>
                      </span>
                    </a>
                  </font>
                  <a href="https://www.siwatec-gmbh.com">
                    
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 300 180"
                    >
                      <path fill="#FFF" d="M0 0h299.843v179.98H0V0z" />
                      <path
                        fill="#CF142B"
                        d="M134.928 107.933v72.047h29.988v-72.047h134.928V71.952H164.916V0h-29.988v71.952H0v35.981h134.928z"
                      />
                      <path
                        fill="#00247D"
                        d="M174.915 58.259V0h97.08l-97.08 58.259zm0 63.461v58.26h97.08l-97.08-58.26zm-49.987 0v58.26H27.849l97.079-58.26zm0-63.461V0H27.849l97.079 58.259zM.001 16.73v43.261h72.087L.001 16.73zm299.842 0v43.261h-72.087l72.087-43.261zm0 146.519v-43.261h-72.087l72.087 43.261zm-299.842 0v-43.261h72.087L.001 163.249z"
                      />
                      <path
                        fill="#CF142B"
                        d="M299.843 0h-16.654L183.4 59.992h16.654L300 0M116.443 119.984H99.789L0 179.976h16.654l99.946-59.992M83.268 60.038h16.653L0 0v10.062l83.268 49.976zm133.255 59.924h-16.654L299.79 180v-10.062l-83.267-49.976z"
                      />
                    </svg>
                    <span>
                      <font style={{ verticalAlign: "inherit" }} />
                    </span>
                  </a>
                  <a href="https://www.siwatec-gmbh.nl"> 
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 300 180"
                    >
                      <path fill="#21468B" d="M0 120h300v60H0z" />
                      <path fill="#AE1C28" d="M0 0h300v60H0z" />
                    </svg>
                    <span>
                      <font style={{ verticalAlign: "inherit" }} />
                    </span>
                  </a>
                </div> */}
                {/* <div className="top-bar--currency navigation--entry">
                  <a href="/storelocator">
                    <i className="icon--location" />
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Our authorized dealers
                      </font>
                    </font>
                  </a>
                </div> */}
              </nav>
            </nav>
          </div>
        </div>
        <div className="container header--navigation">
          <div className="logo-main block-group" role="banner">
            <div className="logo--shop block">
              <a
                className="logo--link"
                href="https://www.siwatec-gmbh.de/"
                title="Siwatec - zu unserer Homepage"
              >
                <img src={webLogo} alt="Siwatec - zu unserer Homepage" />
              </a>
            </div>
          </div>
          <div className="albert block">
            <img src={Albert} />
            <div className="teaser-text">
              <span className="first">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Beratung</font>
                </font>
              </span>
              <a
                href="tel:+49 241 94577181"
                data-role="button"
                className="tracking_tn"
              >
                <font style={{ verticalAlign: "inherit" }}>
                  <font className="smalls" style={{ verticalAlign: "inherit" }}>
                    +49 241 94577181
                  </font>
                </font>
              </a>{" "}
              <div className="inner_text_style">
                {" "}
                <a href="mailto:kontakt@siwatec-gmbh.de">
                  {" "}
                  <span>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font
                        className="smalls2"
                        style={{ verticalAlign: "inherit" }}
                      >
                        kontakt@siwatec-gmbh.de
                      </font>
                    </font>
                  </span>{" "}
                </a>{" "}
              </div>
            </div>
          </div>
          <nav className="shop--navigation block-group">
            <ul className="navigation--list block-group" role="menubar">
              <li
                onClick={activeToggle}
                className="navigation--entry entry--menu-left"
                role="menuitem"
              >
                <a
                  className="entry--link entry--trigger btn is--icon-left"
                  href="#offcanvas--left"
                  data-offcanvas="true"
                  data-offcanvasselector=".sidebar-main"
                  aria-label="menu"
                >
                  <i className="icon--menu" />
                </a>
              </li>
              <li
                className="navigation--entry entry--search"
                role="menuitem"
                data-search="true"
                aria-haspopup="true"
                data-minlength={3}
              >
                <a
                  className="btn entry--link entry--trigger"
                  href="#show-hide--search"
                  title="Show/close search"
                  aria-label="Show/close search"
                >
                  <i className="icon--search" />
                  <span className="search--display">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Seek</font>
                    </font>
                  </span>
                </a>

                <div className="main-search--results" />
              </li>

              <li className="lis">
                <input type="text" placeholder="Search term..." />
              </li>
            </ul>
          </nav>
          <div className="container--ajax-cart" data-collapse-cart="true" />
        </div>
      </header>
      <nav className="navigation-main">
        <div
          className=" container js--menu-scroller"
          data-menu-scroller="true"
          data-listselector=".navigation--list.container"
          data-viewportselector=".navigation--list-wrapper"
        >
          <div className="navigation--list-wrapper flexes">
            <ul
              className="navigation--list  container js--menu-scroller--list"
              role="menubar"
              itemScope="itemscope"
              itemType="https://schema.org/SiteNavigationElement"
              style={{ bottom: "0px", marginTop: "0px" }}
            >
              <li
                className="navigation--entry js--menu-scroller--item"
                role="menuitem"
              >
                <NavLink to="/" className="navigation--link" itemProp="url">
                  <span itemProp="name">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Home</font>
                    </font>
                  </span>
                </NavLink>
              </li>
              <li
                className="navigation--entry js--menu-scroller--item"
                role="menuitem"
              >
                <NavLink
                  to="/Uberuns"
                  className="navigation--link"
                  itemProp="url"
                >
                  <span itemProp="name">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Über uns{" "}
                      </font>
                    </font>
                  </span>
                </NavLink>
              </li>
              <li
                className="navigation--entry js--menu-scroller--item"
                role="menuitem"
              >
                <NavLink
                  className="navigation--link"
                  to="/UnsereProdukte"
                  aria-label="Unsere Produkte"
                  itemProp="url"
                >
                  <span itemProp="name">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Unsere Produkte
                      </font>
                    </font>
                  </span>
                </NavLink>
              </li>
              <li
                className="navigation--entry js--menu-scroller--item"
                role="menuitem"
              >
                <NavLink className="navigation--link" to="/faq" itemProp="url">
                  <span itemProp="name">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>FAQ</font>
                    </font>
                  </span>
                </NavLink>
              </li>
              <li
                className="navigation--entry js--menu-scroller--item"
                role="menuitem"
              >
                <NavLink
                  className="navigation--link"
                  to="/kontakt"
                  itemProp="url"
                >
                  <span itemProp="name">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Kontakt</font>
                    </font>
                  </span>
                </NavLink>
              </li>
              <li
                className="navigation--entry js--menu-scroller--item"
                role="menuitem"
              >
                <NavLink
                  className="navigation--link"
                  to="/impressum"
                  itemProp="url"
                >
                  <span itemProp="name">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Impressum
                      </font>
                    </font>
                  </span>
                </NavLink>
              </li>
              <li
                className="navigation--entry js--menu-scroller--item"
                role="menuitem"
              >
                <NavLink
                  className="navigation--link"
                  to="/rechtliches"
                  itemProp="url"
                >
                  <span itemProp="name">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Rechtliches
                      </font>
                    </font>
                  </span>
                </NavLink>
              </li>

              {/* <li
                className="navigation--entry js--menu-scroller--item float-right"
                role="menuitem"
              >
                <NavLink
                  to="/admin-login"
                  className="navigation--link"
                  itemProp="url"
                >
                  <span itemProp="name">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <i class="fa-solid fa-right-to-bracket"></i> Admin Login
                      </font>
                    </font>
                  </span>
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      <section className="">
        <div className="">
          <aside
            className={
              isActive
                ? "sidebar-main off-canvas is--left is--active is--inactive active-cavy is--open"
                : "sidebar-main off-canvas is--left is--active is--inactive is--open"
            }
          >
            <div className="navigation--smartphone">
              <ul className="navigation--list ">
                <li
                  onClick={activeToggle}
                  className="navigation--entry entry--close-off-canvas"
                >
                  <a href="javascript:void(0)" className="navigation--link">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Close menu
                      </font>
                    </font>
                    <i className="icon--arrow-right" />
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="sidebar--categories-wrapper"
              data-subcategory-nav="true"
              data-maincategoryid={3}
              data-categoryid={0}
              data-fetchurl
            >
              <div className="shop-sites--container is--rounded">
                <ul
                  className="shop-sites--navigation sidebar--navigation navigation--list is--drop-down is--level0"
                  role="menu"
                >
                  <li className="navigation--entry" role="menuitem">
                    <NavLink
                      className="navigation--link"
                      to="/"
                      data-categoryid={3}
                    >
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Home</font>
                      </font>
                    </NavLink>
                  </li>
                  <li className="navigation--entry" role="menuitem">
                    <NavLink className="navigation--link" to="/UnsereProdukte">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Unsere Produkte
                        </font>
                      </font>
                    </NavLink>
                  </li>
                  <li className="navigation--entry" role="menuitem">
                    <NavLink className="navigation--link" to="/faq">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>FAQ</font>
                      </font>
                    </NavLink>
                  </li>
                  <li className="navigation--entry" role="menuitem">
                    <NavLink className="navigation--link" to="/kontakt">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Kontakt
                        </font>
                      </font>
                    </NavLink>
                  </li>
                  <li className="navigation--entry" role="menuitem">
                    <NavLink className="navigation--link" to="/impressum">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Impressum
                        </font>
                      </font>
                    </NavLink>
                  </li>
                  <li className="navigation--entry" role="menuitem">
                    <NavLink className="navigation--link" to="/rechtliches">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Rechtliches
                        </font>
                      </font>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Header;
