import Header from '../../shared/components/Header/Header'
import Util from '../../../Api/Util'

import CarouselDesconto from '../../shared/components/Carrosseis/CarouselDesconto'
import Carrosseis from '../../shared/components/Carrosseis/Carrosseis'
import '../dashboard/Dashboard.css'
import Products from '../../shared/components/Products/Products'


//aqui é uma pagina
export const Dashboard = () => {
    return(
        <div>
                <Header />
                <Carrosseis />

                <div className="interface">
                     <h1 className='descontos-title'>Descontos <span>Exclusivos!</span></h1>
                </div>

<div className="grid1">
    <Products />
</div>
                    

                <div className="interface">
                    <CarouselDesconto/>
                </div>
                    




        </div>
        
    )

}
