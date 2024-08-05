import React from "react";
import Frame from './batman typescript.png'


import './Carrosseis.css'

function Carrosseis(){
    return(
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
               <img src={Frame} className="d-block fundo-ladding" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Frame} className="d-block fundo-ladding" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Frame} className="d-block fundo-ladding" alt="..." />
            </div>
        </div>
        </div>
    )
}

export default Carrosseis 