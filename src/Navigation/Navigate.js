import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import Login from "../components/Pages/Login";
import ProductDetails from '../components/Pages/ProductDetails';
import Cart from '../components/Pages/Cart';
import Home from '../components/Pages/Home';
import Contact from '../components/Pages/Contact';
import PageNotFound from '../components/Pages/PageNotFound';

const Navigate = () => {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />

        <Route path="/productdetails"
          element={
            <PrivateRoute>
              <ProductDetails />
            </PrivateRoute>
          } />
        <Route path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          } />
        <Route path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          } />
        <Route path="/*"
          element={
            <PrivateRoute>
              <PageNotFound />
            </PrivateRoute>
          } />

      </Routes>
    </BrowserRouter>
  </>
  );
}

export default Navigate