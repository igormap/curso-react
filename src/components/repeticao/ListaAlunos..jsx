import React from "react";
import alunos from "../../data/alunos";

function ListaAlunos(props) {
  const listaDeAlunos = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} - {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{listaDeAlunos}</ul>
    </div>
  );
}

export default ListaAlunos;
