import React from "react";
import { useSelector } from "react-redux";
import { selectCartItem } from "../../reducers/slices/cartItemSlice";
import CheckOutProduct from "./CheckOutProduct";
import { Subtotal } from "./subtotal";
const CheckOut=()=>{
    const addedItem = useSelector(selectCartItem)
    console.log(addedItem)
    return(
        <div className="chkout-container">
            <div className="checkout-header"> 
            </div>
            <div className="item-container">
                <CheckOutProduct />
                <div>
                <Subtotal/>

                </div>
                
            </div>
            
        </div>
    );

}
export default CheckOut