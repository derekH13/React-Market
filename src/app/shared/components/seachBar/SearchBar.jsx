import React, { useState, useContext } from "react";
import '../seachBar/SeachBar.css'

import Util from "../../../../Api/Util";
import AppContext from "../../contexts/AppContext";




function SearchBar (){

    const {setProducts, setLoading} = useContext(AppContext)
    const [searchValue, setSearchValue] = useState("")



    //callback quando o form der submit
    const handleSearch = async (e)  => {
        e.preventDefault()

        //fazer o spinner rodar antes de pesquisar
        setLoading(true)

        //recaregar os state dos produtos em relação a pesquisa
        const products = await Util.requisicao(searchValue)
        setProducts(products.results)

        //depois de carregar a pesquisa parar o spinner
        setLoading(false)

        //limpa a pesquisa
        setSearchValue('')
    }



    return(
        <form class="search" onSubmit={handleSearch}>
            <input type="text"
            value={searchValue}
            class="search__input"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Procure Aqui o que deseja" />


            <button class="search__button" type="submit">
                <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
            </button>
        </form>
    )
}


export default SearchBar;