import { useSelector } from 'react-redux';
import './cart-dropdown.styles.css'
import React from "react";
import { selectCartItem } from '../../../../reducers/slices/cartItemSlice';
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';
const CartDropdown=()=>{
    const cartItem=useSelector(selectCartItem);
    console.log(cartItem)
    // const d=[]
    // console

    // d.length()
    return (
        <>
        {cartItem.length==0?<div className="cart-dropdown">Cart is empty.</div>:
             <div className="cart-dropdown">
             {cartItem.map(({...item})=><CartItem {...item}></CartItem>)}
             <Link className='chk-btn' to='/cart/checkout'>CHECKOUT</Link>
             {/* <button className='chk-btn'>CHECKOUT</button> */}
         </div>        
        }
        </>
       
    );
}
export default CartDropdown;