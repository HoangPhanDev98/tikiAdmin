import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./info.scss";

function InfoFeature(props) {
  return (
    <div className="info">
      <div className="info__item">
        <span className="info__title">Revanue</span>
        <div className="info__money">
          <span className="info__money--current">$2,415</span>
          <span className="info__money--rate">
            -11.4 <ArrowDownward className="info__icon negative" />
          </span>
        </div>
        <span className="info__sub">Compared to last month</span>
      </div>
      <div className="info__item">
        <span className="info__title">Revanue</span>
        <div className="info__money">
          <span className="info__money--current">$3,998</span>
          <span className="info__money--rate">
            +20.8
            <ArrowUpward className="info__icon" />
          </span>
        </div>
        <span className="info__sub">Compared to last month</span>
      </div>
      <div className="info__item">
        <span className="info__title">Revanue</span>
        <div className="info__money">
          <span className="info__money--current">$1,402</span>
          <span className="info__money--rate">
            +20,19 <ArrowUpward className="info__icon" />
          </span>
        </div>
        <span className="info__sub">Compared to last month</span>
      </div>
    </div>
  );
}

export default InfoFeature;
