import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import touchFooter from "../assets/img/image.jpeg";
const Footer = () => {
  const [activeClass, setactiveClass] = useState(false);
  window.addEventListener("scroll", function () {
    // let header = this.document.querySelector("#to_tel");

    if (window.scrollY > 150) {
      setactiveClass(true);
    } else {
      setactiveClass(false);
    }
  });
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer--columns block-group">
          <div className="footer--column column--menu block">
            <div className="column--headline">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>information</font>
              </font>
            </div>
            <nav className="column--navigation column--content" style={{}}>
              <ul className="navigation--list" role="menu">
                <li className="navigation--entry" role="menuitem">
                  <a
                    className="navigation--link"
                    href="https://www.siwatec-gmbh.de/UnsereProdukte"
                    title="UnsereProdukte"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Produktpalette
                      </font>
                    </font>
                  </a>
                </li>
                <li className="navigation--entry" role="menuitem">
                  <a
                    className="navigation--link"
                    href="https://www.siwatec-gmbh.de/rechtliches"
                    title="UnsereAGB"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Unsere AGB
                      </font>
                    </font>
                  </a>
                </li>
                <li className="navigation--entry" role="menuitem">
                  <a
                    className="navigation--link"
                    href="https://www.siwatec-gmbh.de/rechtliches#Widerrufsrecht"
                    title="Widerrufsrecht"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Widerrufsrecht
                      </font>
                    </font>
                  </a>
                </li>
                <li className="navigation--entry" role="menuitem">
                  <a
                    className="navigation--link"
                    href="https://www.siwatec-gmbh.de/rechtliches#Datenschutzerklaerung"
                    title="Datenschutzerklaerung"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Datenschutzerklärung
                      </font>
                    </font>
                  </a>
                </li>

                <li className="navigation--entry" role="menuitem">
                  <a
                    className="navigation--link"
                    href="https://www.siwatec-gmbh.de/rechtliches#liefer-undversandbedingungen"
                    title="Liefer- und Versandbedingungen"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Liefer- und Versandbedingungen
                      </font>
                    </font>
                  </a>
                </li>

                <li className="navigation--entry" role="menuitem">
                  <a
                    className="navigation--link"
                    href="https://www.siwatec-gmbh.de/rechtliches"
                    title="GarantieGewaehrleistung"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Garantie und Gewährleistung
                      </font>
                    </font>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer--column column--menu block">
            <div className="column--headline">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Über uns</font>
              </font>
            </div>
            <nav className="column--navigation column--content" style={{}}>
              <ul className="navigation--list" role="menu">
                <li className="navigation--entry" role="menuitem">
                  <a
                    className="navigation--link"
                    href="https://www.siwatec-gmbh.de/impressum"
                    title="Impressum"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Impressum
                      </font>
                    </font>
                  </a>
                </li>
                <li className="navigation--entry" role="menuitem">
                  <a
                    className="navigation--link"
                    href="https://www.siwatec-gmbh.de/Uberuns"
                    title="Über uns"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Über uns</font>
                    </font>
                  </a>
                </li>
                <li className="navigation--entry" role="menuitem">
                  <a
                    className="navigation--link"
                    href="https://www.siwatec-gmbh.de/faq"
                    title="FAQ"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>FAQ</font>
                    </font>
                  </a>
                </li>
                <li className="navigation--entry" role="menuitem">
                  <a
                    className="navigation--link"
                    href="https://www.siwatec-gmbh.de/kontakt"
                    title="Kontakt"
                    target="_self"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Kontakt</font>
                    </font>
                  </a>
                </li>

                <li className="navigation--entry" role="menuitem">
                  <a
                    className="navigation--link"
                    href="https://www.siwatec-gmbh.de/rechtliches"
                    title="Rechtliches"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Rechtliches
                      </font>
                    </font>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer--column column--social is--first block">
            <div className="column--headline">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Social Media / FAQ
                </font>
              </font>
            </div>
            <div className="column--content" style={{}}>
              <a
                href="http://www.youtube.com/@siwatecgmbh"
                title="Youtube"
                target="_blank"
                className="youtube"
                rel="nofollow noopener"
              >
                <span>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Unser YouTube Kanal
                    </font>
                  </font>
                </span>
              </a>
              <a
                href="https://www.facebook.com/siwatec-gmbh-aachen"
                title="Facebook"
                target="_blank"
                className="facebook"
                rel="nofollow noopener"
              >
                <span>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Folgen Sie uns auf Facebook!
                    </font>
                  </font>
                </span>
              </a>
              <a
                href="https://www.instagram.com/siwatec-aachen"
                title="Instagram"
                target="_blank"
                className="instagram"
                rel="nofollow noopener"
              >
                <span>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Folgen Sie uns auf Instagram!
                    </font>
                  </font>
                </span>
              </a>
              <NavLink to="/faq" title="FAQ" className="faq">
                <span>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Häufig gestellte Fragen
                    </font>
                  </font>
                </span>
              </NavLink>
            </div>
          </div>
          <div className="footer--column column--workshop is--last block">
            <div className="column--headline">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Mit Herzblut an jedes Bauteil
                </font>
              </font>
            </div>
            <div className="column--conten" style={{}}>
              <a href="">
                <img src={touchFooter} alt="" />
              </a>
              {/* <a href="" title="Workshop">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Workshop</font>
                </font>
              </a> */}
            </div>
          </div>
        </div>
        <div className="footer--bottom">
          <div className="footer--vat-info">
            <p className="vat-info--text">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Alle Preise inkl. gesetzl.
                </font>
                <font style={{ verticalAlign: "inherit" }}>
                  MwSt. zuzüglich Versandkosten, sofern nicht anders angegeben.
                </font>
              </font>
              <br />
              <sup>
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>1</font>
                </font>
              </sup>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  {" "}
                  Lieferzeit innerhalb Deutschlands 6-10 Werktage und für das
                  Ausland 8-15 Werktage
                </font>
              </font>
            </p>
          </div>
          <div className="container footer-minimal">
            <div className="footer--service-menu">
              <ul className="service--list is--rounded" role="menu">
                <li className="service--entry" role="menuitem">
                  <a
                    className="service--link"
                    href="https://www.siwatec-gmbh.de/impressum"
                    title="Impressum"
                  >
                    Impressum
                  </a>
                </li>
                <li className="service--entry" role="menuitem">
                  <a
                    className="service--link"
                    href="https://www.siwatec-gmbh.de/widerrufsbelehrung"
                    title="Widerrufsbelehrung"
                  >
                    Widerrufsbelehrung
                  </a>
                </li>
                <li className="service--entry" role="menuitem">
                  <a
                    className="service--link"
                    href="https://www.siwatec-gmbh.de/bestellung-bezahlung"
                    title="Bestellung & Bezahlung"
                  >
                    Bestellung &amp; Bezahlung
                  </a>
                </li>
                <li className="service--entry" role="menuitem">
                  <a
                    className="service--link"
                    href="https://www.siwatec-gmbh.de/versandinformationen"
                    title="Versandinformationen"
                  >
                    Versandinformationen
                  </a>
                </li>
                <li className="service--entry" role="menuitem">
                  <a
                    className="service--link"
                    href="https://www.siwatec-gmbh.de/agb"
                    title="AGB"
                  >
                    AGB
                  </a>
                </li>
                <li className="service--entry" role="menuitem">
                  <a
                    className="service--link"
                    href="https://www.siwatec-gmbh.de/kontaktformular"
                    title="Kontakt"
                    target="_self"
                  >
                    Kontakt
                  </a>
                </li>
                <li className="service--entry" role="menuitem">
                  <a
                    className="service--link"
                    href="https://www.siwatec-gmbh.de/media/pdf/rk_ergaenzende_agbs_zum_ratenkauf_by-easycredit_2023.pdf"
                    title="AGB easyCredit-Ratenkauf"
                    target="_blank"
                  >
                    AGB easyCredit-Ratenkauf
                  </a>
                </li>
                <li className="service--entry" role="menuitem">
                  <a
                    className="service--link"
                    href="https://www.siwatec-gmbh.de/datenschutz"
                    title="Datenschutz"
                  >
                    Datenschutz
                  </a>
                </li>
                <li className="service--entry" role="menuitem">
                  <a
                    className="service--link"
                    href="https://www.siwatec-gmbh.de/batterieverordnung"
                    title="Batterieverordnung"
                  >
                    Batterieverordnung
                  </a>
                </li>
                <li className="service--entry" role="menuitem">
                  <a
                    className="service--link"
                    href="https://www.siwatec-gmbh.de/anfahrt"
                    title="Anfahrt"
                  >
                    Anfahrt
                  </a>
                </li>
                <li className="service--entry" role="menuitem">
                  <a
                    className="service--link"
                    href="https://www.siwatec-gmbh.de/ersatzteile-reklamationen"
                    title="Ersatzteile & Reklamationen"
                  >
                    Ersatzteile &amp; Reklamationen
                  </a>
                </li>
                <li className="service--entry" role="menuitem">
                  <a
                    className="service--link"
                    href="https://www.siwatec-gmbh.de/haeufig-gestellte-fragen-faq"
                    title="Häufig gestellte Fragen (FAQ)"
                  >
                    Häufig gestellte Fragen (FAQ)
                  </a>
                </li>
                <li className="service--entry" role="menuitem">
                  <a
                    className="service--link"
                    href="javascript:openCookieConsentManager()"
                    title="Cookie-Einstellungen"
                  >
                    Cookie-Einstellungen
                  </a>
                </li>
                <li className="service--entry" role="menuitem">
                  <a
                    className="service--link"
                    href="https://www.siwatec-gmbh.de/inbetriebnahme-der-maschine"
                    title="Inbetriebnahme der Maschine "
                  >
                    Inbetriebnahme der Maschine
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer--copyright left">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Copyright © 2023 Siwatec GmbH
              </font>
            </font>
          </div>

          <br className="cf" />
        </div>
      </div>
      <a
        className={activeClass ? "icon--arrow-up aktiv" : "icon--arrow-up"}
        style={{ justifyContent: "center" }}
        id="to_top"
        href="#top"
      ></a>
      <a
        href="tel:+4924194577181"
        id="to_tel"
        className={activeClass ? "  aktiv" : ""}
      >
        <i className="icon--phone" />
      </a>
      <a
        href="mailto:kontakt@siwatec-gmbh.de"
        id="to_tel"
        className={activeClass ? "  aktiv difference" : ""}
      >
        <i class="fa-solid fa-envelope"></i>
      </a>
    </footer>
  );
};

export default Footer;
