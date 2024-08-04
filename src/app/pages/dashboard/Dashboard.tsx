import Header from '../../shared/components/Header/Header'
import Util from '../../../Api/Util'


//aqui é uma pagina
export const Dashboard = () => {
    return(
        <div>
                <Header />
                
                
        </div>
        
    )

}


Util.requisicao('celular').then((data) => {

    if(!data)return

    console.log(data);
    
})