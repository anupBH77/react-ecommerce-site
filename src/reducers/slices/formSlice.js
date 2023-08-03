import { createSlice } from "@reduxjs/toolkit";
const initialState={
    // saveDisToggler:{
    //     'save':false,
    //     'discard':false
    // },
    userdetails:{
        'userName':'default name',
        'email':'email',
        'address':'address',
    }
}
export const formSlice=createSlice({
    name:'form',
    initialState,
    reducers:{
        saveHandler:(state,action)=>{
            state.userdetails=action.payload  
        }

    }

})
export  const selectData=(state)=>state.userdetails;
export const {saveHandler} = formSlice.actions;
export default formSlice.reducer;