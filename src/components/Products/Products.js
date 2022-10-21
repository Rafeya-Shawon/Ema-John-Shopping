import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "./Products.css";

const Products = (props) => {
    const {handleAddToCart} = props;
    const {name, ratings, img, seller, price} = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button className='btn-cart' onClick={()=> handleAddToCart(props.product)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;