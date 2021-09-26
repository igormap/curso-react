import React from "react";
import produtos from "../../data/produtos";
import './TabelaProdutos.css'

export default (props) => {
  const listaProdutos = produtos.map((produto, i) => {
    return (
      <tr key={produtos.id} className={i % 2 == 0 ? 'Par' : 'Impar'}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.preco.replace('.', ',')}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos">
      <table style={{ margin: "0 auto", border: "1" }}>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
        {listaProdutos}
      </table>
    </div>
  );
};
