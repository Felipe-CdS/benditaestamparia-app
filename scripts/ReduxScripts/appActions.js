export function addProduct(newProduct){
        return { type: 'ADD_PRODUCT', payload: newProduct }
}

export function removeProduct(removedProduct){
        return { type: 'REMOVE_PRODUCT', payload: removedProduct }
}