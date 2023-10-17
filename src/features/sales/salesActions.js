import * as salesService from "./salesServices";

const fetchAllSales = () => async (dispatch) => {
    dispatch({ type: "FETCH_DATA_PENDING" });
    try {
        const data = await salesService.getAllSales();
        if (data.success) {
            dispatch({ type: "SALES_DATA_SUCCESS", payload: data.data })
        }
    } catch (err) {
        console.error(err);
        dispatch({ type: "SALES_DATA_FAILURE" });
    }
}

const recordASale = (saleDetails) => async (dispatch) => {
    dispatch({ type: "FETCH_DATA_PENDING" });
    try {
        const data = await salesService.postSaleData(saleDetails);
        if (data.success) {
            dispatch({ type: "SALES_DATA_SUCCESS", payload: data.data })
        }
    } catch (err) {
        if (err && err.success === false) {
            dispatch({ type: "SALES_DATA_FAILURE", payload: err.error });
        } else {
            dispatch({ type: "SALES_DATA_FAILURE" });
        }
    }
}

export { fetchAllSales, recordASale };