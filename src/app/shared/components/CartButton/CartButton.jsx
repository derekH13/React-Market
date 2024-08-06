
import AppContext from '../../contexts/AppContext'
import './CartButton.css'
import React, { useContext } from 'react'

function CartButton() {

    const { cartItemProduct, setisCartVisible, isCartVisible } = useContext(AppContext)

    return(

        //coloca o valor inverso do isCartVisible
        <button className='btn-cart' onClick={() => setisCartVisible(!isCartVisible)}>

            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
            </svg>

            {/* so entra na função se tiver mais do que 0 no carrinho */}
           {cartItemProduct.length > 0 &&  <span className='cart-status'>{cartItemProduct.length}</span>}
        </button>
    )
}
  

export default CartButton