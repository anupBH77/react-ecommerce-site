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
export const formReducer=(stae=initialState,action)=>{
    switch (action.type) {
        case 'save_form_data': return{
            'userName':'default name',
            'email':'email',
            'address':'address',
            ...initialState
        }
            break;
    
        default:
            return {...initialState}
            break;
    }

}