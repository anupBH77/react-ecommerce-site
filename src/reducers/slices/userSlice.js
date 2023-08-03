import {createSlice} from '@reduxjs/toolkit' 
const initialState={
    curUser:null
}
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        curUserSetter:(state,action)=>{state.curUser=action.payload}
    },
})
export const {curUserSetter}= userSlice.actions
export const selectUser=state=>state.user.curUser 
export default userSlice.reducer
