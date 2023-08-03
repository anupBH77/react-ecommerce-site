import { user_setter } from "../action.types/user.type";
export const setUser=(state)=>{
    return {
        type:user_setter,
        payload:state,
    }
}