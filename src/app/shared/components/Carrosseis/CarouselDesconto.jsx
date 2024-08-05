import React, { useState, useEffect } from "react";

import Util from '../../../../Api/Util'
import './CarouselDesconto.css'
import CardDesconto from "../cardDesconto/CardDesconto";




function CarouselDesconto(){

  const [products, setProducts] =  useState([])


  //busca o resultado e passa como valor para o products
  useEffect(()=> {
    Util.requisicao('iphone').then((data) => {
        setProducts(data.results)
    })

}, [])

    
    return(
        <div id="carouselExampleAutoplaying" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">








          </div>
          <div className="carousel-item">
            <div className="grid-Desconto2">

            




            </div>
          </div>
          <div className="carousel-item">
            <div className="grid-Desconto3">

            



            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default CarouselDesconto