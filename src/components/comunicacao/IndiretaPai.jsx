import React from "react";
import IndiretaFilho from "./IndiretaFilho";

function IndiretaPai(props) {
  function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
    nome = nomeParam;
    idade = idadeParam;
    nerd = nerdParam;
  }

  return (
    <div>
      <div>Pai</div>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
}

export default IndiretaPai;
