import React from "react";

export default (props) => {
  const { min, max } = props;
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return (
    <>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>
          Número aleatório entre {min} e {max}
        </strong>{" "}
        {"=>"} {getRandomInt(min, max)}
      </p>
    </>
  );
};
