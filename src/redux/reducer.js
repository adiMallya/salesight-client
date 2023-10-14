
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
        case "FETCH_DATA_PENDING":
            return {
                ...state,
                loading: true
            }
        default: return state;
    }
}
