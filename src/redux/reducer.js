const initialState = {
    inventory: [],
    inventoryReport: null,
    sales: [],
    salesReport: null,
    loading: true,
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
        default: return state;
    }
}
