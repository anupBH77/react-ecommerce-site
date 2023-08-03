// import SHOP_DATA from "../pages/shopPage/shopPageData"
// import { ProductPreviewComp } from "../components/ProductPreviewComp/ProductPreviewComp"
import { useSelector } from "react-redux";
import { ProductCard } from "../components/productcard/ProductCard";
import './productPreview.css'
import React from "react";
import { selectCartItem } from "../reducers/slices/cartItemSlice";


export const ProductPreview=(props)=>

{
    // {console.log(typeof(props))}
    // const itemsholder=items;
    return(
        <div>
            <div className="title">
                {props.title}
            </div>
        <div className="productItems-holder">
            {/* <h2>{title}</h2> */}
            {props.items.map((item)=>< ProductCard key={item.id} item={item}></ProductCard>)}
        </div>
        </div>
        // <div className="productItems-holder">
        //     <div>1</div>
        //     <div>2</div>
        //     <div>3</div>
        //     <div>4</div>
        // </div>
            // <div className="productItem-holder">
            //     {items.filter(item=>item.id>4).map(({id,...otherItemData})=>< ProductCard key={id} {...otherItemData}></ProductCard>)}
            // </div>
            
       
    );

    


}