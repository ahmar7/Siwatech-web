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
                  href="/land-forstwirtschaft/"
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
                  href="/werkzeuge-maschinen/"
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
                  href="/brennholzverarbeitung/"
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
                  href="/sonstiges/"
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

        <div className="sidebar--usps">
          <div className="head">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Kontaktmöglichkeiten</font>
            </font>
          </div>
          <ul>
            <li>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Telefon: +49 241 94577181</font>
              </font>
            </li>
            <li>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Fax: +49 241 94577182</font>
              </font>
            </li>
            <li>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>kontakt@siwatec-gmbh.de</font>
              </font>
            </li>
          </ul>
        </div>
      </aside>

      <div className="content--wrapper">
        <div className="custom-page--content content block">
          <div className="content--custom">
            <h1 className="custom-page--tab-headline">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Kontakt</font>
              </font>
            </h1>
            <p>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Wir begrüßen Sie herzlich auf unserer Kontaktseite. Ihre Kommunikation ist uns wichtig, und wir legen großen Wert darauf, Ihnen stets mit Fachkompetenz und Präzision zur Seite zu stehen. Zögern Sie nicht, uns bei Fragen oder Anliegen zu kontaktieren. Wir streben danach, all Ihre Anfragen umgehend und fundiert zu bearbeiten.

                  <br />
                  <br />

                  <h2>Kontaktmöglichkeiten</h2>

                  <b>Telefonisch:</b><br />

                  Sie erreichen unser engagiertes Kundenservice-Team unter der Telefonnummer +49 241 94577181. Unsere Sprechzeiten sind von Montag bis Freitag von 09:00 bis 18:00 Uhr.

                  <br /><br />

                  <b>E-Mail:</b><br />

                  Zögern Sie nicht, uns per E-Mail unter kontakt@siwatec-gmbh.de zu kontaktieren. Wir bemühen uns, alle E-Mails innerhalb von 24 Stunden während der Geschäftswoche zu beantworten.

                  <br /><br />

                  <b>Postanschrift:</b><br />

                  Gerne können Sie uns auch schriftlich kontaktieren. Unsere Adresse lautet: Jülicherstraße 386, 52070 Aachen.

                  <br /><br />

                  <b>Geschäftszeiten:</b><br />

                  Montag bis Freitag: 09:00 - 18:00 Uhr

                  <br /><br />

                  Bitte beachten Sie, dass es während Stoßzeiten zu längeren Wartezeiten kommen kann. Wir empfehlen, bei weniger dringenden Anliegen uns per E-Mail zu kontaktieren. Unsere Mitarbeiter werden sich bemühen, Ihre Anfrage so schnell wie möglich zu bearbeiten.

                  <br />
                  <br />

                  <h2>Rückmeldungen</h2>

                  Wir schätzen Ihre Rückmeldungen sehr und sind dankbar für jeden Hinweis oder Verbesserungsvorschlag zu unseren Dienstleistungen und Produkten. Teilen Sie uns bitte mit, wenn Sie Anregungen oder auch Kritikpunkte haben.

                  <br />
                  <br />

                  <h2>Häufige Anfragen</h2>

                  Möglicherweise finden Sie Antworten auf Ihre Fragen auch in unserem Bereich für häufige Anfragen. Dort haben wir Informationen zu den gängigsten Themen zusammengestellt. Selbstverständlich freuen wir uns aber auch jederzeit über eine direkte Kontaktaufnahme, wenn Sie individuelle Anliegen oder Fragen haben.

                  <br />

                  Wir sind stets für Sie da und freuen uns darauf, Ihnen weiterzuhelfen.

                </font>
              </font>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
