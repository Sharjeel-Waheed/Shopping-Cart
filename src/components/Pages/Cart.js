import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import NavBar from '../NavBar';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state?.data?.cart);

    const handleDelete = (id) => {
        const updatedCart = cartItems.filter(
            (cartItems) => cartItems !== id
        );
        dispatch({ type: 'REMOVE_ITEM', payload: updatedCart });
    }

    const totalQuantity = cartItems.length;
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <>
            <NavBar />
            <div className="cart-container">
                <h1>Your Cart</h1>
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Item No.</th>
                            <th>Products</th>
                            <th>Images</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems?.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item?.title}</td>
                                <td>
                                    <img className="cart-item-image"
                                        src={item?.image} alt={item?.title} />
                                </td>
                                <td>${item?.price}</td>
                                <td><button className='Del-btn' onClick={() => handleDelete(item)}>Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="CartTotal">
                    <p>Total Items = <span id="Quantity">{totalQuantity}</span></p>
                    <p>Total Price = <span id="T-Price">${totalPrice}</span></p>
                </div>
            </div>
        </>
    );
};

export default Cart;