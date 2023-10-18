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
                srcSet="https://www.jansen-versand.de/media/image/9f/2e/4f/Sonstiges2022_1280x1280.webp"
                media="(min-width: 48em)"
                type="image/webp"
              />
              <source
                srcSet="https://www.jansen-versand.de/media/image/93/70/71/Sonstiges2022_1280x1280.png"
                media="(min-width: 48em)"
              />
              <img
                loading="lazy"
                srcSet="https://www.jansen-versand.de/media/image/3a/35/6b/Sonstiges2022_800x800.png"
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
                    <font style={{ verticalAlign: "inherit" }}>Sorting</font>
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
                    <option value={2}>popularity</option>
                    <option value={3}>lowest price</option>
                    <option value={4}>Highest price</option>
                    <option value={5}>Item name</option>
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
                    data-listing-url="https://www.jansen-versand.de/widgets/listing/listingCount/sCategory/1000182150"
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
                        title="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/01/63/e1/2222222_02FA74Adner6MS4_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/a0/37/05/2222222_02FA74Adner6MS4_285x285.jpg"
                                alt="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                                title="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                              />
                            </picture>
                          </span>
                        </span>
                      </Link>
                      <Link
                        to="/product-detail"
                        className="product--title"
                        title="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Petrol engine Kohler 6.5 HP including hydraulic
                            pump, hydraulic unit
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
                                  €449.00
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
                        title="Manual side shift for Jansen mulchers, mowers, flail mulchers"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/5a/24/c7/1777000_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/28/ca/2b/1777000_01_285x285.jpg"
                                alt="Manual side shift for Jansen mulchers, mowers, flail mulchers"
                                title="Manual side shift for Jansen mulchers, mowers, flail mulchers"
                              />
                            </picture>
                          </span>
                        </span>
                      </Link>
                      <Link
                        to="/product-detail"
                        className="product--title"
                        title="Manual side shift for Jansen mulchers, mowers, flail mulchers"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Manual side shift for Jansen mulchers, mowers, flail
                            mulchers
                          </font>
                        </font>
                      </Link>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €349.00
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
                        title="Adapter, quick coupler MS-01 for earth drilling rig Jansen HBG-1500 & HBG-2000"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/26/9b/5f/1776010_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/ae/63/bd/1776010_01_285x285.jpg"
                                alt="Adapter, quick coupler MS-01 for earth drilling rig Jansen HBG-1500 & HBG-2000"
                                title="Adapter, quick coupler MS-01 for earth drilling rig Jansen HBG-1500 & HBG-2000"
                              />
                            </picture>
                          </span>
                        </span>
                      </Link>
                      <Link
                        to="/product-detail"
                        className="product--title"
                        title="Adapter, quick coupler MS-01 for earth drilling rig Jansen HBG-1500 & HBG-2000"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Adapter, quick coupler MS-01 for earth drilling rig
                            Jansen HBG-1500 &amp; HBG-2000
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
                                  €149.00
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
                        title="Adapter, quick coupler MS-03 for Jansen HBG-1500 & HBG-2000 earth drilling rig"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/aa/25/d1/1776011_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/fb/0b/78/1776011_01_285x285.jpg"
                                alt="Adapter, quick coupler MS-03 for Jansen HBG-1500 & HBG-2000 earth drilling rig"
                                title="Adapter, quick coupler MS-03 for Jansen HBG-1500 & HBG-2000 earth drilling rig"
                              />
                            </picture>
                          </span>
                        </span>
                      </Link>
                      <Link
                        to="/product-detail"
                        className="product--title"
                        title="Adapter, quick coupler MS-03 for Jansen HBG-1500 & HBG-2000 earth drilling rig"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Adapter, quick coupler MS-03 for Jansen HBG-1500
                            &amp; HBG-2000 earth drilling rig
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
                                  €169.00
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
                        title="Adapter for earth drilling machine HBG-1500 & HBG-2000, pallet fork, forklift fork"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/a9/b6/b7/1776020_01Iog9DgP1YkZsc_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/b8/a4/59/1776020_01Iog9DgP1YkZsc_285x285.jpg"
                                alt="Adapter for earth drilling machine HBG-1500 & HBG-2000, pallet fork, forklift fork"
                                title="Adapter for earth drilling machine HBG-1500 & HBG-2000, pallet fork, forklift fork"
                              />
                            </picture>
                          </span>
                        </span>
                      </Link>
                      <Link
                        to="/product-detail"
                        className="product--title"
                        title="Adapter for earth drilling machine HBG-1500 & HBG-2000, pallet fork, forklift fork"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Adapter for earth drilling machine HBG-1500 &amp;
                            HBG-2000, pallet fork, forklift fork
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
                                  €169.00
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
                        title="Log lifter for log splitters Jansen HS-20H110, HS-20H110E and HS-20H110K"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/a3/88/e3/1325107_01Y5fBmT4AlJ7ml_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/69/be/5e/1325107_01Y5fBmT4AlJ7ml_285x285.jpg"
                                alt="Log lifter for log splitters Jansen HS-20H110, HS-20H110E and HS-20H110K"
                                title="Log lifter for log splitters Jansen HS-20H110, HS-20H110E and HS-20H110K"
                              />
                            </picture>
                          </span>
                        </span>
                      </Link>
                      <Link
                        to="/product-detail"
                        className="product--title"
                        title="Log lifter for log splitters Jansen HS-20H110, HS-20H110E and HS-20H110K"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Log lifter for log splitters Jansen HS-20H110,
                            HS-20H110E and HS-20H110K
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
                                  €149.00
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
                        title="Stick holder for your electric vehicle, senior mobility vehicle, walking stick holder"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/1d/74/29/1175102_01C1sPqZJUciDld_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/d9/bd/af/1175102_01C1sPqZJUciDld_285x285.jpg"
                                alt="Stick holder for your electric vehicle, senior mobility vehicle, walking stick holder"
                                title="Stick holder for your electric vehicle, senior mobility vehicle, walking stick holder"
                              />
                            </picture>
                          </span>
                        </span>
                      </Link>
                      <Link
                        to="/product-detail"
                        className="product--title"
                        title="Stick holder for your electric vehicle, senior mobility vehicle, walking stick holder"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Stick holder for your electric vehicle, senior
                            mobility vehicle, walking stick holder
                          </font>
                        </font>
                      </Link>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €39.95
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
                        title="Hunting pulpit, mobile, hydraulic lifting, fully equipped"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/1c/05/e3/1111111_01Dsppk7ZNFUC3O_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/17/c4/17/1111111_01Dsppk7ZNFUC3O_285x285.jpg"
                                alt="Hunting pulpit, mobile, hydraulic lifting, fully equipped"
                                title="Hunting pulpit, mobile, hydraulic lifting, fully equipped"
                              />
                            </picture>
                          </span>
                        </span>
                      </Link>
                      <Link
                        to="/product-detail"
                        className="product--title"
                        title="Hunting pulpit, mobile, hydraulic lifting, fully equipped"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Hunting pulpit, mobile, hydraulic lifting, fully
                            equipped
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
                  data-action-form="true"
                >
                  <input type="hidden" name="p" defaultValue={1} />
                  <label htmlFor="n" className="per-page--label action--label">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Items per page
                      </font>
                    </font>
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
          </div>
          <div
            className="hero-unit category--teaser panel has--border is--rounded bottomtext mobilejstext"
            id="bottomtext"
          >
            <h1 className="hero--headline panel--title">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Unsere Produkte
                </font>
              </font>
            </h1>
            <h1 className="hero--headline panel--title teaser--title-mobile">
              Sonstiges
            </h1>{" "}
            <div className="hero--text panel--body is--wide">
              <div className="teaser--text-long">
                <p className="MsoNormal" style={{ lineHeight: "19.5px" }}>
                  <strong>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Our machines are suitable for different areas of
                        application and users.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        They are used and recommended in the following areas and
                        facilities, among others:
                      </font>
                    </font>
                  </strong>
                </p>
                <ul>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Building authorities
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Construction yards
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Highway maintenance departments
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Fire departments
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Airports</font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Forestry departments
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Forestry companies
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Leisure facilities
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Cemetery offices
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Garden offices
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Building management
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Municipal administrations
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        trade offices
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Parks Departments
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Property manager
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Land registry offices
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Church administrations
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Municipal companies
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        District administrations
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Cultural institutions
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Farms</font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Natural parks
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Nursing homes
                      </font>
                    </font>
                  </li>
                  <li>Polizei</li>
                  <li>Rettungsdienste</li>
                  <li>Schulämter</li>
                  <li>Seniorenheime</li>
                  <li>Sozialeinrichtungen</li>
                  <li>Sportämter</li>
                  <li>Sportstättenbetreiber</li>
                  <li>Stadien</li>
                  <li>Stadtplanungsämter</li>
                  <li>Stadtverwaltungen</li>
                  <li>Stadtwerke</li>
                  <li>Straßenmeistereien</li>
                  <li>Technische Hilfswerke</li>
                  <li>Tourismusämter</li>
                  <li>Unikliniken</li>
                  <li>Veranstaltungshallen</li>
                  <li>Verkehrsämter</li>
                  <li>Verkehrsbetriebe</li>
                  <li>Zoos</li>
                  <li>Zweckverbände</li>
                  <li>u.v.m.&nbsp;</li>
                </ul>
              </div>
              <div className="teaser--text-mobile">
                <p className="MsoNormal" style={{ lineHeight: "19.5px" }}>
                  <strong>
                    Unsere Maschinen sind für unterschiedliche
                    Anwendungsbereiche und Anwender geeignet. So werden sie
                    unter anderem in folgenden Bereichen und Einrichtungen
                    eingesetzt und empfohlen:
                  </strong>
                </p>
                <ul>
                  <li>Bauämter</li>
                  <li>Bauhöfe</li>
                  <li>Autobahnmeistereien</li>
                  <li>Feuerwehren</li>
                  <li>Flughäfen</li>
                  <li>Forstämter</li>
                  <li>Forstbetriebe</li>
                  <li>Freizeitanlagen</li>
                  <li>Friedhofsämter</li>
                  <li>Gartenämter</li>
                  <li>Gebäudemanagement</li>
                  <li>Gemeindeverwaltungen</li>
                  <li>Gewerbeämter</li>
                  <li>Grünflächenämter</li>
                  <li>Hausverwalter</li>
                  <li>Katasterämter</li>
                  <li>Kirchenverwaltungen</li>
                  <li>Kommunale Betriebe</li>
                  <li>Kreisverwaltungen</li>
                  <li>Kultureinrichtungen</li>
                  <li>Landwirtschaftsbetriebe</li>
                  <li>Naturparks</li>
                  <li>Pflegeheime</li>
                  <li>Polizei</li>
                  <li>Rettungsdienste</li>
                  <li>Schulämter</li>
                  <li>Seniorenheime</li>
                  <li>Sozialeinrichtungen</li>
                  <li>Sportämter</li>
                  <li>Sportstättenbetreiber</li>
                  <li>Stadien</li>
                  <li>Stadtplanungsämter</li>
                  <li>Stadtverwaltungen</li>
                  <li>Stadtwerke</li>
                  <li>Straßenmeistereien</li>
                  <li>Technische Hilfswerke</li>
                  <li>Tourismusämter</li>
                  <li>Unikliniken</li>
                  <li>Veranstaltungshallen</li>
                  <li>Verkehrsämter</li>
                  <li>Verkehrsbetriebe</li>
                  <li>Zoos</li>
                  <li>Zweckverbände</li>
                  <li>u.v.m.&nbsp;</li>
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
