import React, { useEffect } from "react";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import "./SearchBar/SearchBar.css"

const StoreApp = () => {
    const [productState, setProductsState] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())            
            .then((productsArray) => {
                const newProductsState = productsArray.map((product) => {
                    return product
                })
                setProductsState(newProductsState)
            })
    }, [])

    const hasProducts = productState.length > 0

    return (
        <div>
            <h1>Fake Store</h1>
            <h3>Welcome to my Fake Store!</h3>
            <p>Here you'll find a variety of items from the Fake Store API!</p>
            {hasProducts ? <SearchBar products = {productState}/> : "Loading..."}
        </div>
    )
}

export default StoreApp