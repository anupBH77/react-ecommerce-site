import React from "react";
import { Bootstrap } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectCartItem } from "../../reducers/slices/cartItemSlice";
import * as Icon from "react-bootstrap-icons";

import './co.css'
const CheckOutProduct = (it) => {
  const items = useSelector(selectCartItem);
  const dispatch=useDispatch();
  console.log();
  return (
    <div className="sec-container">
      {items.map((item) => (
        <div className="prod-container">
            <div className="chk-img-holder" style={{backgroundImage:`url(${item.imageUrl})`}}>
                {/* <div className="img-holder" style={{backgroundImage:`url:(${item.imageUrl})`}}></div> */}
            </div>
            <div className="text name-holder">
                {item.name}
            </div>
            <div className="text price-holder">
                {item.price}$ 
            </div>
            <div className="text qu-holder">
                {item.quantity}
            </div>
            <div className="text remove">
            <Icon.XLg className="undo"onClick={()=>dispatch(removeFromCart({...item}))}></Icon.XLg>
            </div>
            

        </div>
      ))}
      {/* <div className="prod-img" style={{backgroundImage:`Url()`}}></div>
            <div className="prod-name">{it}</div>
            <div className="prod-qty"></div>
            <div className="price"></div>
            <div className="remove">x</div> */}
    </div>
  );
};
export default CheckOutProduct;
