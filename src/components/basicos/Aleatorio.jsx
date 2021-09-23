import React from "react";

export default (props) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return (
    <React.Fragment>
      <p>
        <strong>Número aleatório entre {props.min} e {props.max}</strong> {'=>'} {" "}
        {getRandomInt(props.min, props.max)}
      </p>
    </React.Fragment>
  );
};
