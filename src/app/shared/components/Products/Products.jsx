import React, { useState, useEffect } from "react";
import './Products.css'

import { Util } from '../../../../Api/Util'
import CardDesconto from "../cardDesconto/CardDesconto";

function Products(){

    const [products, setProducts] =  useState([])



    //sempre que a dependencia mudar o valor ela executa 
    useEffect(()=> {

        Util.requisicao('iphone').then((data) => {
            setProducts(data.results)
        })

    }, [])
    
    console.log(products);

    return(
     
        <section className="products  grid-Desconto1">
        {
         products.map((product) => <CardDesconto item={product} />)
        }
     </section>
    )

    
}

export default Products 