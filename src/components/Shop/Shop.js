import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './../Product/Product';
import Cart from './../../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    //new state because new iteams add korar jonne 
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    //cart bayre theke load korar jonno 
    useEffect( ()=> {
        const storedCart = getStoredCart();
        const savedCart =[];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            setCart(savedCart)
        }
    },[products])

    //button low level e kaj korbe na cause data flow upper to lower direction. tai level match kore orthat upper level e kaj ta hobe just btn click onno jayagy hocche [product e basically]
    const handleAddToCart = (selectedProduct) => {
        
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if(!exists){
            //exist na korle 1 diye set kore dite hbe
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }else{
            //exist korle, bakigulo add howar jonne quantity ekhane 1 kore barai dite hobe and then set kore dite hbe new cart e.
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;