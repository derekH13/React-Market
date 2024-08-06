import React from 'react'
import { produto } from '../app/shared/Interface/Interface'

export class Util {
  
 static async requisicao(query: string): Promise<produto | undefined>{
        try{
           const Response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)

           if(!Response){
            throw new Error('deu erro')
           }

           const data: Promise<produto> =  Response.json()

           return data

        }catch(error){

        }

    }


static FormatarMoeda(item: number): string{
   const result: string =  item.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
   })

   return result

}



}

export default Util
