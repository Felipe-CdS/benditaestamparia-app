export default {
    addProduct(newProduct){
        return { type: 'ADD_PRODUCT', payload: newProduct }
    }
}