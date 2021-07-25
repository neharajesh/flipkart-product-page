export const initialFilterData = {
    sortByPrice: false,
    sortBySize: null,
    sortByBrand: null,
    sortByIdealFor: null
}
export const reducerFunction = (state, action) => {
    switch(action.type) {
        case "SORT_BY_PRICE": {
            return {
                ...state,
                sortByPrice: action.payload
            }
        }
        case "SORT_BY_SIZE": {
            return {
                ...state,
                sortBySize: action.payload
            }
        }
        case "SORT_BY_BRAND": {
            return {
                ...state,
                sortByBrand: action.payload
            }
        }
        case "SORT_BY_IDEAL_FOR": {
            return {
                ...state,
                sortByIdealFor: action.payload
            }
        }
        case "RESET_FILTERS": 
            return initialFilterData
        default: return state
    }
}