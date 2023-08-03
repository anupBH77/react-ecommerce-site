const initialState={
    isHidden:true
}

export const dropHandlerReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'toggle':
            return {
                    isHidden:!state.isHidden
            }
            
            break;
    
        default:return {...state}
            
    }

}