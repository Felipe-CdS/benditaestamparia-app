export var cartProducts = [
    {
        quantity: "test",
        productId: 1,
        size: "G"
    },

    {
        quantity: "test",
        productId: 2,
        size: "M"
    }
]
    
export function addToCart(productId, productSize){
    var quantity = document.getElementById("quantity-input").value;

    var newProduct = {
        quantity: quantity,
        productId: productId,
        size: productSize
    }

    cartProducts.push(newProduct);
}