import React, { useEffect, useContext } from "react";
import './Products.css'

import { Util } from '../../../../Api/Util'
import CardDesconto from "../cardDesconto/CardDesconto";
import Loading from '../Loading/Loading'
import AppContext from "../../contexts/AppContext";

function Products(){


    //usando context pegando o necessario e compartilhando as informações
    const { products, setProducts, loading, setLoading } = useContext(AppContext)



    //sempre que a dependencia mudar o valor ela executa 
    useEffect(()=> {

        Util.requisicao('i').then((data) => {
            setProducts(data.results)
            setLoading(false)
        })

    }, [])
    

    return(
        (loading ? <Loading /> :  <section className="products  grid-Desconto1">

            {
             products.map((product) => <CardDesconto key={product.id} item={product} />)
            }
         </section>

        )

    )

    
}

export default Products 