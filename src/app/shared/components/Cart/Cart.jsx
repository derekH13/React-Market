import React, { useContext, useEffect, useState } from "react";

import './Cart.css'
import CartItem from "../CartItem/CartItem";
import AppContext from "../../contexts/AppContext";
import Util from "../../../../Api/Util";

function Cart(){

    const { cartItemProduct, setValorTotal, isCartVisible, setisCartVisible } = useContext(AppContext)
     const { valorTotal } = useContext(AppContext)

     useEffect(() => {
    
        let result = 0, x

       for(const p of cartItemProduct){
            x = p.price
            result += x
            setValorTotal(Util.FormatarMoeda(result))
       }
     }, [cartItemProduct])
    


    return(

        <div className={`cart ${isCartVisible ? 'cart--active' : '' }`}>
            <div className="Cart-items">
                
                {
                    cartItemProduct.map((data) => <CartItem key={data.id} data={data}  />) 
                }
   
            </div>

            <div className="cart-resume">
                   {valorTotal}
            </div>
         </div>
    )
}

export default Cart