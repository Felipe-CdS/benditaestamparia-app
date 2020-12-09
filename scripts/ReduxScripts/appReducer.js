const initialState = {
    cartArray:[ ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        /*This case adds a new product to the cart but checks if a product of the same type is already there*/
        case 'ADD_PRODUCT':
            let checkSameProduct = false, duplicateIndex = 0;

            (state.cartArray).forEach(element => {
                if( action.payload.productId == element.productId &&
                    action.payload.size == element.size) {
                    duplicateIndex = (state.cartArray).indexOf(element);
                    checkSameProduct = true;
                }
            });

            if(checkSameProduct){
                //This creates another object spreading the cartArray objects since Redux has this Immutability restriction
                var x = [ ...state.cartArray ];
                //then it get the index of the duplicate and adds both quantity
                x[duplicateIndex].quantity += action.payload.quantity;
                //and returns a brand new immutable state
                return { ...state, cartArray: [...x] }
            }
            else{
                return { ...state, cartArray: [...state.cartArray, action.payload] }
            }

        case 'REMOVE_PRODUCT':
                var x = [   ...state.cartArray.slice(0, action.payload),
                            ...state.cartArray.slice(action.payload + 1) ];

                return { ...state, cartArray: [...x] }

        default:
            return state
    }
}