import React from "react";

function IndiretaFilho(props) {
  const cb = props.quandoClicar;

  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(_) => {
          cb("João", 53, true);
        }}
      >
        Fornecer Informações
      </button>
    </div>
  );
}

export default IndiretaFilho;
