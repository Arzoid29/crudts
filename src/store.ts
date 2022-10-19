import create from "zustand";
import { IItem } from './interfaces';
interface Store {
    products: IItem[],
    getInitialData: (data: any) => void,
    addToProducts: (product: IItem) => void,
    eliminateProduct: (product: IItem) => void,
}

const useStore = create<Store>((set) => ({
    products: [],
    
    getInitialData(data){
        set(state => ({
            products: [...data]
        }))
    },

    addToProducts(product: IItem) {
        set(state => ({
            products: [...state.products, product]
        }))
    },

    eliminateProduct(product: IItem) {
        set(state => ({
            products: (this.products.filter((item) => {
                     return item.id != product.id
                   })
            )
        }))
    }
}))


export default useStore
