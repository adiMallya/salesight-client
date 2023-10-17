
const initialState = {
    inventory: [],
    inventoryReport: [],
    sales: [],
    salesReport: {},
    loading: false,
    error: null
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INVENTORY_REPORT_SUCCESS":
            return {
                ...state,
                inventoryReport: action.payload,
                loading: false,
                error: null
            }
        case "REPORT_FAILURE":
            return {
                ...state,
                error: "Error in fetching report",
                loading: false
            }
        case "SALES_REPORT_SUCCESS":
            return {
                ...state,
                salesReport: action.payload,
                loading: false,
                error: null
            }
        case "INVENTORY_DATA_SUCCESS":
            return {
                ...state,
                inventory: action.payload,
                loading: false,
                error: null
            }
        case "REMOVE_FROM_INVENTORY":
            return {
                ...state,
                inventory: state.inventory.filter(item => item._id !== action.payload),
                loading: false
            }
        case "INVENTORY_DATA_FAILURE":
            return {
                ...state,
                error: action?.payload || "Something went wrong.",
                loading: false
            }
        case "SALES_DATA_SUCCESS":
            return {
                ...state,
                sales: action.payload,
                loading: false,
                error: null
            }
        case "SALES_DATA_FAILURE":
            return {
                ...state,
                error: action?.payload || "Something went wrong.",
                loading: false
            }
        case "FETCH_DATA_PENDING":
            return {
                ...state,
                loading: true
            }
        default: return state;
    }
}
