import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProducts, getSpecificProducts } from './Service';
import NavBar from '../NavBar';
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const Products = useSelector((state) => state?.data?.products);
    const categoryNames = useSelector((state) => state?.data?.categories);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const fetchCategories = async () => {
        setLoading(true);
        try {
            const response = await getCategories();
            const Categories = response?.data;
            console.log(Categories);
            dispatch({ type: 'SET_CATEGORIES', payload: Categories });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleClick = async (category) => {
        try {
            const response = await getSpecificProducts(category);
            const productsData = response?.data;
            dispatch({ type: 'SET_PRODUCTS', payload: productsData });

            setSelectedCategory(category);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await getProducts();
            const productsData = response?.data;
            dispatch({ type: 'SET_PRODUCTS', payload: productsData });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDetailsClick = (Product) => {
        dispatch({ type: 'SET_S.PRODUCT', payload: Product });
    };

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, []);

    return (
        <div className="home-container">
            <NavBar />
            <div className='container'>
                <h1 className="home-title"><u><b>Explore Our Products</b></u></h1>
                {loading ? (
                    <p className="loading-text">Loading...</p>
                ) : (
                    <div>
                        <div className='Categories'>
                            {categoryNames?.map((Cat) => (
                                <div
                                    className={`category ${selectedCategory === Cat ? 'selected' : ''}`}
                                    onClick={() => handleClick(Cat)}
                                >
                                    {Cat}
                                </div>
                            ))}
                        </div>
                        <ul className="product-list">
                            {Products?.map((Product, index) => (
                                <div className="product-card" key={index}>
                                    <img src={Product.image} alt={Product.title} className="product-image" />
                                    <h2 className="product-title">{Product.title}</h2>
                                    <p className="product-price">Price: ${Product.price}</p>
                                    <button className='Detail_btn'
                                        onClick={() => handleDetailsClick(Product)}>
                                        <Link to="/productdetails">
                                            Details
                                        </Link>
                                    </button>

                                </div>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;