import React from "react";

const Card = ({title}) => {
  return (
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title text-dark">{title}</h5>
        </div>
      </div>
  );
};

export default Card;
