import React, { useState } from "react";
import AppContext from "./AppContext";
import propTypes from 'prop-types'


//esse arquivo Provider é o componente que vai prover as informações


//pega todos os filhos de componentes que queremos em um contexto
function Provider({children}) {

    const [cartItemProduct, setCartItem] = useState([])
    const [products, setProducts] =  useState([])
    const [loading, setLoading] = useState(true)
    const [valorTotal, setValorTotal] = useState(0)
    const [isCartVisible, setisCartVisible] = useState(false)

    //essas variaveis são passadas para o Context
    const value = {
         products,
         setProducts,
         loading, 
         setLoading,
         cartItemProduct,
         setCartItem,
         valorTotal,
         setValorTotal,
         isCartVisible,
          setisCartVisible
        }

    return ( 
        //todas as propriedades que for colocada em AppContext.Provider, podera ser acessado por todos os filhos do mesmo
        <AppContext.Provider value ={value}>
                {children}
        </AppContext.Provider>
    );
}


export default Provider;

Provider.prototypes = {
    children: propTypes.any,
}.isRequired;