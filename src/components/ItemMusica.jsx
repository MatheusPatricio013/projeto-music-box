import React, { useState } from "react";
import api from "../api";
import capaPadrao from "../html-css-template/imagens/capa.png";
import editIcon from "../html-css-template/imagens/edit-icon.png";
import deleteIcon from "../html-css-template/imagens/delete-icon.png";

function ItemMusica(props) {
  const estiloCard = {
    backgroundImage: `url(${props.capa ? props.capa : capaPadrao})`
  };
  const [editing,setEditing] = useState(false);


  const[nome,setNome] = useState(props.nome)
  const[artista,setArtista] = useState(props.artista)
  const[genero,setGenero] = useState(props.genero)
  const[ano,setAno] = useState(props.ano)
  function atualizarMusica(){
    const musicaAtualizada = {
      nome,
      artista,
      genero,
      ano
    }
    api.put(`/${props.id}`,musicaAtualizada)
    .then((res) => {
      alert("Musica atualizada");
    }).catch(() =>{
      alert("Deu erro")
    } )
  }

  return (
    <>
      <div className="card-music" style={estiloCard}>
        <div className="icons">
          <img src={editIcon} alt="" 
          onClick={() =>{setEditing(!editing)}} />
          <img src={deleteIcon} alt="" onClick={() => props.funcaoDeletar(props.id)}/>
        </div>
        <div className="info-music">
          <p>
            <strong className="card-title">música: </strong>
            <input
              className= {editing ? "input-musica-enabled" : "input-musica-disabled"}
              type="text" disabled={!editing}
              defaultValue={nome}
              onChange={(e) => setNome(e.target.value)}
            
            />
          </p>
          <p>
            <strong className="card-title">artista: </strong>
            <input
              className={editing ? "input-musica-enabled" : "input-musica-disabled"}
              type="text" disabled={!editing}
              defaultValue={artista}
              onChange={(e) => setArtista(e.target.value)}
            />
          </p>
          <p>
            <strong className="card-title">categoria: </strong>
            <input
              className={editing ? "input-musica-enabled" : "input-musica-disabled"}
              type="text" disabled={!editing}
              defaultValue={genero}
              onChange={(e) => setGenero(e.target.value)}
            />
          </p>
          <p>
            <strong className="card-title">ano: </strong>
            <input
              className={editing ? "input-musica-enabled" : "input-musica-disabled"}
              type="text" disabled={!editing}
              defaultValue={ano}
              onChange={(e) => setAno(e.target.value)}
            />
          </p>
          <button onClick={atualizarMusica} className="btn-salvar-enable">Salvar</button>
        </div>
      </div>
    </>
  );
}

export default ItemMusica;
