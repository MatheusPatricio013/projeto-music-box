import React from "react";
import { useNavigate } from "react-router-dom";
import imgLateral from "../html-css-template/imagens/sound-waves-pink.png";

function Index() {
    const navigate = useNavigate();
    return (
        <>
            <div className="container index">
                <div className="index-content">
                    <div className="box-text-index">
                        <div className="info-index">
                            <p className="display">a música certa para o seu mood</p>
                            <p className="subtitle">organize suas músicas preferidas por categorias e aproveite cada batida</p>
                        </div>
                        <div className="img-index"></div>
                        <button className="btn" onClick={() =>navigate("/musicas")}>começar</button>
                    </div>
                    <img src={imgLateral} alt="" className="index-img" />
                </div>
            </div>
        </>
    )
}

export default Index;