import { createSlice } from "@reduxjs/toolkit"

// import react
const initialState={
    isVisible:false,
}
export const dropHandlerSlice=createSlice({
    name:'dropHandler',
    initialState,
    reducers:{
        Toggler:(state)=>{
            state.isVisible=!state.isVisible;
        },
        Togglerfalse:(state)=>{
            state.isVisible=false;
        },
    },
})
export const {Toggler,Togglerfalse} = dropHandlerSlice.actions;
export const Selectbool=(state)=>state.dropHandler.isVisible;
export default dropHandlerSlice.reducer;