import Header from '../../shared/components/Header/Header'
import Util from '../../../Api/Util'

import CarouselDesconto from '../../shared/components/Carrosseis/CarouselDesconto'
import Carrosseis from '../../shared/components/Carrosseis/Carrosseis'
import '../dashboard/Dashboard.css'
import Products from '../../shared/components/Products/Products'
import Provider from '../../shared/contexts/Provider'
import Cart from '../../shared/components/Cart/Cart'


//aqui é uma pagina
export const Dashboard = () => {
    return(
            <Provider>

                <Header />
                <Carrosseis />

                <div className="interface">
                     <h1 className='descontos-title'>Produtos <span>Exclusivos!</span></h1>
                </div>

                <div className="grid1 interface">
                    <Products />
                </div>
                                    

                <div className="interface">
                    <CarouselDesconto/>
                </div>
                <Cart />
            </Provider>
        
    )

}
