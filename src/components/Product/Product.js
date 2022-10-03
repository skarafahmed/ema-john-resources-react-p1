import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const {product, handleAddToCart} = props;
    const { img, name, price, seller, ratings } = product;

    return (
        <div>
            <div className="product-card">
                <div className="card-product-img">
                    <img src={img} alt="" />
                </div>
                <div className="card-product-description">
                    <h2>{name}</h2>
                    <h3 className='price'>Price: ${price}</h3>
                    <p>Manufacturer:{seller}</p>
                    <p>Rating:{ratings} stars</p>
                </div>
                <div className="addtocart-btn">
                    <button onClick={() => handleAddToCart(product)}>Add to Cart
                    <FontAwesomeIcon className='cart-btn-icon' icon={faCartPlus}></FontAwesomeIcon>
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default Product;