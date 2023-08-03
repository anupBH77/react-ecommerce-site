import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Location } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './ProductItem.css'
import React from "react";
export const ProductItem=()=>{
    const {state}=useLocation();
    // state
    return (
        <div className="productitem-container">
            {/* {fat} */}
            {/* {console.log({state})} */}
            <div className="image-container" style={{backgroundImage:`url(${state.ImageUrl})`}}></div>
            <div className="product-desc">
                <div>{state.Price}</div>
                <div > {state.Name}</div>
            </div>
        </div>
    );
}