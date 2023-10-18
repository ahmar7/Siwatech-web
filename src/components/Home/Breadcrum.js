import React from 'react';

const Breadcrum = (props) => {
  return (
    <nav className="content--breadcrumb block">
      <ul
        className="breadcrumb--list"
        role="menu"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          role="menuitem"
          className="breadcrumb--entry is--active"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <a
            className="breadcrumb--link"
            href="javascript:void(0)"
            title="imprint"
            itemProp="item"
          >
            <link
              itemProp="url"
              href="javascript:void(0)"
            />
            <span className="breadcrumb--title" itemProp="name">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>{props.pageName}</font>
              </font>
            </span>
          </a> 
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrum;
