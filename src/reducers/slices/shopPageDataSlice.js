import { createSlice } from "@reduxjs/toolkit"
import SHOP_DATA from "../../pages/shopPage/shopPageData"
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Await } from "react-router-dom";
import axios from "axios";
const initialState={
    isLoading:false,
    shopData:[],
    error:null,
   
};

export const fetchShopdata = createAsyncThunk('shopData/fetchShopData', async (url)=>{
    const response= await fetch(url)
    const data= await response.json();
        return data;
}) 
export const ShopPageDataSlice=createSlice({
    name:'ShopPageData',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchShopdata.pending,(state)=>{
            state.isLoading=true;
            state.error=null     
        })
        builder.addCase(fetchShopdata.fulfilled,(state,action)=>{
            state.shopData=action.payload
            state.isLoading=false
            state.error=null
        })
        builder.addCase(fetchShopdata.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.payload
            state.shopData=[]
        })
    }
    
    // reducers:{
    //     doNothing:(state)=>{
    //         state.shopData=state.shopData;
    //     }
    // }
});
export const selectShopDataAsArray=(state)=>Object.keys(state.ShopPageData.shopData).map(key=>state.ShopPageData.shopData[key]);
export const selectShopPageDataAsObject=(state)=>state.ShopPageData.shopData
// export const selectShopDataAsArray=(state)=>Object.keys(state.ShopPageData.shopData).map(key=>state.ShopPageData.shopData[key])
// export const selectShopPageDataAsObject=(state)=>{state.ShopPageData.shopData};
// export const {}=ShopPageDataSlice.actions;
// export const f= fetchShopdata

export default ShopPageDataSlice.reducer;