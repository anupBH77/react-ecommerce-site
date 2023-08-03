import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  addedItem: [],
  Total:0,
};
let indexx=-1
const findcartIndex=(state, action) => {
    indexx = state.addedItem.findIndex((curItem) => {
      return curItem.id == action.payload.id;
    });
}
export const cartItemSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.Total += action.payload.price;
        // console.log('in addto')
        findcartIndex(state,action);
    //   const indexx = state.addedItem.findIndex((curItem) => {
    //     return curItem.id == action.payload.id;
    //   });
      if (indexx != -1) {
        state.addedItem[indexx].quantity += 1;
      } else state.addedItem.push(action.payload);
    },
    removeFromCart:(state,action)=>{
        const ind= state.addedItem.findIndex((curItem)=>{
            return curItem.id==action.payload.id;
        })
        // state.addedItem[ind].quantity-=1;
        console.log(ind);
        // findcartIndex(state,action)
        state.Total-=action.payload.price
        state.addedItem[ind].quantity==1?state.addedItem.splice(ind,1):state.addedItem[ind].quantity-=1;  
    },


    // removeFromCart:(state,action)=>{

    //     state.addedItem.splice(state.addedItem.indexOf(action.payload),action.payload)
    // }
    // decreament:(state)=>{
    //     state.countValue==1?state.countValue=null:state.countValue--;
    // },
  },
});
export const selectCartItem = (state) => state.cartItem.addedItem;
export const selectTotal=(state)=>state.cartItem.Total
export const { addToCart,removeFromCart } = cartItemSlice.actions;
export default cartItemSlice.reducer;
