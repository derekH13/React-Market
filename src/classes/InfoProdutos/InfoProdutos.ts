import {produto} from '../../app/shared/Interface/Interface'


class ProdutosInfo {
    id: string
    thumbnail: string
    title: string
    price: number
    originalPrice: number
    quantity: number
    marca: string

    constructor(item: produto) {
        this.id = item.results.id
        this.thumbnail = item.results.thumbnail
        this.title = item.results.title
        this.price = item.results.price 
        this.originalPrice = item.results.original_price
        this.quantity = item.results.available_quantity 
        this.marca = item.results.official_store_name 
    }


}



