import create from "zustand";
import { IItem } from './interfaces';

interface Store {
    products: IItem[],
    product: IItem,
    getInitialData: (data: any) => void,
    addToProducts: (product: IItem) => void,
    eliminateProduct: (product: IItem) => void,
    updateProduct: (product: IItem) => void,
    handleFormChange: (newValue: IItem ) => void,
    clearForm: () => void,
    editMode: boolean,
    changeEditMode: (value: boolean) => void,
}

const useStore = create<Store>((set) => ({
    products: [],
    product: {
        title: '',
        description: '',
        price: ''
    },
    
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
    },

    updateProduct(product: IItem) {
        set(state => ({
            products: (this.products.filter((item) => {
                     return item.id != product.id
                   })
            )
        }))
    },

    handleFormChange(newValue: IItem) {
        
        set(state => ({
             product: (newValue)
        }))

    },

    clearForm() {
        set(state => ({
            product: ({
                title: '',
                description: '',
                price: ''
            })
        }))
    },
    editMode: false,
    changeEditMode(value) {
        set(state => ({  editMode : value } ))
    }
    

}))


export default useStore


