import React from "react"
import './s.scss'
import './CartItem.css'
import { useSelector } from "react-redux"
import { selectTotal } from "../../../../reducers/slices/cartItemSlice"
export const CartItem=({name,price,imageUrl,quantity})=>{
    const elem = useSelector(selectTotal);
    // console.log(elem)
    return(
        
        <div className="cart-item" >
            <div className="img" style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="item-details">
                <div className="name">{name}</div>
                <div className="quantity-price">{quantity} x {price}$</div>
            </div>
        </div>
    )
} 