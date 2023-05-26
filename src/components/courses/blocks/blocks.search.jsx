import React from "react";
import "../courseStyles.css";

import { FiSearch } from "react-icons/fi";

const SearchBlock = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="courseText">Courses</div>
        <div className="wrapInput">
          <input className="input" placeholder="Search your favorite courses" />
          <button className="button">
            <FiSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBlock;
