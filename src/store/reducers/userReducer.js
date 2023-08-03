const initialState={
    currUser:null
}
export const userReducer=(state=initialState,action)=>{
    switch (action.type)
    {
    case 'user_set':
        return 
        {
            currUser:action.payload
        }
    }
}