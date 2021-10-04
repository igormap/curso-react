import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

function IndiretaPai(props) {
  const [nome, setNome] = useState("?");
  const [idade, setIdade] = useState("?");
  const [nerd, setNerd] = useState("?");

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  }

  return (
    <div>
      <div>
        <span>{nome} </span>
        <span>{idade} </span>
        <span>{nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
}

export default IndiretaPai;
