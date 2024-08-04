


export class Util {
  
 static async requisicao(query: string): Promise<any>{
        try{
           const Response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)

           if(!Response){
            throw new Error('deu erro')
           }

           const result =  Response.json()

           return result

        }catch(error){

        }

    }





}

export default Util