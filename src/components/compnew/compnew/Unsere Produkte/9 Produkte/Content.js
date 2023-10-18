import React, { useEffect, useState } from "react";

const Content = () => {
  return (
    <div className="content--wrapper">
      <div
        className="content product--details"
        itemScope
        itemType="https://schema.org/Product"
        data-ajax-wishlist="true"
        data-compare-ajax="true"
        data-ajax-variants-container="true"
      >
        <header className="product--header">
          <div className="product--info">
            <h1 className="product--title" itemProp="name">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Petrol engine Kohler 6.5 HP including hydraulic pump,
                  hydraulic unit
                </font>
              </font>
            </h1>
            <meta
              itemProp="image"
              content="https://www.jansen-versand.de/media/image/4a/63/0f/2222222_01mMkJzlnePrpFF.jpg"
            />
            <meta
              itemProp="image"
              content="https://www.jansen-versand.de/media/image/2a/87/1a/2222222_035xmaxd11K8Dld.jpg"
            />
            <meta
              itemProp="image"
              content="https://www.jansen-versand.de/media/image/49/30/92/2222222_04xgnN1mlc1R6G4.jpg"
            />
            <meta itemProp="gtin13" content={4260210411423} />
            <div className="ordernumber">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Item number: </font>
              </font>
              <span itemProp="sku">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>2222222</font>
                </font>
              </span>
            </div>
            <div className="product--rating-container">
              <a
                href="#product--publish-comment"
                className="product--rating-link"
                rel="nofollow"
                title="Bewertung abgeben"
              >
                <span className="product--rating"></span>
              </a>
            </div>
          </div>
        </header>
        <div className="product--detail-upper block-group">
          <div
            className="product--image-container image-slider product--image-zoom"
            data-image-slider="true"
            data-image-gallery="true"
            data-maxzoom={0}
            data-thumbnails=".image--thumbnails"
          >
            <div className="image-slider--container">
              <div
                className="image-slider--slide"
                style={{
                  transition: "none 0s ease 0s",
                  transform: "translateX(0%)",
                }}
              >
                <div className="image--box image-slider--item">
                  <span
                    className="image--element"
                    data-img-large="https://www.jansen-versand.de/media/image/ed/62/e1/2222222_02FA74Adner6MS4_1280x1280.jpg"
                    data-img-small="https://www.jansen-versand.de/media/image/a0/37/05/2222222_02FA74Adner6MS4_285x285.jpg"
                    data-img-original="https://www.jansen-versand.de/media/image/6b/37/a9/2222222_02FA74Adner6MS4.jpg"
                    data-img-webp-original="https://www.jansen-versand.de/media/image/d0/86/b8/2222222_02FA74Adner6MS4.webp"
                    data-alt="Benzinmotor Kohler 6,5 PS inkl. Hydraulikpumpe, Hydraulikaggregat"
                  >
                    <span className="image--media">
                      <picture>
                        <source
                          srcSet="https://www.jansen-versand.de/media/image/c6/0c/de/2222222_02FA74Adner6MS4_638x638.webp"
                          type="image/webp"
                        />
                        <img
                          srcSet="https://www.jansen-versand.de/media/image/9a/15/f0/2222222_02FA74Adner6MS4_638x638.jpg"
                          src="https://www.jansen-versand.de/media/image/9a/15/f0/2222222_02FA74Adner6MS4_638x638.jpg"
                          alt="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                          itemProp="image"
                        />
                      </picture>
                    </span>
                  </span>
                </div>
                <div className="image--box image-slider--item">
                  <span
                    className="image--element"
                    data-img-large="https://www.jansen-versand.de/media/image/4d/c3/be/2222222_01mMkJzlnePrpFF_1280x1280.jpg"
                    data-img-small="https://www.jansen-versand.de/media/image/54/96/d9/2222222_01mMkJzlnePrpFF_285x285.jpg"
                    data-img-original="https://www.jansen-versand.de/media/image/4a/63/0f/2222222_01mMkJzlnePrpFF.jpg"
                    data-alt="Benzinmotor Kohler 6,5 PS inkl. Hydraulikpumpe, Hydraulikaggregat"
                  >
                    <span className="image--media">
                      <picture>
                        <source
                          srcSet="https://www.jansen-versand.de/media/image/52/20/61/2222222_01mMkJzlnePrpFF_638x638.webp"
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://www.jansen-versand.de/media/image/da/a0/1a/2222222_01mMkJzlnePrpFF_638x638.jpg"
                          alt="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                          itemProp="image"
                        />
                      </picture>
                    </span>
                  </span>
                </div>
                <div className="image--box image-slider--item">
                  <span
                    className="image--element"
                    data-img-large="https://www.jansen-versand.de/media/image/cd/82/cd/2222222_035xmaxd11K8Dld_1280x1280.jpg"
                    data-img-small="https://www.jansen-versand.de/media/image/f0/78/53/2222222_035xmaxd11K8Dld_285x285.jpg"
                    data-img-original="https://www.jansen-versand.de/media/image/2a/87/1a/2222222_035xmaxd11K8Dld.jpg"
                    data-alt="Benzinmotor Kohler 6,5 PS inkl. Hydraulikpumpe, Hydraulikaggregat"
                  >
                    <span className="image--media">
                      <picture>
                        <source
                          srcSet="https://www.jansen-versand.de/media/image/14/e8/af/2222222_035xmaxd11K8Dld_638x638.webp"
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://www.jansen-versand.de/media/image/63/c3/fd/2222222_035xmaxd11K8Dld_638x638.jpg"
                          alt="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                          itemProp="image"
                        />
                      </picture>
                    </span>
                  </span>
                </div>
                <div className="image--box image-slider--item">
                  <span
                    className="image--element"
                    data-img-large="https://www.jansen-versand.de/media/image/fb/65/f8/2222222_04xgnN1mlc1R6G4_1280x1280.jpg"
                    data-img-small="https://www.jansen-versand.de/media/image/8d/6f/03/2222222_04xgnN1mlc1R6G4_285x285.jpg"
                    data-img-original="https://www.jansen-versand.de/media/image/49/30/92/2222222_04xgnN1mlc1R6G4.jpg"
                    data-alt="Benzinmotor Kohler 6,5 PS inkl. Hydraulikpumpe, Hydraulikaggregat"
                  >
                    <span className="image--media">
                      <picture>
                        <source
                          srcSet="https://www.jansen-versand.de/media/image/e0/04/44/2222222_04xgnN1mlc1R6G4_638x638.webp"
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://www.jansen-versand.de/media/image/49/8d/b6/2222222_04xgnN1mlc1R6G4_638x638.jpg"
                          alt="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                          itemProp="image"
                        />
                      </picture>
                    </span>
                  </span>
                </div>
                <div className="js--img-zoom--lens">&nbsp;</div>
              </div>
              <a className="force--3d arrow is--left is--hidden" />
              <a className="force--3d arrow is--right" />
            </div>
            <div className="image--thumbnails image-slider--thumbnails">
              <div
                className="image-slider--thumbnails-slide"
                style={{ left: "0px" }}
              >
                <a
                  href="https://www.jansen-versand.de/media/image/6b/37/a9/2222222_02FA74Adner6MS4.jpg"
                  title="Preview: Kohler 6.5 hp petrol engine including hydraulic pump, hydraulic unit"
                  className="thumbnail--link is--active"
                  style={{}}
                >
                  <picture>
                    <source
                      srcSet="https://www.jansen-versand.de/media/image/01/63/e1/2222222_02FA74Adner6MS4_285x285.webp"
                      type="image/webp"
                    />
                    <img
                      loading="lazy"
                      srcSet="https://www.jansen-versand.de/media/image/a0/37/05/2222222_02FA74Adner6MS4_285x285.jpg"
                      alt="Preview: Kohler 6.5 hp petrol engine including hydraulic pump, hydraulic unit"
                      title="Preview: Kohler 6.5 hp petrol engine including hydraulic pump, hydraulic unit"
                      className="thumbnail--image"
                    />
                  </picture>
                </a>
                <a
                  href="https://www.jansen-versand.de/media/image/4a/63/0f/2222222_01mMkJzlnePrpFF.jpg"
                  title="Preview: Kohler 6.5 hp petrol engine including hydraulic pump, hydraulic unit"
                  className="thumbnail--link"
                >
                  <picture>
                    <source
                      srcSet="https://www.jansen-versand.de/media/image/0a/22/1b/2222222_01mMkJzlnePrpFF_285x285.webp"
                      type="image/webp"
                    />
                    <img
                      loading="lazy"
                      srcSet="https://www.jansen-versand.de/media/image/54/96/d9/2222222_01mMkJzlnePrpFF_285x285.jpg"
                      alt="Preview: Kohler 6.5 hp petrol engine including hydraulic pump, hydraulic unit"
                      title="Preview: Kohler 6.5 hp petrol engine including hydraulic pump, hydraulic unit"
                      className="thumbnail--image"
                    />
                  </picture>
                </a>
                <a
                  href="https://www.jansen-versand.de/media/image/2a/87/1a/2222222_035xmaxd11K8Dld.jpg"
                  title="Preview: Kohler 6.5 hp petrol engine including hydraulic pump, hydraulic unit"
                  className="thumbnail--link"
                >
                  <picture>
                    <source
                      srcSet="https://www.jansen-versand.de/media/image/da/f9/5b/2222222_035xmaxd11K8Dld_285x285.webp"
                      type="image/webp"
                    />
                    <img
                      loading="lazy"
                      srcSet="https://www.jansen-versand.de/media/image/f0/78/53/2222222_035xmaxd11K8Dld_285x285.jpg"
                      alt="Preview: Kohler 6.5 hp petrol engine including hydraulic pump, hydraulic unit"
                      title="Preview: Kohler 6.5 hp petrol engine including hydraulic pump, hydraulic unit"
                      className="thumbnail--image"
                    />
                  </picture>
                </a>
                <a
                  href="https://www.jansen-versand.de/media/image/49/30/92/2222222_04xgnN1mlc1R6G4.jpg"
                  title="Preview: Kohler 6.5 hp petrol engine including hydraulic pump, hydraulic unit"
                  className="thumbnail--link"
                >
                  <picture>
                    <source
                      srcSet="https://www.jansen-versand.de/media/image/4b/8d/5a/2222222_04xgnN1mlc1R6G4_285x285.webp"
                      type="image/webp"
                    />
                    <img
                      loading="lazy"
                      srcSet="https://www.jansen-versand.de/media/image/8d/6f/03/2222222_04xgnN1mlc1R6G4_285x285.jpg"
                      alt="Preview: Kohler 6.5 hp petrol engine including hydraulic pump, hydraulic unit"
                      title="Preview: Kohler 6.5 hp petrol engine including hydraulic pump, hydraulic unit"
                      className="thumbnail--image"
                    />
                  </picture>
                </a>
              </div>
              <a className="thumbnails--arrow is--left" style={{}} />
              <a className="thumbnails--arrow is--right" />
            </div>
            <div className="image--dots image-slider--dots panel--dot-nav">
              <a href="#" className="dot--link is--active">
                &nbsp;
              </a>
              <a href="#" className="dot--link">
                &nbsp;
              </a>
              <a href="#" className="dot--link">
                &nbsp;
              </a>
              <a href="#" className="dot--link">
                &nbsp;
              </a>
            </div>
            <div className="js--img-zoom--flyout" style={{}}>
              <div className="js--img-zoom--title" />
            </div>
          </div>
          <div className="product--buybox block">
            <meta itemProp="brand" content="Jansen" />
            <meta itemProp="weight" content="26 kg" />
            <meta itemProp="gtin13" content={4260210411423} />
            <div
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
              className="buybox--inner"
            >
              <meta itemProp="priceCurrency" content="EUR" />
              <span
                itemProp="priceSpecification"
                itemScope
                itemType="https://schema.org/PriceSpecification"
              >
                <meta itemProp="valueAddedTaxIncluded" content="true" />
              </span>
              <meta
                itemProp="url"
                content="https://www.jansen-versand.de/sonstiges/314/benzinmotor-kohler-6-5-ps-inkl.-hydraulikpumpe-hydraulikaggregat"
              />
              <div className="product--price price--default">
                <span className="price--content content--default">
                  <meta itemProp="price" content={449.0} />
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>€449.00</font>
                  </font>
                </span>
                <p
                  className="product--tax"
                  data-content
                  data-modalbox="true"
                  data-targetselector="a"
                  data-mode="ajax"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      including VAT{" "}
                    </font>
                  </font>
                  <a
                    title="Shipping"
                    href="https://www.jansen-versand.de/versandinformationen"
                    style={{ textDecoration: "underline" }}
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        plus shipping costs
                      </font>
                    </font>
                  </a>
                </p>
              </div>
              <div className="right-text2-price">
                <div className="delivery-large">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Availability:
                    </font>
                  </font>
                </div>
                <div className="delivery-content">
                  <div className="product--delivery">
                    <link
                      itemProp="availability"
                      href="http://schema.org/InStock"
                    />
                    <p className="delivery--information">
                      <span className="delivery--text delivery--text-available">
                        <i className="delivery--status-icon delivery--status-available" />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            available from stock{" "}
                          </font>
                        </font>
                        <sup>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>1</font>
                          </font>
                        </sup>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="cc--detail-shipping-wrap">
                <form
                  className="cc--detail-shipping-costs"
                  action="https://www.jansen-versand.de/ccShippingCalculator/calcCosts"
                  data-sesscountry={2}
                  data-sesspayment={5}
                  data-currcurrency={1}
                  data-msgerror1="Leider konnten die Versandkosten nicht ermittelt werden. Bitte nutzen sie unseren regulären Warenkorb"
                  data-msgerror2="Leider konnten die Versandkosten nicht ermittelt werden. Da es folgenden Fehler gab:"
                >
                  <div className="shipping-costs--country">
                    <label htmlFor="shipping-costs--countrylist">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Delivery country (please select):
                        </font>
                      </font>
                    </label>
                    <br />
                    <div className="select-field">
                      <select
                        id="shipping-costs--countrylist"
                        className="shipping-costs--countrylist"
                        name="sCountry"
                      >
                        <option value={0}>Please choose</option>
                        <option value={2} selected="selected">
                          Germany
                        </option>
                        <option value={5}>Belgium</option>
                        <option value={7}>Denmark</option>
                        <option value={8}>Finland</option>
                        <option value={9}>France</option>
                        <option value={10}>Greece (mainland)</option>
                        <option value={12}>Ireland</option>
                        <option value={14}>Italy</option>
                        <option value={18}>Luxembourg</option>
                        <option value={21}>Netherlands (mainland)</option>
                        <option value={30}>Poland</option>
                        <option value={35}>Romania</option>
                        <option value={26}>Switzerland</option>
                        <option value={34}>Slovakia</option>
                        <option value={27}>Spain (mainland)</option>
                        <option value={33}>Czech Republic</option>
                        <option value={31}>Hungary</option>
                        <option value={23}>Austria</option>
                      </select>
                    </div>
                  </div>
                  <input type="hidden" defaultValue={314} name="articleId" />
                  <input type="hidden" defaultValue={1} name="currCurrency" />
                  <input type="hidden" name="sPayment" defaultValue={5} />
                </form>
                <div className="cc--detail-shipping-result">
                  <div className="shipping-costs--label">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Shipping:
                      </font>
                    </font>
                  </div>
                  <div className="shipping-costs--price">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>€32.00</font>
                    </font>
                  </div>
                </div>
              </div>
              <div className="product--configurator"></div>
              <form
                name="sAddToBasket"
                method="post"
                action="https://www.jansen-versand.de/checkout/addArticle"
                className="buybox--form"
                data-add-article="true"
                data-eventname="submit"
              >
                <input type="hidden" name="sActionIdentifier" defaultValue />
                <input
                  type="hidden"
                  name="sAddAccessories"
                  id="sAddAccessories"
                  defaultValue
                />
                <input type="hidden" name="sAdd" defaultValue={1028411524} />
                <div className="buybox--button-container block-group">
                  <div className="buybox--quantity block">
                    <div className="select-field">
                      <select
                        id="sQuantity"
                        name="sQuantity"
                        className="quantity--select"
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8th</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                      </select>
                    </div>
                  </div>
                  <button
                    className="buybox--button block btn is--primary is--center is--large"
                    name="In den Warenkorb"
                  >
                    <i className="icon--basket" />{" "}
                    <span className="buy-btn--cart-add">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Add to{" "}
                        </font>
                      </font>
                    </span>{" "}
                    <span className="buy-btn--cart-text">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>cart</font>
                      </font>
                    </span>
                  </button>
                </div>
                <input
                  type="hidden"
                  name="__csrf_token"
                  defaultValue="G1PIzax3gJKnogtEG7J5VhFmYCHAD8"
                />
              </form>
              <nav className="product--actions">
                <form
                  action="https://www.jansen-versand.de/anfrage-formular?sInquiry=detail&sOrdernumber=1028411524"
                  method="get"
                  className="action--form"
                >
                  <input type="hidden" name="sInquiry" defaultValue="detail" />
                  <input
                    type="hidden"
                    name="sOrdernumber"
                    defaultValue={1028411524}
                  />
                  <button
                    type="submit"
                    className="action--link link--contact"
                    title="Questions about the article?"
                  >
                    <i className="icon--service" />{" "}
                    <span className="action--text">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Questions about the article?
                        </font>
                      </font>
                    </span>
                  </button>
                </form>
                <a
                  href="#content--product-reviews"
                  data-show-tab="true"
                  className="action--link link--publish-comment noscroll"
                  rel="nofollow"
                  title="give an appraisal"
                >
                  <i className="icon--review" />
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Evaluate</font>
                  </font>
                </a>
                <a
                  href="javascript:if(window.print)window.print()"
                  className="action--link link--print"
                  rel="nofollow"
                  title="Print article page"
                >
                  <i className="icon--printer" />
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Print article page
                    </font>
                  </font>
                </a>
                <a
                  href="https://www.jansen-versand.de/sie-benoetigen-ein-ersatzteil"
                  className="action--link link--print"
                  rel="nofollow"
                  title="Order spare part"
                >
                  <i className="icon--tools" />
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Order spare part
                    </font>
                  </font>
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="tab-menu--product js--tab-menu">
          <div className="tab--navigation">
            <a
              href="#"
              className="tab--link has--content is--active"
              title="Description"
              data-tabname="description"
            >
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Description</font>
              </font>
            </a>
            <a
              href="#"
              className="tab--link has--content"
              title="reviews"
              data-tabname="rating"
            >
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Reviews</font>
              </font>
              <span className="product--rating-count">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>0</font>
                </font>
              </span>
            </a>
          </div>
          <div className="tab--container-list">
            <div className="tab--container no--off-canvas tab--container-desc has--content is--active">
              <div className="tab--content">
                <div className="buttons--off-canvas">
                  <a
                    href="#"
                    title="Menü schließen"
                    className="close--off-canvas"
                  >
                    <i className="icon--arrow-left" />
                    Menü schließen
                  </a>
                </div>
                <div className="content--description">
                  <div className="product--description" itemProp="description">
                    <div className="deutsch">
                      <font face="arial">
                        <b>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Kohler Engines
                            </font>
                          </font>
                        </b>
                        <br />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Since 1873, the American manufacturer Kohler has
                            been building innovative engines that are known
                            worldwide for their excellent design and
                            craftsmanship.{" "}
                          </font>
                          <font style={{ verticalAlign: "inherit" }}>
                            Alongside Honda and B&amp;S, Kohler is one of the
                            leading brands when it comes to equipping small
                            engines on garden and landscape equipment and lawn
                            mowers.{" "}
                          </font>
                          <font style={{ verticalAlign: "inherit" }}>
                            Leading manufacturers such as John Deere, MTD,
                            Stiga, Toro and many others use these high quality
                            engines.{" "}
                          </font>
                          <font style={{ verticalAlign: "inherit" }}>
                            Kohler doesn't just build gasoline engines - today
                            the innovative Italian diesel engine manufacturer
                            Lombardini is also part of the Kohler Group.
                          </font>
                        </font>
                        <br />
                        <br />
                        <b>
                          <u>
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                Technical data MOTOR
                              </font>
                            </font>
                          </u>
                        </b>
                        <ul>
                          <li>
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                4-stroke engine OHV, 6.5 HP, 4.8 kW, 196ccm
                              </font>
                            </font>
                          </li>
                          <li>Umdrehung: 3.600 U/min.</li>
                          <li>Kraftstoff: Normalbenzin</li>
                          <li>Tankinhalt: 3,6 Liter</li>
                          <li>Verbrauch: ca. 1,0 - 1,2 l/Std.</li>
                          <li>Starter: Seilzugstarter</li>
                          <li>Kurbelwellendurchmesser: 19 mm</li>
                          <li>Kurbelwellenlänge: 58 mm</li>
                          <li>Motorölmenge: ca. 1 l (10W40 oder. 15W40)</li>
                          <li>Gewicht Motor (ohne Pumpe): 16 kg</li>
                          <li>
                            Abmessungen (ohne Pumpe): 31,8 x 36,6 x 34,3 cm
                          </li>
                        </ul>
                        <br />
                        <b>
                          <u>Technische Daten HYDRAULIKPUMPE</u>
                        </b>
                        <ul>
                          <li>Druck: 210 bar, max. 240 bar</li>
                          <li>Umdrehung: 3.600 U/min.</li>
                          <li>Durchflussmenge: 38 l/min.</li>
                          <li>Einlass: 1 " (25,4 mm Schlauchstutzen)</li>
                          <li>
                            Auslass (druckseitig): 1/2 " NPT (Innengewinde)
                          </li>
                        </ul>
                        <br />
                      </font>
                    </div>
                  </div>
                  <p>Prüfziffer: 1028411524</p>
                </div>
              </div>
            </div>
            <div className="tab--container has--content">
              <div className="tab--header">
                <a href="#" className="tab--title" title="Bewertungen">
                  Bewertungen
                </a>
                <span className="product--rating-count">0</span>
              </div>
              <div className="tab--preview">
                Bewertungen lesen, schreiben und diskutieren...
                <a href="#" className="tab--link" title=" mehr">
                  {" "}
                  mehr
                </a>
              </div>
              <div id="tab--product-comment" className="tab--content">
                <div className="buttons--off-canvas">
                  <a
                    href="#"
                    title="Menü schließen"
                    className="close--off-canvas"
                  >
                    <i className="icon--arrow-left" />
                    Menü schließen
                  </a>
                </div>
                <div
                  className="content--product-reviews"
                  id="detail--product-reviews"
                >
                  <div className="review--form-container">
                    <div
                      id="product--publish-comment"
                      className="content--title"
                    >
                      Bewertung schreiben
                    </div>
                    <div className="alert is--warning is--rounded">
                      <div className="alert--icon">
                        <i className="icon--element icon--warning" />
                      </div>
                      <div className="alert--content">
                        Bewertungen werden nach Überprüfung freigeschaltet.
                      </div>
                    </div>
                    <form
                      method="post"
                      action="https://www.jansen-versand.de/sonstiges/314/benzinmotor-kohler-6-5-ps-inkl.-hydraulikpumpe-hydraulikaggregat?action=rating&c=1000182150#detail--product-reviews"
                      className="content--form review--form"
                    >
                      <input
                        name="sVoteName"
                        type="text"
                        defaultValue
                        className="review--field"
                        aria-label="Ihr Name*"
                        placeholder="Ihr Name*"
                      />
                      <input
                        name="sVoteMail"
                        type="email"
                        defaultValue
                        className="review--field"
                        aria-label="Ihre E-Mail-Adresse"
                        placeholder="Ihre E-Mail-Adresse*"
                        required="required"
                        aria-required="true"
                      />
                      <input
                        name="sVoteSummary"
                        type="text"
                        defaultValue
                        id="sVoteSummary"
                        className="review--field"
                        aria-label="Zusammenfassung*"
                        placeholder="Zusammenfassung**"
                        required="required"
                        aria-required="true"
                      />
                      <div className="field--select review--field select-field">
                        <select
                          name="sVoteStars"
                          aria-label="Bewertung abgeben"
                        >
                          <option value={10}>10 sehr gut</option>
                          <option value={9}>9</option>
                          <option value={8}>8</option>
                          <option value={7}>7</option>
                          <option value={6}>6</option>
                          <option value={5}>5</option>
                          <option value={4}>4</option>
                          <option value={3}>3</option>
                          <option value={2}>2</option>
                          <option value={1}>1 sehr schlecht</option>
                        </select>
                      </div>
                      <textarea
                        name="sVoteComment"
                        placeholder="Ihre Meinung"
                        cols={3}
                        rows={2}
                        className="review--field"
                        aria-label="Ihre Meinung"
                        defaultValue={""}
                      />
                      <div className>
                        <div
                          className="captcha--placeholder"
                          data-captcha="true"
                          data-src="/widgets/Captcha/getCaptchaByName/captchaName/honeypot"
                          data-errormessage="Bitte füllen Sie das Captcha-Feld korrekt aus."
                          data-haserror="true"
                        >
                          <span className="c-firstname-confirmation">
                            Bitte geben Sie die Zeichenfolge in das nachfolgende
                            Textfeld ein
                          </span>
                          <input
                            type="text"
                            name="first_name_confirmation"
                            defaultValue
                            className="c-firstname-confirmation"
                            aria-label="Ihr Name*"
                            autoComplete="captcha-no-autofill"
                          />
                        </div>
                        <input
                          type="hidden"
                          name="captchaName"
                          defaultValue="honeypot"
                        />
                      </div>
                      <p className="review--notice">
                        Die mit einem ** markierten Felder sind Pflichtfelder.
                      </p>
                      <p className="privacy-information">
                        Ich habe die{" "}
                        <a
                          title="Datenschutzbestimmungen"
                          href="https://www.jansen-versand.de/datenschutz"
                          target="_blank"
                        >
                          Datenschutzbestimmungen
                        </a>{" "}
                        zur Kenntnis genommen.
                      </p>
                      <div className="review--actions">
                        <button
                          type="submit"
                          className="btn is--primary"
                          name="Submit"
                        >
                          Speichern
                        </button>
                      </div>
                      <input
                        type="hidden"
                        name="__csrf_token"
                        defaultValue="G1PIzax3gJKnogtEG7J5VhFmYCHAD8"
                      />
                    </form>
                  </div>
                  <div className="content--title">
                    Kundenbewertungen für "Benzinmotor Kohler 6,5 PS inkl.
                    Hydraulikpumpe, Hydraulikaggregat"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
