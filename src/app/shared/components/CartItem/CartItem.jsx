import React, { useContext } from "react";
import propTypes from 'prop-types'
import './CartItem.css'
import Util from "../../../../Api/Util";
import AppContext from "../../contexts/AppContext";

function CartItem({ data }){

    const { cartItemProduct, setCartItem } = useContext(AppContext)
    const { id, thumbnail, title, price } = data

    const hendleRemoveItem = () => {
        const updateItems = cartItemProduct.filter((item) => item.id !== id)
        setCartItem(updateItems)
    }


    return(
        <section className="cart-item">
            <img 
            src={thumbnail} 
            alt="Imagem-Produto" 
            className="cart-item-image" 
            />

        <div className="cart-item-content">
            <h3 className="cart-item-title">{title}</h3>
            <h3 className="cart-item-price">{Util.FormatarMoeda(price)}</h3>

            <button 
            type="button"
            className="remove-item"
            onClick={ hendleRemoveItem }
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
                </svg>

            </button>
        </div>
        </section>
    )
}


export default CartItem