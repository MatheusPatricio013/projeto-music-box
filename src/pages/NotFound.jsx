import React from "react";
import { useNavigate } from "react-router-dom";
import imgVermelha from "../html-css-template/imagens/target-red.png"

function NotFound(){
    const navigate= useNavigate();
    return(
        <>
    <div className="container">
        <div className="add-music">

            <div className="formulario">

                <h1>404</h1>

                <p className="subtitle">se perdeu? nada para ver por aqui...</p>
                <button className="btn" onClick={() => navigate(-1)}>voltar</button>
            </div>

            <div className="img-lateral">
                <img src={imgVermelha} alt="" />

            </div>

        </div>
    </div>
        </>
    )
}

export default NotFound;