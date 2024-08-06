import React from "react";
import Frame from './publicidade (1) .png'
import Frame1 from './publicidade (2).png'
import Frame2 from './publicidade (3).png'


import './Carrosseis.css'

function Carrosseis(){
    return(
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
               <img src={Frame} className="d-block fundo-ladding" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Frame1} className="d-block fundo-ladding" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Frame2} className="d-block fundo-ladding" alt="..." />
            </div>
        </div>
        </div>
    )
}

export default Carrosseis 