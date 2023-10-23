import React from "react";

const MainBody = () => {
  return (
    <>
      <aside className="sidebar-main is--left is--inactive" style={{}}>
        <div
          className="sidebar--categories-wrapper"
          data-subcategory-nav="true"
          data-maincategoryid={3}
          data-categoryid={3}
          data-fetchurl="/widgets/listing/getCustomPage/pageId/3"
        >
          <div className="categories--headline navigation--headline">
            Kategorien
          </div>
          <div className="sidebar--categories-navigation">
            <ul
              className="sidebar--navigation categories--navigation navigation--list is--drop-down is--level0 is--rounded"
              role="menu"
            >
              <li
                className="navigation--entry has--sub-children"
                role="menuitem"
              >
                <a
                  className="navigation--link link--go-forward"
                  href="https://www.siwatec-gmbh.de/land-forstwirtschaft/"
                  data-categoryid={1000181780}
                  data-fetchurl="/widgets/listing/getCategory/categoryId/1000181780"
                  title="Land- & Forstwirtschaft"
                >
                  Land- &amp; Forstwirtschaft
                  <span className="is--icon-right">
                    <i className="icon--arrow-right" />
                  </span>
                </a>
              </li>
              <li
                className="navigation--entry has--sub-children"
                role="menuitem"
              >
                <a
                  className="navigation--link link--go-forward"
                  href="https://www.siwatec-gmbh.de/werkzeuge-maschinen/"
                  data-categoryid={1000182149}
                  data-fetchurl="/widgets/listing/getCategory/categoryId/1000182149"
                  title="Werkzeuge & Maschinen"
                >
                  Werkzeuge &amp; Maschinen
                  <span className="is--icon-right">
                    <i className="icon--arrow-right" />
                  </span>
                </a>
              </li>
              <li
                className="navigation--entry has--sub-children"
                role="menuitem"
              >
                <a
                  className="navigation--link link--go-forward"
                  href="https://www.siwatec-gmbh.de/brennholzverarbeitung/"
                  data-categoryid={1000182153}
                  data-fetchurl="/widgets/listing/getCategory/categoryId/1000182153"
                  title="Brennholzverarbeitung"
                >
                  Brennholzverarbeitung
                  <span className="is--icon-right">
                    <i className="icon--arrow-right" />
                  </span>
                </a>
              </li>
              <li className="navigation--entry" role="menuitem">
                <a
                  className="navigation--link"
                  href="https://www.siwatec-gmbh.de/sonstiges/"
                  data-categoryid={1000182150}
                  data-fetchurl="/widgets/listing/getCategory/categoryId/1000182150"
                  title="Sonstiges"
                >
                  Sonstiges
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <div className="content--wrapper">
        <div className="custom-page--content content block">
          <div className="content--custom">
            <h1 className="custom-page--tab-headline">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Impressum</font>
              </font>
            </h1>
            <p>
            <b>Angaben gemäß § 5 TMG:</b><br />
            SIWATEC Anlagentechnik für mineralische Baustoffe GmbH <br />
            Jülicherstraße 386 <br />
            52070 Aachen <br /><br />

            <b>Vertreten durch:</b><br />
            Martin Werner<br /><br />

            <b>Kontakt:</b><br />
            <b>Telefon:</b> +49 241 94577181<br />
            <b>Fax:</b> +49 241 94577182<br />
            <b>E-Mail:</b> kontakt@siwatec-gmbh.de<br /><br />

            <b>Registergericht:</b> Amtsgericht Aachen<br />  
            <b>Registernummer:</b> HRB 6654<br /><br />

            <b>Umsatzsteuer-Identifikationsnummer:</b> DE 286171918<br /><br />

            <b>Aufsichtsbehörde:</b><br />
            Gewerbeaufsichtsamt Aachen<br />
            Peterstraße 44-46<br />
            52062 Aachen<br /><br />

            <b>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</b><br />
            Martin Werner<br />
            Jülicherstraße 307<br />
            52070 Aachen<br /><br />

            <b>Datenschutzhinweis:</b><br />
            Der Schutz Ihrer persönlichen Daten liegt uns am Herzen. Detaillierte Informationen zum Umgang mit Ihren Daten finden Sie in der Rubrik "Rechtliches" auf unserer Webseite.<br /><br />

            <b>Streitschlichtung:</b><br />
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.<br /><br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;