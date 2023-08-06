
export const reducer = (state, action) =>{
    switch (action.type) {
        case "Add_To_Cart":
            return{...state, cart : [...state.cart, action.payload]}
            
        
    
        default:
            return state
    }
}