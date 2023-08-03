import React from "react";
import { useSelector } from "react-redux";
import { selectTotal } from "../../reducers/slices/cartItemSlice";
import './subtotal.css'
import StripeCheckout from 'react-stripe-checkout'
export const Subtotal =()=>{
    const total=useSelector(selectTotal)
    const centTotal=total*100;
    const key='pk_test_51NQXt2SEO4TAcfxLvu2c0rS2jiTEH81hU72Hra9rK6dLfi7WMmKRmQ08BH6q5a1IzwIGT2iQpkb2qxTjL27hX1x100AeWCFVg8'
    return(
        <div className="total-container">
            <div className="sub text d">
                Subtotal
            </div>
            <div className="sub-val d ">
                {total}
            </div>
            <div className="gst text d">
                GST.
            </div>
            <div className="gst-val d">
                0
            </div>
            <div className="total text d">
                Total
            </div>
            <div className="total-val d">
                {total}
            </div>
            
            
            {/* <ul>
                <li>
                    <span>Subtotal</span>
                    <span>{total}</span>
                    dgf
                </li>
            </ul>
            <ul>
                <li>
                    <span>GST.</span>
                    <span>.</span>
                </li>
            </ul>
            <ul>
                <li>
                    <span>Total</span>
                    <span>{total}</span>
                </li>
            </ul> */}
            <StripeCheckout label="pay Now"
            name="anup store"
            description= {`your total  is ${total}$ `}
            amount={centTotal}
            token={()=> {alert('payment successfull')}}
            stripeKey={key}
            
            />

            
            {/* <div className="pay">Payment</div> */}
            
        </div>
    );
}