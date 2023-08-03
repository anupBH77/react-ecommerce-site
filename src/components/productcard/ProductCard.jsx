import { useDispatch, useSelector } from 'react-redux';
import './ProductCard.css'
import { CartPlus, PlusCircleFill, PlusSquare } from 'react-bootstrap-icons';
import { addToCart, removeFromCart, selectCartItem } from '../../reducers/slices/cartItemSlice';
import React, { Component, useState } from 'react';
// import { selectCartItem } from '../../reducers/slices/cartItemSlice';
export const ProductCard=({item})=>{
    const itemValue=(useSelector(selectCartItem)).find((curItem)=>{return curItem.id==item.id})
    const [hideStatus,toggle]= useState(true);
    // itemValue!=undefined?toggle(false):console.log('else block')
    // console.log(itemValue==undefined)
    // if(itemValue.quantity>1)
    // {
    //     console.log(hideStatus)
    // }
    // itemValue>1?toggle(false):toggle(true)
    // console.log(hideStatus)

    const {id,imageUrl,name,price}=item;
    // console.log(useSelector(selectCartItem));
    const dispatch =useDispatch();
    // increament()
    // increament();
//   dispatch(increament());
    // const [value,increament]=useState(0)
    const ss= useSelector(selectCartItem);
    // console.log(typeof(increament))
    // dispatch(increament(+++++++))
    // componentdidmo
    const inc=()=>{dispatch(addToCart({'quantity':1,...item}));}
    return(

        <div className='product-holder'>
           <div className="img-holder" style={{backgroundImage:`url(${imageUrl})`}}>
            {/* <h1>{ss}</h1> */}
                <div className='upper'>
                    
                </div>
                <div className='lower'>

                    {itemValue==undefined?
                            <button className='cart-butt button-31' onClick={inc}> ADD TO CART</button>:<div ><button className='incdec' onClick={()=>{dispatch(removeFromCart({...item}))}}>-</button><span>{itemValue.quantity}</span><button className='incdec' onClick={inc}>+</button></div>
                    }

                </div>
           </div>
           <div className='product-detail-holder'>
                <div className='product-name'>{name}</div>
                <div className='product-price'>{price}$</div>
           </div>
        </div>
    );

}