import { getStoredCart } from "../utilities/fakedb";

export const productsAndCart = async () => {
    //get Products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    //get cart
    const savedCart = getStoredCart();
    const storedCart = [];

    for(const id in savedCart){
        const addedProduct = products.find(products => products.id === id);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            storedCart.push(addedProduct);
        }
    }

    return {products: products, storedCart: storedCart};

}