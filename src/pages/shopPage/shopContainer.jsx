import React, { useEffect } from "react";
import {withRouter} from 'react-router-dom'
import { Route } from "react-router-dom";
import SHOP_DATA from "./shopPageData";
import { ProductPreview } from "../../productPreview/productPreview";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItem } from "../../reducers/slices/cartItemSlice";
import { fetchShopdata, selectShopDataAsArray } from "../../reducers/slices/shopPageDataSlice";
import { store } from "../../store/store";
const ShopContainer=()=>{
    const dispatch=useDispatch();
    // const select=useSelector()
    useEffect(async ()=>{
        dispatch(fetchShopdata('http://localhost:8000/shopdata'))

    },[])
    console.log(store.getState())
    const shopdata=useSelector(selectShopDataAsArray);
    console.log(shopdata.map(item=>item))
    // console.log(store.getState())
    return(
        
        <div>
            {shopdata.map(({id,...otherCOllection})=><ProductPreview key={id} {...otherCOllection}></ProductPreview>)}
            {/* {shopdata.map((item)=>{<div></div>})} */}
            {/* {shopdata.map(()=>{<ProductPreview ></ProductPreview>})} */}

        </div>
    );

}
export default ShopContainer;
{/* <div>
{Object.keys(SHOP_DATA)}
{/* {Object.keys(SHOP_DATA).map(k=>(key=SHOP_DATA.k.id,obj=SHOP_DATA.k)=>{})} */}
// object.keys(.).map(({id,...otherCOllection})=><ProductPreview key={id} {...otherCOllection}></ProductPreview>)} */}
//  {console.log("props=",this.props.history)}
// </div> */}
