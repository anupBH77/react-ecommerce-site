const initiaState = {
    addedItem: [],
    Total:0,
  };
  export const cartItemReducer=(state=initiaState,action)=>{
    switch (action.type) {
        case "Add_to_cart":
            return 
            break;
        case  'remove_From_Cart':
                const ind= state.addedItem.findIndex((curItem)=>{
                    return curItem.id==action.payload.id;
                })
                // state.addedItem[ind].quantity-=1;
                console.log(ind);
                // findcartIndex(state,action)
                state.addedItem[ind].quantity==1?state.addedItem.splice(ind,1):state.addedItem[ind].quantity-=1;  
                return {
                    Total:state.Total-action.payload.price,
                    ...state,
                }
                break;   
        default:
            return{
                ...state,
            }
            break;
    }
  }