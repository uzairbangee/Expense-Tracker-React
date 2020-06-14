const Reducer  = (state, action) => {
    switch(action.type){
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions : [...state.transactions, action.payload.transaction],
            }
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions : state.transactions.filter((transaction, index) => index !== action.payload.id)

            }
        case "SET_MODE":
            return {
                ...state,
                darkmode: !state.darkmode
            }
        default:
            return {
                ...state
            }
    }

}

export default Reducer;