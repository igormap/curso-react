import React from "react";
import DiretaFilho from "./DiretaFilho";

function DiretaPai(props) {
  return (
    <div>
      <DiretaFilho nome="Júnior" idade={20} nerd={true} />
      <DiretaFilho nome="Gabriel" idade={17} nerd={false} />
    </div>
  );
}

export default DiretaPai;
