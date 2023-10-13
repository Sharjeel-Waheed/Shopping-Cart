import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductDetails.css';
import NavBar from '../NavBar';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state?.data?.selectedProduct);

    const addToCart = (product) => {
        dispatch({ type: 'SET_CART', payload: product });
    };

    return (
        <>
        <NavBar />
        <div className='product-details'>
            <img src={productDetail.image} alt={productDetail.title} className='product-image' />
            <p className='product-title'>{productDetail.title}</p>
            <p className='product-category'>Category : {productDetail.category}</p>
            <p className='product-price'>Price : ${productDetail.price}</p>
            <p className='product-description'>Details : {productDetail.description}</p>
            <button onClick={() => addToCart(productDetail)}>Add To Cart</button>
        </div>
        </>
    );
};

export default ProductDetails;