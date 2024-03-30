import React from "react";
// import { Cookies } from "js-cookie";
import styles from "./breadcrumb.module.scss";

const CustomBreadCrumb = ({ moduleName, subModuleName }) => {
  //   const entityName = Cookies.get("entity_name");

  const subModuleItem = [];
  if (subModuleName && subModuleName.trim() !== "") {
    subModuleItem.push({ title: subModuleName });
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/credit/dashboard">Dashboard</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/credit/entity-master/entity-listing">Entity List</a>
          </li>
          {/* <li className="breadcrumb-item">
            <a href="/credit/entity-master/entity-listing">{entityName}</a>
          </li> */}
          <li className="breadcrumb-item">{moduleName}</li>
          {subModuleItem.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              {item.title}
            </li>
          ))}
        </ol>
      </nav>
      <hr className={styles.alignDivider} /> {/* Divider */}
    </div>
  );
};

export default CustomBreadCrumb;
