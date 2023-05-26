import React from "react";
import "../../courseStyles.css";
import dummy from "../../images/dummy1.jpg";

const DetailComp = ({ covers, names }) => {
  return (
    <div className="detailComp_container">
      <div className="detailComp_dp">
        <img className="img" src={covers} />
      </div>
      <div className="detailComp_name">{names}</div>
    </div>
  );
};

export default DetailComp;
