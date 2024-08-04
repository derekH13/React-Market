import React from "react";
import '../Header/Header.css'

import SearchBar from "../seachBar/SearchBar";
import CartButton from "../CartButton/CartButton";

import './Header.css'

function Header() {
    return(
        <header className="header">
            <div className="container">
               
            <SearchBar />
            <CartButton />


            </div>
        </header>
    )
}

export default Header;