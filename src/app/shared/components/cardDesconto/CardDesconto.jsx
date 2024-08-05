import React from "react";
import '../cardDesconto/CardDesconto.css'


export function CardDesconto({item}, {index}){

console.log({index})

    return(
        
        <div className="card">
        <img src={item.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-preco">R$ {item.price}</h5>
            <p className="card-text">{item.title}</p>
        </div>
    </div>


    )
}


export default CardDesconto