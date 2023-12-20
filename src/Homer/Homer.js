import React from "react";
import "./Homer.css"
import HomerHead from "../assets/homer-head.png"
import HomerHands from "../assets/homer-hands.png"
import Dona from "../assets/dona.png"


function Homer (){
    return(
        <div className="homer">
            <div className="homer__box">
                <img src={HomerHead} alt=""  id="homer__head"/>
                <img src={HomerHands} alt=""  id="homer__hands" />
            </div>
            <div className="bubble">
                <div className="links">
                    <a className="link" target="_blank" rel="noopener noreferrer"  href="https://simpsonsapi.000webhostapp.com/" ><img src={Dona} alt="Dona" className="dona" /><p>Haz click aquí para ver la documentación de la API</p><img src={Dona} className="dona" alt="dona" /></a>
                </div>
                </div>
            </div>

        
    )
};

export { Homer }