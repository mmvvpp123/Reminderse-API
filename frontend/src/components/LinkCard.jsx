import React from "react";
import "../styles/Card.css";

const LinkCard = ({ data }) => {
  return (
    <div className="card">
      <a href={data.url} target="_blank">
        <div className="imgArea">
          <img
            width={200}
            src={`https://logo.clearbit.com/${data.url}`}
            alt={data.entry_title}
          />
        </div>
        <div className="cardInfo">
          <div className="entryTitle">{data.entry_title}</div>
          <div className="secondary">{data.category}</div>
          {data.days < 0 ? (
            <div className="secondary date">Paused</div>
          ) : (
            <div className="secondary date">{data.days}</div>
          )}
        </div>
      </a>
    </div>
  );
};

export default LinkCard;