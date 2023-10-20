import React, { useEffect, useState } from "react";
import "./cards.css";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="content-main--inner">
      <div className="content--wrapper">
        <div className="content listing--content">
          <div className="banner--container">
            <picture>
              <source
                srcSet="https://siwatec-gmbh.de/resources/productpage/prodheader.png"
                media="(min-width: 48em)"
                type="image/webp"
              />
              <source
                srcSet="https://siwatec-gmbh.de/resources/productpage/prodheader.png"
                media="(min-width: 48em)"
              />
              <img
                loading="lazy"
                srcSet="https://siwatec-gmbh.de/resources/productpage/prodheadersmall.png"
                alt="Unsere Produkte"
                className="banner--img"
              />
            </picture>
          </div>
          <div
            className="hero-unit category--teaser panel has--border is--rounded toptext emptytext mobilejstext"
            id="toptext"
          >
            <div className="hero--text panel--body is--wide">
              <div className="teaser--text-long"></div>
            </div>
          </div>
          <div className="listing--wrapper visible--xl visible--l visible--m visible--s visible--xs">
            <div
              data-listing-actions="true"
              data-buffertime={0}
              className="listing--actions is--rounded"
            >
              <div className="action--filter-btn">
                <a
                  href="#"
                  className="filter--trigger btn is--small"
                  data-filter-trigger="true"
                  data-offcanvas="true"
                  data-offcanvasselector=".action--filter-options"
                  data-closebuttonselector=".filter--close-btn"
                >
                  <i className="icon--filter" />
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Filter</font>
                  </font>
                  <span className="action--collapse-icon" />
                </a>
              </div>
              <form
                className="action--sort action--content block"
                method="get"
                data-action-form="true"
              >
                <input type="hidden" name="p" defaultValue={1} />
                <label htmlFor="o" className="sort--label action--label">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Sortieren nach</font>
                  </font>
                </label>
                <div className="sort--select select-field">
                  <select
                    id="o"
                    name="o"
                    className="sort--field action--field"
                    data-auto-submit="true"
                    data-loadingindicator="false"
                  >
                    <option value={8} selected="selected">
                      relevance
                    </option>
                    <option value={2}>Beliebtheit</option>
                    <option value={3}>Niedrigster Preis</option>
                    <option value={4}>Höchster Preis</option>
                    <option value={5}>Alphabetisch</option>
                  </select>
                </div>
              </form>
              <div className="action--filter-options off-canvas is--ajax-reload">
                <a
                  href="#"
                  className="filter--close-btn"
                  data-show-products-text="%s Produkt(e) anzeigen"
                >
                  Filter schließen <i className="icon--arrow-right" />
                </a>
                <div className="filter--container">
                  <form
                    id="filter"
                    method="get"
                    data-filter-form="true"
                    data-is-in-sidebar="false"
                    data-listing-url=""
                    data-is-filtered={0}
                    data-load-facets="true"
                    data-instant-filter-result="true"
                    className=" is--instant-filter"
                  >
                    <input type="hidden" name="p" defaultValue={1} />
                    <input type="hidden" name="o" defaultValue={8} />
                    <input type="hidden" name="n" defaultValue={48} />
                    <div className="filter--facet-container">
                      <div
                        className="filter-panel filter--value facet--immediate_delivery"
                        data-filter-type="value"
                        data-facet-name="immediate_delivery"
                        data-field-name="delivery"
                      >
                        <div className="filter-panel--flyout">
                          <label
                            className="filter-panel--title"
                            htmlFor="delivery"
                            title="Sofort lieferbar"
                          >
                            Sofort lieferbar
                          </label>
                          <span className="filter-panel--input filter-panel--checkbox">
                            <input
                              type="checkbox"
                              id="delivery"
                              name="delivery"
                              defaultValue={1}
                            />
                            <span className="input--state checkbox--state">
                              &nbsp;
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="filter-panel filter--range facet--price"
                        data-filter-type="range"
                        data-facet-name="price"
                        data-field-name="price"
                      >
                        <div className="filter-panel--flyout">
                          <label className="filter-panel--title" title="Preis">
                            Preis
                          </label>
                          <span className="filter-panel--icon" />
                          <div className="filter-panel--content">
                            <div
                              className="range-slider"
                              data-range-slider="true"
                              data-roundpretty="false"
                              data-labelformat="0,00 €"
                              data-suffix
                              data-stepcount={100}
                              data-stepcurve="linear"
                              data-startmin="39.95"
                              data-digits={2}
                              data-startmax={7590}
                              data-rangemin="39.95"
                              data-rangemax={7590}
                            >
                              <div className="range-slider--container">
                                <div
                                  className="range-slider--range-bar"
                                  style={{ left: "0%", width: "100%" }}
                                >
                                  <div className="range-slider--handle is--min" />
                                  <div className="range-slider--handle is--max" />
                                </div>
                              </div>
                              <input
                                type="hidden"
                                id="min"
                                name="min"
                                data-range-input="min"
                                defaultValue="39.95"
                                disabled="disabled"
                              />
                              <input
                                type="hidden"
                                id="max"
                                name="max"
                                data-range-input="max"
                                defaultValue={7590}
                                disabled="disabled"
                              />
                              <div className="filter-panel--range-info">
                                <span className="range-info--min">von</span>
                                <label
                                  className="range-info--label"
                                  htmlFor="min"
                                  data-range-label="min"
                                >
                                  39,95&nbsp;€{" "}
                                </label>
                                <span className="range-info--max">bis</span>
                                <label
                                  className="range-info--label"
                                  htmlFor="max"
                                  data-range-label="max"
                                >
                                  7590,00&nbsp;€{" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="filter-panel filter--rating facet--vote_average"
                        data-filter-type="rating"
                        data-facet-name="vote_average"
                        data-field-name="rating"
                      >
                        <div className="filter-panel--flyout">
                          <label
                            className="filter-panel--title"
                            title="Bewertung"
                          >
                            Bewertung
                          </label>
                          <span className="filter-panel--icon" />
                          <div className="filter-panel--content">
                            <div className="filter-panel--star-rating">
                              <label
                                htmlFor="rating_4"
                                className="rating-star--outer-container"
                              >
                                <input
                                  className="is--hidden"
                                  type="checkbox"
                                  name="rating"
                                  id="rating_4"
                                  defaultValue={4}
                                />
                                <i className="icon--star" />
                                <i className="icon--star" />
                                <i className="icon--star" />
                                <i className="icon--star" />
                                <i className="icon--star-empty" />
                                <span className="rating-star--suffix">
                                  &amp; mehr
                                </span>
                              </label>
                              <label
                                htmlFor="rating_3"
                                className="rating-star--outer-container"
                              >
                                <input
                                  className="is--hidden"
                                  type="checkbox"
                                  name="rating"
                                  id="rating_3"
                                  defaultValue={3}
                                />
                                <i className="icon--star" />
                                <i className="icon--star" />
                                <i className="icon--star" />
                                <i className="icon--star-empty" />
                                <i className="icon--star-empty" />
                                <span className="rating-star--suffix">
                                  &amp; mehr
                                </span>
                              </label>
                              <label
                                htmlFor="rating_2"
                                className="rating-star--outer-container"
                              >
                                <input
                                  className="is--hidden"
                                  type="checkbox"
                                  name="rating"
                                  id="rating_2"
                                  defaultValue={2}
                                />
                                <i className="icon--star" />
                                <i className="icon--star" />
                                <i className="icon--star-empty" />
                                <i className="icon--star-empty" />
                                <i className="icon--star-empty" />
                                <span className="rating-star--suffix">
                                  &amp; mehr
                                </span>
                              </label>
                              <label
                                htmlFor="rating_1"
                                className="rating-star--outer-container"
                              >
                                <input
                                  className="is--hidden"
                                  type="checkbox"
                                  name="rating"
                                  id="rating_1"
                                  defaultValue={1}
                                />
                                <i className="icon--star" />
                                <i className="icon--star-empty" />
                                <i className="icon--star-empty" />
                                <i className="icon--star-empty" />
                                <i className="icon--star-empty" />
                                <span className="rating-star--suffix">
                                  &amp; mehr
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="filter--active-container"
                      data-reset-label="Alle Filter zurücksetzen"
                    ></div>
                  </form>
                </div>
              </div>
              <div className="listing--paging panel--paging">
                <div className="right"></div>
                <form
                  className="action--per-page action--content block"
                  method="get"
                  data-action-form="true"
                >
                  <input type="hidden" name="p" defaultValue={1} />
                  <label htmlFor="n" className="per-page--label action--label">
                    Artikel pro Seite
                  </label>
                  <div className="per-page--select select-field">
                    <select
                      id="n"
                      name="n"
                      className="per-page--field action--field"
                      data-auto-submit="true"
                      data-loadingindicator="false"
                    >
                      <option value={12}>12</option>
                      <option value={24}>24</option>
                      <option value={48} selected="selected">
                        48
                      </option>
                      <option value={72}>72</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div className="listing--container">
              <div className="listing-no-filter-result">
                <div className="alert is--info is--rounded is--hidden">
                  <div className="alert--icon">
                    <i className="icon--element icon--info" />
                  </div>
                  <div className="alert--content">
                    Für die Filterung wurden keine Ergebnisse gefunden!
                  </div>
                </div>
              </div>
              <div
                className="listing"
                data-ajax-wishlist="true"
                data-compare-ajax="true"
              >
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1028411524}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <Link
                        to="/product-detail"
                        title="SunPower - 420 W MAXEON 3 Black"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="http://siwatec-gmbh.de/resources/productpage/unsereprodukte/prod1.png"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="http://siwatec-gmbh.de/resources/productpage/unsereprodukte/prod1.png"
                                alt="SunPower - 420 W MAXEON 3 Black"
                                title="SunPower - 420 W MAXEON 3 Black"
                              />
                            </picture>
                          </span>
                        </span>
                      </Link>
                      <Link
                        to="/product-detail"
                        className="product--title"
                        title="SunPower - 420 W MAXEON 3 Black"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            SunPower - 420 W MAXEON 3 Black
                          </font>
                        </font>
                      </Link>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  349,90 €
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1032996241}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <Link
                        to="/product-detail"
                        title="LG Chem RESU 10H Prime Energiespeicher"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="http://siwatec-gmbh.de/resources/productpage/unsereprodukte/prod2.png"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="http://siwatec-gmbh.de/resources/productpage/unsereprodukte/prod2.png"
                                alt="LG Chem RESU 10H Prime Energiespeicher"
                                title="LG Chem RESU 10H Prime Energiespeicher"
                              />
                            </picture>
                          </span>
                        </span>
                      </Link>
                      <Link
                        to="/product-detail"
                        className="product--title"
                        title="LG Chem RESU 10H Prime Energiespeicher">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            LG Chem RESU 10H Prime Energiespeicher
                          </font>
                        </font>
                      </Link>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  4990,99 €
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1033180289}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <Link
                        to="/product-detail"
                        title="Viessmann Vitosol 200-FM SH2G Flachkollektor"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="http://siwatec-gmbh.de/resources/productpage/unsereprodukte/prod3.png"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="http://siwatec-gmbh.de/resources/productpage/unsereprodukte/prod3.png"
                                alt="Viessmann Vitosol 200-FM SH2G Flachkollektor"
                                title="Viessmann Vitosol 200-FM SH2G Flachkollektor"
                              />
                            </picture>
                          </span>
                        </span>
                      </Link>
                      <Link
                        to="/product-detail"
                        className="product--title"
                        title="Viessmann Vitosol 200-FM SH2G Flachkollektor"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Viessmann Vitosol 200-FM SH2G Flachkollektor
                          </font>
                        </font>
                      </Link>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  790,99 €
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1037482396}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <Link
                        to="/product-detail"
                        title="SMA Sunny Boy Storage 5.0 NoWifi + BYD 5.1 (HVS)"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="http://siwatec-gmbh.de/resources/productpage/unsereprodukte/prod4.png"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="http://siwatec-gmbh.de/resources/productpage/unsereprodukte/prod4.png"
                                alt="SMA Sunny Boy Storage 5.0 NoWifi + BYD 5.1 (HVS)"
                                title="SMA Sunny Boy Storage 5.0 NoWifi + BYD 5.1 (HVS)"
                              />
                            </picture>
                          </span>
                        </span>
                      </Link>
                      <Link
                        to="/product-detail"
                        className="product--title"
                        title="SMA Sunny Boy Storage 5.0 NoWifi + BYD 5.1 (HVS)"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            SMA Sunny Boy Storage 5.0 NoWifi + BYD 5.1 (HVS)
                          </font>
                        </font>
                      </Link>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  5990,99 €
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1033180391}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <Link
                        to="/product-detail"
                        title="LG Electronics Solarmodul 430Wp E6 NeON H"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="http://siwatec-gmbh.de/resources/productpage/unsereprodukte/prod5.png"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="http://siwatec-gmbh.de/resources/productpage/unsereprodukte/prod5.png"
                                alt="LG Electronics Solarmodul 430Wp E6 NeON H"
                                title="LG Electronics Solarmodul 430Wp E6 NeON H"
                              />
                            </picture>
                          </span>
                        </span>
                      </Link>
                      <Link
                        to="/product-detail"
                        className="product--title"
                        title="LG Electronics Solarmodul 430Wp E6 NeON H"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            LG Electronics Solarmodul 430Wp E6 NeON H
                          </font>
                        </font>
                      </Link>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  299,99 €
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1040579916}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <Link
                        to="/product-detail"
                        title="SMA Sunny Tripower x 12-50, STP 12-50 Solar Wechselrichter"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="http://siwatec-gmbh.de/resources/productpage/unsereprodukte/prod6.png"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="http://siwatec-gmbh.de/resources/productpage/unsereprodukte/prod6.png"
                                alt="SMA Sunny Tripower x 12-50, STP 12-50 Solar Wechselrichter"
                                title="SMA Sunny Tripower x 12-50, STP 12-50 Solar Wechselrichter"
                              />
                            </picture>
                          </span>
                        </span>
                      </Link>
                      <Link
                        to="/product-detail"
                        className="product--title"
                        title="SMA Sunny Tripower x 12-50, STP 12-50 Solar Wechselrichter"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            SMA Sunny Tripower x 12-50, STP 12-50 Solar Wechselrichter
                          </font>
                        </font>
                      </Link>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  2290,99 €
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1022227660}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <Link
                        to="/product-detail"
                        title="LG Chem RESU 6.5 Energiespeicher"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="http://siwatec-gmbh.de/resources/productpage/unsereprodukte/prod7.png"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="http://siwatec-gmbh.de/resources/productpage/unsereprodukte/prod7.png"
                                alt="LG Chem RESU 6.5 Energiespeicher"
                                title="LG Chem RESU 6.5 Energiespeicher"
                              />
                            </picture>
                          </span>
                        </span>
                      </Link>
                      <Link
                        to="/product-detail"
                        className="product--title"
                        title="LG Chem RESU 6.5 Energiespeicher"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            LG Chem RESU 6.5 Energiespeicher
                          </font>
                        </font>
                      </Link>
                      <div className="product--rating-container">
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  3690,99 €
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1009969155}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <Link
                        to="/product-detail"
                        title="Felicity-Solar 48V Batteriespeicher 8,7 kWh"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="http://siwatec-gmbh.de/resources/productpage/unsereprodukte/prod8.png"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="http://siwatec-gmbh.de/resources/productpage/unsereprodukte/prod8.png"
                                alt="Felicity-Solar 48V Batteriespeicher 8,7 kWh"
                                title="Felicity-Solar 48V Batteriespeicher 8,7 kWh"
                              />
                            </picture>
                          </span>
                        </span>
                      </Link>
                      <Link
                        to="/product-detail"
                        className="product--title"
                        title="Felicity-Solar 48V Batteriespeicher 8,7 kWh"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Felicity-Solar 48V Batteriespeicher 8,7 kWh
                          </font>
                        </font>
                      </Link>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €7,590.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="listing--bottom-paging">
              <div className="listing--paging panel--paging">
                <div className="right"></div>
                <form
                  className="action--per-page action--content block"
                  method="get"
                  data-action-form="true">
                  <input type="hidden" name="p" defaultValue={1} />
                  <label htmlFor="n" className="per-page--label action--label">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        8 Elemente verfügbar
                      </font>
                    </font>
                  </label>
                </form>
              </div>
            </div>
          </div>
          <div className="hero-unit category--teaser panel has--border is--rounded bottomtext mobilejstext"
            id="bottomtext">
            <h1 className="hero--headline panel--title">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Innovative Solartechnik für eine nachhaltige Energiezukunft
                </font>
              </font>
            </h1>
            <h1 className="hero--headline panel--title teaser--title-mobile">
              Sonstiges
            </h1>
            <div className="hero--text panel--body is--wide">
              <div className="teaser--text-long">
                <p className="MsoNormal" style={{ lineHeight: "19.5px" }}>
                <strong>
                Transformieren Sie Ihre Energiegewinnung durch die unermessliche Kraft der Sonne.
                Von erstklassigen Photovoltaikanlagen bis zu robusten Wechselrichtern bieten wir Ihnen hochwertige Lösungen im Bereich erneuerbarer Energien.
                Für ein nachhaltiges Morgen: Unsere Solartechnikprodukte sind speziell für diverse Einsatzbereiche und Anwendungen konzipiert. Sie finden Anwendung und werden empfohlen in:
                </strong>
                </p>
                <ul>
                <li>Installationen von Photovoltaikanlagen</li>
                <li>Projekten mit Solarzellen</li>
                <li>Einrichtungen mit Solarmodulen/Solarpanelen</li>
                <li>Systemen, die Wechselrichter benötigen</li>
                <li>Orten mit solarthermischen Kollektoren</li>
                <li>Anlagen, die Windschutztunnel für Solarfelder verwenden</li>
                <li>Umgebungen, die Solarbatterien oder Energiespeichersysteme nutzen</li>
                <li>Projekten, die Batteriespeichersysteme einsetzen</li>
                <li>Off-Grid-Systemen in abgelegenen Gebieten</li>
                <li>Gewerblichen Einrichtungen, die Nachhaltigkeit anstreben</li>
                <li>Landwirtschaftlichen Betrieben für solare Bewässerungssysteme</li>
                <li>Wohngebäuden mit grünen Dächern oder Fassaden</li>
                <li>Mobilen Stationen oder Fahrzeugen, die autarke Energiequellen benötigen</li>
                <li>Gemeinschaftsprojekten im Rahmen städtischer Erneuerungsinitiativen</li>
                </ul>
              </div>
              <div className="teaser--text-mobile">
                <p className="MsoNormal" style={{ lineHeight: "19.5px" }}>
                <strong>
                Transformieren Sie Ihre Energiegewinnung durch die unermessliche Kraft der Sonne.
                Von erstklassigen Photovoltaikanlagen bis zu robusten Wechselrichtern bieten wir Ihnen hochwertige Lösungen im Bereich erneuerbarer Energien.
                Für ein nachhaltiges Morgen: Unsere Solartechnikprodukte sind speziell für diverse Einsatzbereiche und Anwendungen konzipiert. Sie finden Anwendung und werden empfohlen in:
                </strong>
                </p>
                <ul>
                <li>Installationen von Photovoltaikanlagen</li>
                <li>Projekten mit Solarzellen</li>
                <li>Einrichtungen mit Solarmodulen/Solarpanelen</li>
                <li>Systemen, die Wechselrichter benötigen</li>
                <li>Orten mit solarthermischen Kollektoren</li>
                <li>Anlagen, die Windschutztunnel für Solarfelder verwenden</li>
                <li>Umgebungen, die Solarbatterien oder Energiespeichersysteme nutzen</li>
                <li>Projekten, die Batteriespeichersysteme einsetzen</li>
                <li>Off-Grid-Systemen in abgelegenen Gebieten</li>
                <li>Gewerblichen Einrichtungen, die Nachhaltigkeit anstreben</li>
                <li>Landwirtschaftlichen Betrieben für solare Bewässerungssysteme</li>
                <li>Wohngebäuden mit grünen Dächern oder Fassaden</li>
                <li>Mobilen Stationen oder Fahrzeugen, die autarke Energiequellen benötigen</li>
                <li>Gemeinschaftsprojekten im Rahmen städtischer Erneuerungsinitiativen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
